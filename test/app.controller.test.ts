import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { afterAll, beforeAll, describe, it } from 'bun:test';
import request from 'supertest';
import { AppModule } from '~/modules/app/app.module';

describe('sample e2e test', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const testingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = testingModule.createNestApplication();

        await app.init();
    });

    afterAll(async () => {
        await app.close();
    });

    it('GET / - hello', async () => {
        return request(app.getHttpServer()).get('/').expect(200).expect('Hello world');
    });
});
