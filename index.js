// Importar módulos
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Importar rutas
import activoRoutes from './routes/activoRoutes.js';
import empleadoRoutes from './routes/empleadoRoutes.js';

// Cargar variables de entorno
dotenv.config();

// Inicializar la app de Express
const app = express();

// Configurar middlewares
app.use(cors()); // Permite peticiones de otros dominios
app.use(express.json()); // Permite a Express entender JSON en el body de las peticiones

// Rutas de la API
// Cuando alguien vaya a /api/activos, será manejado por activoRoutes
app.use('/api/activos', activoRoutes);
// Cuando alguien vaya a /api/empleados, será manejado por empleadoRoutes
app.use('/api/empleados', empleadoRoutes);


// Definir el puerto
const PORT = process.env.PORT || 4000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
