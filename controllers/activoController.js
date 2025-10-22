import * as ActivoModel from '../models/activoModel.js';

// Controlador para obtener todos los activos
export const getAllActivos = async (req, res) => {
    try {
        const activos = await ActivoModel.getAll();
        res.status(200).json(activos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controlador para obtener un activo por ID
export const getActivoById = async (req, res) => {
    try {
        const { id } = req.params;
        const activo = await ActivoModel.getById(id);
        if (!activo) {
            return res.status(404).json({ message: 'Activo no encontrado' });
        }
        res.status(200).json(activo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controlador para crear un nuevo activo
export const createActivo = async (req, res) => {
    try {
        // req.body contiene la información del nuevo activo a crear
        const nuevoActivo = await ActivoModel.create(req.body);
        res.status(201).json(nuevoActivo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controlador para actualizar un activo
export const updateActivo = async (req, res) => {
    try {
        const { id } = req.params;
        const activoActualizado = await ActivoModel.update(id, req.body);
        if (!activoActualizado) {
             return res.status(404).json({ message: 'Activo no encontrado para actualizar' });
        }
        res.status(200).json(activoActualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controlador para eliminar un activo
export const deleteActivo = async (req, res) => {
    try {
        const { id } = req.params;
        await ActivoModel.remove(id);
        res.status(204).send(); // 204 No Content, significa que se eliminó correctamente
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};