// CrearUsuario.tsx
import React, { useState } from 'react';
import { CrearUsuarioRequest, CrearUsuarioResponse, crearUsuario } from '../../services/api';

const CrearUsuario: React.FC = () => {
  const [nombre, setNombre] = useState<string>('');
  const [trabajo, setTrabajo] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleCrearUsuario = async () => {
    try {
      const usuario: CrearUsuarioRequest = {
        name: nombre,
        job: trabajo,
      };

      
      const data: CrearUsuarioResponse = await crearUsuario(usuario);

      console.log('Usuario creado:', data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Error al crear el usuario');
      }
    }
  };

  return (
    <div>
      <h1>Crear Usuario</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <br />
        <label>
          Trabajo:
          <input type="text" value={trabajo} onChange={(e) => setTrabajo(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleCrearUsuario}>
          Crear Usuario
        </button>
      </form>
    </div>
  );
};

export default CrearUsuario;
