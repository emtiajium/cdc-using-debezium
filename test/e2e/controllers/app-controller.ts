import { INestApplication } from '@nestjs/common';
import { kickOff } from '@/bootstrap';
import { AppModule } from '@/app/AppModule';
import * as request from 'supertest';
import { SupertestResponse } from '@test/util/supertest-util';
import { getAppAPIPrefix } from '@test/util/service-util';

describe('GET /v1/hello', () => {
    let app: INestApplication;

    beforeAll(async () => {
        app = await kickOff(AppModule);
    });

    afterAll(async () => {
        await app.close();
    });

    async function makeApiRequest(): Promise<SupertestResponse<string>> {
        const { status, body } = await request(app.getHttpServer()).get(`${getAppAPIPrefix()}/v1/hello`);
        return {
            status,
            body,
        };
    }

    it('SHOULD return 200 OK', async () => {
        // Act
        const { status } = await makeApiRequest();

        // Assert
        expect(status).toBe(200);
    });
});
