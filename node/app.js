import dotenv from 'dotenv';
import express from 'express';
import db from './database/db.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;

try {
    // Intentar autenticar la conexión a la base de datos
    await db.authenticate();
    console.log('Conexión establecida con la base de datos');

    // Iniciar el servidor
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
} catch (error) {
    console.error('Error al conectar con la base de datos:', error);
}
