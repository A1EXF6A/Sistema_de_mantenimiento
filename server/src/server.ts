import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import db from './config/database';
import { env } from './config/env';

// Importación de los routers
import ProveedoresRouter from './routes/ProveedoresRouter';
import UbicacionesRouter from './routes/UbicacionesRouter';
import ResponsablesRouter from './routes/ResponsablesRouter';
//import ActivosRouter from './routes/ActivosRouter';
import RegistroActivosRouter from './routes/RegistroActivosRouter';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Registro de las rutas
app.use('/api/proveedores', ProveedoresRouter);
app.use('/api/ubicaciones', UbicacionesRouter);
app.use('/api/responsables', ResponsablesRouter);
//app.use('/api/activos', ActivosRouter);
app.use('/api/registro-activos', RegistroActivosRouter);

db.authenticate()
    .then(() => {
        console.log('Conexión establecida con la base de datos');
        const PORT = process.env.PORT || 8000;
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error en la conexión a la base de datos:', error);
    });
