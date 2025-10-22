import * as EmpleadoModel from '../models/empleadoModel.js';

export const getAllEmpleados = async (req, res) => {
    try {
        const empleados = await EmpleadoModel.getAll();
        res.status(200).json(empleados);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getEmpleadoById = async (req, res) => {
    try {
        const { id } = req.params;
        const empleado = await EmpleadoModel.getById(id);
        if (!empleado) {
            return res.status(404).json({ message: 'Empleado no encontrado' });
        }
        res.status(200).json(empleado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createEmpleado = async (req, res) => {
    try {
        const nuevoEmpleado = await EmpleadoModel.create(req.body);
        res.status(201).json(nuevoEmpleado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateEmpleado = async (req, res) => {
    try {
        const { id } = req.params;
        const empleadoActualizado = await EmpleadoModel.update(id, req.body);
         if (!empleadoActualizado) {
             return res.status(404).json({ message: 'Empleado no encontrado para actualizar' });
        }
        res.status(200).json(empleadoActualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteEmpleado = async (req, res) => {
    try {
        const { id } = req.params;
        await EmpleadoModel.remove(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
