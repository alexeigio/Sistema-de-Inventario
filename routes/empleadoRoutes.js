import express from 'express';
import {
    getAllEmpleados,
    getEmpleadoById,
    createEmpleado,
    updateEmpleado,
    deleteEmpleado
} from '../controllers/empleadoController.js';

const router = express.Router();

// Rutas para los empleados
router.get('/', getAllEmpleados);
router.get('/:id', getEmpleadoById);
router.post('/', createEmpleado);
router.put('/:id', updateEmpleado);
router.delete('/:id', deleteEmpleado);

export default router;


SUPABASE_URL="URL_DE_TU_PROYECTO_SUPABASE"
SUPABASE_ANON_KEY="TU_SUPABASE_ANON_KEY"