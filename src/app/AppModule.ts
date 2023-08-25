import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import DatabaseModule from '@/common/persistence/DatabaseModule';
import { AppController } from '@/app/controllers/AppController';
import { AppService } from '@/app/services/AppService';
import { UserRepository } from '@/app/repositories/UserRepository';
import { KafkaService } from '@/app/services/KafkaService';

const repositories = [UserRepository];

@Module({
    imports: [ConfigModule.forRoot({ envFilePath: '.env' }), DatabaseModule],
    controllers: [AppController],
    providers: [...repositories, AppService, KafkaService],
})
export class AppModule {}
