import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DatabaseConfig } from '@/common/persistence/DatabaseConfig';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseNamingStrategy } from '@/common/persistence/DatabaseNamingStrategy';
import { User } from '@/app/domains/entities/User';
import Definition from '@/app/domains/entities/Definition';
import Vocabulary from '@/app/domains/entities/Vocabulary';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (): TypeOrmModuleOptions => {
                const databaseConfig = new DatabaseConfig();

                return {
                    type: databaseConfig.type,
                    host: databaseConfig.host,
                    port: databaseConfig.port,
                    username: databaseConfig.username,
                    password: databaseConfig.password,
                    database: databaseConfig.database,
                    entities: [User, Definition, Vocabulary],
                    synchronize: false,
                    logging: databaseConfig.logging,
                    namingStrategy: new DatabaseNamingStrategy(),
                    retryAttempts: 1,
                    autoLoadEntities: false,
                } as TypeOrmModuleOptions;
            },
        }),
    ],
})
export default class DatabaseModule {}
