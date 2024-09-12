import { DataSource } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const isTestEnv = process.env.NODE_ENV === 'test';
export const initialDatabase = process.env.DATABASE_NAME;

const databaseName = !isTestEnv
  ? initialDatabase
  : process.env.DATABASE_TEST_NAME;

export const dataSourceOptions = {
  type: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: databaseName,
  autoLoadEntities: true,
  synchronize: true,
  createDatabase: true,
} as PostgresConnectionOptions;

export default new DataSource(dataSourceOptions);
