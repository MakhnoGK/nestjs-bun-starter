import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { afterAll, beforeAll, describe, expect, it } from 'bun:test';
import { AppModule } from '~/modules/app/app.module';

describe('sample e2e test', () => {
    let app: INestApplication;

    beforeAll(async () => {
        app = await NestFactory.create(AppModule);

        await app.listen(3000);
    });

    afterAll(async () => {
        await app.close();
    });

    it('shold return hello message', async () => {
        const response = await fetch('http://localhost:3000');
        const text = await response.text();

        expect(response.status).toEqual(200);
        expect(text).toEqual('Hello world');
    });
});
