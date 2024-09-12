import { registerAs } from '@nestjs/config';
import { ConfigKey } from '../enums/config-key.enum';
import { Environment } from '../enums/environment.enum';

export const APPConfig = registerAs(
  ConfigKey.App, () => ({
    env:
      Environment[process.env.NODE_ENV as keyof typeof Environment] ||
      'development',
    port: Number(process.env.APP_PORT),
    appName: process.env.APP_NAME,
  }),
);