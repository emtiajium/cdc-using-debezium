import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import DatabaseModule from '@/common/persistence/DatabaseModule';
import { AppController } from '@/app/controllers/AppController';
import { AppService } from '@/app/services/AppService';
import { DefinitionRepository } from '@/app/repositories/DefinitionRepository';
import { UserRepository } from '@/app/repositories/UserRepository';
import { VocabularyRepository } from '@/app/repositories/VocabularyRepository';

const repositories = [UserRepository, DefinitionRepository, VocabularyRepository];

@Module({
    imports: [ConfigModule.forRoot({ envFilePath: '.env' }), DatabaseModule],
    controllers: [AppController],
    providers: [...repositories, AppService],
})
export class AppModule {}
