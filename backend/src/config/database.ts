import 'dotenv/config';
import { DataSource } from 'typeorm';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

const database: SqliteConnectionOptions = {
    type: 'sqlite',
    database: process.env.DATABASE_PATH || './src/shared/database/db.sqlite',
    entities: [
        "./src/modules/**/infra/typeorm/entities/*.ts",
        "./src/modules/shared/**/infra/typeorm/entities/*.ts"
    ],
    migrations: [
        "./src/shared/database/typeorm/migrations/*.ts"
    ],
    synchronize: true,
    logging: process.env.DATABASE_LOGGING === 'true'
};

export const AppDataSource = new DataSource(database);
