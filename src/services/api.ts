export interface Usuario {
  id: number;
  email: string;
  first_name?: string;
  last_name?: string;
  avatar: string;
}

export const obtenerUsuarios = async (): Promise<Usuario[]> => {
  try {
    const response = await fetch('https://reqres.in/api/users?page=2');

    if (!response.ok) {
      throw new Error('Error al cargar los usuarios');
    }

    const data = await response.json();

    return data.data as Usuario[];
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Error en la solicitud de usuarios');
  }
};

export interface CrearUsuarioRequest {
  name: string;
  job: string;
}

export interface CrearUsuarioResponse {
  name: string;
  job: string;
  id: string;
  createdAt: string;
}

export const crearUsuario = async (usuario: CrearUsuarioRequest): Promise<CrearUsuarioResponse> => {
  try {
    const response = await fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al crear el usuario');
    }

    const data: CrearUsuarioResponse = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('Error al crear el usuario');
    }
  }
};
