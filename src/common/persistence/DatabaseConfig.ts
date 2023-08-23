import { ConfigService } from '@nestjs/config';
import { DatabaseType, LoggerOptions } from 'typeorm';

export class DatabaseConfig {
    type: DatabaseType;

    host: string;

    port: number;

    username: string;

    password: string;

    database: string;

    logging: LoggerOptions;

    constructor() {
        const configService = new ConfigService();

        this.type = configService.get<DatabaseType>('TYPEORM_CONNECTION');
        this.host = configService.get<string>('TYPEORM_HOST');
        this.port = configService.get<number>('TYPEORM_PORT');
        this.username = configService.get<string>('TYPEORM_USERNAME');
        this.password = configService.get<string>('TYPEORM_PASSWORD');
        this.database = configService.get<string>('TYPEORM_DATABASE');
        this.logging = configService.get<string>('TYPEORM_LOGGING').split(',') as LoggerOptions;
    }
}
