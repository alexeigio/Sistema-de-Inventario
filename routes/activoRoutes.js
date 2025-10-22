import express from 'express';
import {
    getAllActivos,
    getActivoById,
    createActivo,
    updateActivo,
    deleteActivo
} from '../controllers/activoController.js';

const router = express.Router();

// Rutas para los activos
router.get('/', getAllActivos); // GET /api/activos -> Obtener todos
router.get('/:id', getActivoById); // GET /api/activos/uuid -> Obtener uno
router.post('/', createActivo); // POST /api/activos -> Crear uno
router.put('/:id', updateActivo); // PUT /api/activos/uuid -> Actualizar uno
router.delete('/:id', deleteActivo); // DELETE /api/activos/uuid -> Eliminar uno

export default router;
