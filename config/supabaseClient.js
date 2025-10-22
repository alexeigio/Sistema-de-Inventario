import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

// Crear y exportar el cliente de Supabase
// Este cliente será un 'singleton', es decir, una única instancia compartida en toda la app.
export const supabase = createClient(supabaseUrl, supabaseKey);
