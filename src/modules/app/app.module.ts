import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from '~/modules/app/services/app.service';
import { DatabaseModule } from '../database/database.module';
import { AppController } from './controllers/app.controller';

@Module({
    imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule],
    providers: [AppService],
    controllers: [AppController],
})
export class AppModule {}
