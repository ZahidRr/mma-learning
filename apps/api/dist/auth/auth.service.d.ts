import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service.js';
type LoginInput = {
    email: string;
    password: string;
};
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    login(input: LoginInput): Promise<{
        accessToken: string;
        user: {
            id: string;
            email: string;
            role: import("../generated/prisma/enums.js").UserRole;
            learnerProfile: {
                id: string;
                displayName: string;
                gradeLevel: number;
            } | null;
        };
    }>;
    getCurrentUser(userId: string): Promise<{
        id: string;
        email: string;
        role: import("../generated/prisma/enums.js").UserRole;
        learnerProfile: {
            id: string;
            displayName: string;
            gradeLevel: number;
            avatarKey: string | null;
        } | null;
    }>;
}
export {};
