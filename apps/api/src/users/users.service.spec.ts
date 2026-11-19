import { Test, TestingModule } from '@nestjs/testing';
import { verify } from 'argon2';
import { UsersService } from './users.service.js';
import { PrismaService } from '../prisma/prisma.service.js';

describe('UsersService', () => {
  let service: UsersService;

  const prismaMock = {
    user: {
      create: vi.fn(),
    },
  };

  beforeEach(async () => {
    vi.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('hashes password before creating user with learner profile', async () => {
    prismaMock.user.create.mockImplementation(async ({ data }) => ({
      id: 'user-1',
      email: data.email,
      role: 'STUDENT',
      learnerProfile: {
        id: 'learner-1',
        displayName: data.learnerProfile.create.displayName,
        gradeLevel: data.learnerProfile.create.gradeLevel,
      },
    }));

    const result = await service.create({
      email: 'student@example.com',
      password: 'secret123',
      displayName: 'Mika',
      gradeLevel: 3,
    });

    const createCall = prismaMock.user.create.mock.calls[0][0];
    const storedHash = createCall.data.passwordHash;

    expect(storedHash).not.toBe('secret123');
    expect(await verify(storedHash, 'secret123')).toBe(true);

    expect(result.learnerProfile).toEqual({
      id: 'learner-1',
      displayName: 'Mika',
      gradeLevel: 3,
    });
  });
});