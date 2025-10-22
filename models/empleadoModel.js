import { supabase } from '../config/supabaseClient.js';

// Modelo para obtener todos los empleados
export const getAll = async () => {
    const { data, error } = await supabase
        .from('empleados')
        .select('*');
    if (error) throw new Error(error.message);
    return data;
};

// Modelo para obtener un empleado por su ID
export const getById = async (id) => {
    const { data, error } = await supabase
        .from('empleados')
        .select('*')
        .eq('id', id)
        .single();
    if (error) throw new Error(error.message);
    return data;
};

// Modelo para crear un nuevo empleado
export const create = async (empleadoData) => {
    const { data, error } = await supabase
        .from('empleados')
        .insert([empleadoData])
        .select()
        .single();
    if (error) throw new Error(error.message);
    return data;
};

// Modelo para actualizar un empleado
export const update = async (id, empleadoData) => {
    const { data, error } = await supabase
        .from('empleados')
        .update(empleadoData)
        .eq('id', id)
        .select()
        .single();
    if (error) throw new Error(error.message);
    return data;
};

// Modelo para eliminar un empleado
export const remove = async (id) => {
    const { data, error } = await supabase
        .from('empleados')
        .delete()
        .eq('id', id);
    if (error) throw new Error(error.message);
    return data;
};