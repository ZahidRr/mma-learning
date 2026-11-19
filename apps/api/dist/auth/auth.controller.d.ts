import { AuthService } from './auth.service.js';
import { LoginDto } from './dto/login.dto.js';
type AuthenticatedRequest = {
    user: {
        sub: string;
        email: string;
        role: string;
    };
};
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: LoginDto): Promise<{
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
    me(request: AuthenticatedRequest): Promise<{
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
