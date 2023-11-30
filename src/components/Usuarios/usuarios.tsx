
import React from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { obtenerUsuarios, Usuario } from '../../services/api';

const Usuarios: React.FC = () => {
  const { data: usuarios, isLoading, isError }: UseQueryResult<Usuario[]> = useQuery('usuarios', obtenerUsuarios);

  console.log('Usuarios:', usuarios);

  return (
    <div>
      <h1>Usuarios</h1>
      {isLoading && <p>Cargando...</p>}
      {isError && <p>Error al cargar los usuarios.</p>}
      {usuarios && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Correo</th>
              <th>Imagen</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.email}</td>
                <td>
                  <img src={usuario.avatar} alt={usuario.email} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Usuarios;
