import React, { useState } from 'react';
import { CrearUsuarioRequest, CrearUsuarioResponse, crearUsuario } from '../../services/api';
import { StyledCrearUsuario, Formulario, Error } from './StyledCrear';

const CrearUsuario: React.FC = () => {
  const [nombre, setNombre] = useState<string>('');
  const [trabajo, setTrabajo] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleCrearUsuario = async (event: React.FormEvent) => {event.preventDefault();
    try {
      const usuario: CrearUsuarioRequest = {
        name: nombre,
        job: trabajo,
      };

      const data: CrearUsuarioResponse = await crearUsuario(usuario);

      console.log('Usuario creado:', data);
    } catch (error) {
  if ((error as Error).message) {
    setError((error as Error).message);
  } else {
    setError('Error al crear el usuario');
  }
}


  };

  return (
    <StyledCrearUsuario>
      <Formulario onSubmit={handleCrearUsuario}>
        <h1>CREAR USUARIO</h1>
        {error && <Error>{error}</Error>}
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
        <button type="submit" data-testid="crear-usuario-boton">
          Crear Usuario
        </button>
      </Formulario>
    </StyledCrearUsuario>
  );
};

export default CrearUsuario;