import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APPConfig } from './app/app-config';
import { validateConfig } from './validation/config-validation';
import { DBConfig } from './database/db-config';

@Module({
    imports: [ConfigModule.forRoot({
        load: [APPConfig],
        validate: validateConfig,
        isGlobal: true,
        ...DBConfig
    })]
})
export class ConfigurationModule { }
