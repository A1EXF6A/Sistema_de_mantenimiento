import { Sequelize } from "sequelize";

const db = new Sequelize('gestionactivos', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3308, // Puerto de MySQL en XAMPP
});

export default db;
