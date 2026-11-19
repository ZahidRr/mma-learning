import { PrismaService } from '../prisma/prisma.service.js';
export declare class HealthController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    database(): Promise<{
        status: string;
        database: string;
    }>;
}
