import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Environment } from '~/enums/environment.enum';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('POSTGRES_HOSTNAME'),
                port: configService.get('POSTGRES_PORT'),
                username: configService.get('POSTGRES_USERNAME'),
                password: configService.get('POSTGRES_PASSWORD'),
                database: configService.get('POSTGRES_DATABASE'),
                synchronize: Bun.env.NODE_ENV != Environment.PRODUCTION,
                entities: [],
            }),
        }),
    ],
})
export class DatabaseModule {}
