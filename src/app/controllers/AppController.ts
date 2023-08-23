import { Controller, Get } from '@nestjs/common';
import { AppService } from '@/app/services/AppService';

@Controller('/v1/hello')
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}
