import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from '@/app/AppModule';
import { ServiceConfig } from '@/common/configs/ServiceConfig';

export class Bootstrap {
    private readonly serviceConfig: ServiceConfig;

    constructor(private readonly appModule: AppModule) {
        this.serviceConfig = new ServiceConfig();
    }

    async start(): Promise<INestApplication> {
        const app: INestApplication = await NestFactory.create(this.appModule);
        app.enableShutdownHooks();
        app.useGlobalPipes(new ValidationPipe());
        const { serviceApiPrefix, port } = this.serviceConfig;
        app.setGlobalPrefix(serviceApiPrefix);
        await app.listen(port);
        return app;
    }
}

export function kickOff(module: AppModule): Promise<INestApplication> {
    return new Bootstrap(module).start();
}
