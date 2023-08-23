import { ConfigService } from '@nestjs/config';

export class ServiceConfig {
    private readonly configService: ConfigService;

    port: number;

    environment: string;

    serviceName: string;

    serviceApiPrefix: string;

    constructor() {
        this.configService = new ConfigService();
        this.port = this.configService.get<number>('PORT');
        this.environment = this.configService.get<string>('SERVICE_ENV');
        this.serviceName = this.configService.get<string>('SERVICE_NAME');
        this.serviceApiPrefix = this.configService.get<string>('SERVICE_API_PREFIX');
    }
}
