import { supabase } from '../config/supabaseClient.js';

// Modelo para obtener todos los activos
export const getAll = async () => {
    const { data, error } = await supabase
        .from('activos')
        .select('*');
    if (error) throw new Error(error.message);
    return data;
};

// Modelo para obtener un activo por su ID
export const getById = async (id) => {
    const { data, error } = await supabase
        .from('activos')
        .select('*')
        .eq('id', id)
        .single(); // .single() asegura que obtendremos un solo objeto en lugar de un array
    if (error) throw new Error(error.message);
    return data;
};

// Modelo para crear un nuevo activo
export const create = async (activoData) => {
    const { data, error } = await supabase
        .from('activos')
        .insert([activoData])
        .select()
        .single();
    if (error) throw new Error(error.message);
    return data;
};

// Modelo para actualizar un activo
export const update = async (id, activoData) => {
    const { data, error } = await supabase
        .from('activos')
        .update(activoData)
        .eq('id', id)
        .select()
        .single();
    if (error) throw new Error(error.message);
    return data;
};

// Modelo para eliminar un activo
export const remove = async (id) => {
    const { data, error } = await supabase
        .from('activos')
        .delete()
        .eq('id', id);
    if (error) throw new Error(error.message);
    return data;
};