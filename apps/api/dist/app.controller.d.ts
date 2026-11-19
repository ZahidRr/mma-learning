import { PrismaService } from './prisma/prisma.service.js';
export declare class AppController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    seedProductionData(): Promise<{
        status: string;
        message: string;
        error?: undefined;
    } | {
        status: string;
        message: string;
        error: any;
    }>;
}
