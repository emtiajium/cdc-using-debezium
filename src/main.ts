import { kickOff } from '@/bootstrap';
import { AppModule } from '@/app/AppModule';

kickOff(AppModule)
    .then(async (app) => {
        console.info(await app.getUrl());
    })
    .catch((error) => console.error(`Error bootstrapping the App`, error));
