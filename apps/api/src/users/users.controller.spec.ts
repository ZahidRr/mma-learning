import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller.js';
import { UsersService } from './users.service.js';

describe('UsersController', () => {
  let controller: UsersController;

  const usersServiceMock = {
    create: vi.fn(),
  };

  beforeEach(async () => {
    vi.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: usersServiceMock,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('creates a user with learner profile', async () => {
    usersServiceMock.create.mockResolvedValue({
      id: 'user-1',
      email: 'student@example.com',
      role: 'STUDENT',
      learnerProfile: {
        id: 'learner-1',
        displayName: 'Mika',
        gradeLevel: 3,
      },
    });

    const body = {
      email: 'student@example.com',
      password: 'secret123',
      displayName: 'Mika',
      gradeLevel: 3,
    };

    const result = await controller.create(body);

    expect(usersServiceMock.create).toHaveBeenCalledWith(body);

    expect(result).toEqual({
      id: 'user-1',
      email: 'student@example.com',
      role: 'STUDENT',
      learnerProfile: {
        id: 'learner-1',
        displayName: 'Mika',
        gradeLevel: 3,
      },
    });
  });
});