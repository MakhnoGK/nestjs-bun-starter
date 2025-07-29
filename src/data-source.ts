import path from 'path';
import { DataSource } from 'typeorm';

const SRC_PATH = path.resolve(process.cwd(), 'src');
const ENTITIES_PATH = path.resolve(SRC_PATH, '**/*.entity.ts');
const MIGRATIONS_PATH = path.resolve(SRC_PATH, 'migrations', '**/*.ts');

export default new DataSource({
    type: 'postgres',
    host: Bun.env.POSTGRES_HOSTNAME,
    port: Number(Bun.env.POSTGRES_PORT),
    username: Bun.env.POSTGRES_USERNAME,
    password: Bun.env.POSTGRES_PASSWORD,
    database: Bun.env.POSTGRES_DATABASE,

    entities: [ENTITIES_PATH],

    migrationsTableName: Bun.env.MIGRATIONS_PATH || '_migrations',
    migrations: [MIGRATIONS_PATH],

    logging: true,
});
