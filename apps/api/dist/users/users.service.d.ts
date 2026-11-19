import { PrismaService } from '../prisma/prisma.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateUserDto): Promise<{
        learnerProfile: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            displayName: string;
            gradeLevel: number;
            avatarKey: string | null;
            totalXp: number;
        } | null;
    } & {
        id: string;
        email: string;
        passwordHash: string;
        role: import("../generated/prisma/enums.js").UserRole;
        status: import("../generated/prisma/enums.js").UserStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateOnboardingProfile(userId: string, payload: {
        nickname: string;
        skillLevel: string;
        learningGoal: string;
    }): Promise<{
        learnerProfile: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            displayName: string;
            gradeLevel: number;
            avatarKey: string | null;
            totalXp: number;
        } | null;
    } & {
        id: string;
        email: string;
        passwordHash: string;
        role: import("../generated/prisma/enums.js").UserRole;
        status: import("../generated/prisma/enums.js").UserStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
