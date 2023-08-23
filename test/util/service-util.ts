import { ConfigService } from '@nestjs/config';

export function getAppAPIPrefix(): string {
    return new ConfigService().get<string>('SERVICE_API_PREFIX');
}
