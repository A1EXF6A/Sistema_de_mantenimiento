import { Dialect } from 'sequelize';

process.loadEnvFile();

interface Config {
    dialect: Dialect,
    port: number;
    database: {
        host: string;
        port: number;
        user: string;
        password: string;
        name: string;
    }
}

export const env: Config = {
    dialect: process.env.DB_DIALECT as Dialect || 'postgres',
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    database: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'postgres',
        name: process.env.DB_NAME || 'postgres',
    }
}