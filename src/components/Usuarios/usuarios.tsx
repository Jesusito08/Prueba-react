import React from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { obtenerUsuarios, Usuario } from '../../services/api';
import { UsuariosContainer, Table } from './StyledUsuarios';

const Usuarios: React.FC = () => {
  const { data: usuarios, isLoading, isError }: UseQueryResult<Usuario[]> = useQuery('usuarios', obtenerUsuarios);

  console.log('Usuarios:', usuarios);

  return (
    <UsuariosContainer>
      <h1>USUARIOS</h1>
      {isLoading && <p>Cargando...</p>}
      {isError && <p>Error al cargar los usuarios.</p>}
      {usuarios && (
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Correo</th>
              <th>Avatar</th>
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
        </Table>
      )}
    </UsuariosContainer>
  );
};

export default Usuarios;