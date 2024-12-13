import { Sequelize } from 'sequelize';
import { env } from './env';

const db = new Sequelize(
    env.database.name || 'gestionactivos',
    env.database.user || 'root',
    env.database.password || '',
    {
        host: env.database.host || 'localhost',
        dialect: env.dialect || 'mysql',
        port: env.database.port || 3308, // Puerto de MySQL en XAMPP
    }
);

export default db;
