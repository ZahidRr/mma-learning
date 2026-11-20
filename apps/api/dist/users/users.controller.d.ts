import { UsersService } from './users.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(body: CreateUserDto): Promise<{
        learnerProfile: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            displayName: string;
            gradeLevel: number;
            avatarKey: string | null;
            preferredLanguage: string;
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
    updateOnboarding(userId: string, body: {
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
            preferredLanguage: string;
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
    updateLanguage(userId: string, body: {
        language: string;
    }): Promise<{
        learnerProfile: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            displayName: string;
            gradeLevel: number;
            avatarKey: string | null;
            preferredLanguage: string;
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
