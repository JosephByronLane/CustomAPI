import bcrypt from 'bcrypt';
import { Usuario } from './models/Usuario';

export const createAdminUser = async () => {    
  const usuario = new Usuario();
  usuario.nombre = 'admin'
  usuario.contrasenia =  await bcrypt.hash('admin', 10); 

  const adminExists = await Usuario.findOneBy({ nombre: usuario.nombre });
  if (!adminExists) {
    await usuario.save();
    console.log('Admin user seeded');
  }
};