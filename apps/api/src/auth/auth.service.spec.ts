import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { hash } from 'argon2';
import { AuthService } from './auth.service.js';
import { PrismaService } from '../prisma/prisma.service.js';

describe('AuthService', () => {
  let service: AuthService;

  const prismaMock = {
    user: {
      findUnique: vi.fn(),
    },
  };

  const jwtMock = {
    signAsync: vi.fn(),
  };

  beforeEach(async () => {
    vi.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
        {
          provide: JwtService,
          useValue: jwtMock,
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('returns an access token for valid credentials', async () => {
    const passwordHash = await hash('secret123');

    prismaMock.user.findUnique.mockResolvedValue({
      id: 'user-1',
      email: 'student@example.com',
      passwordHash,
      role: 'STUDENT',
      status: 'ACTIVE',
      learnerProfile: {
        id: 'learner-1',
        displayName: 'Mika',
        gradeLevel: 3,
      },
    });

    jwtMock.signAsync.mockResolvedValue('test-access-token');

    const result = await service.login({
      email: 'student@example.com',
      password: 'secret123',
    });

    expect(result).toEqual({
      accessToken: 'test-access-token',
      user: {
        id: 'user-1',
        email: 'student@example.com',
        role: 'STUDENT',
        learnerProfile: {
          id: 'learner-1',
          displayName: 'Mika',
          gradeLevel: 3,
        },
      },
    });
  });
});