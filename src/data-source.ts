import path from 'path';
import { DataSource } from 'typeorm';

export default new DataSource({
    type: 'postgres',
    host: Bun.env.POSTGRES_HOSTNAME,
    port: Number(Bun.env.POSTGRES_PORT),
    username: Bun.env.POSTGRES_USERNAME,
    password: Bun.env.POSTGRES_PASSWORD,
    database: Bun.env.POSTGRES_DATABASE,

    entities: [path.resolve(process.cwd(), 'src', '**/*.entity.ts')],

    // TODO: Extract to .env
    migrationsTableName: '_migrations',
    migrations: [path.resolve(process.cwd(), 'src', 'migrations', '**/*.ts')],

    logging: true,
});
