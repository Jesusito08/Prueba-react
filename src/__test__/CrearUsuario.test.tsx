import { render, fireEvent, waitFor } from '@testing-library/react';
import CrearUsuario from '../components/Crear/CrearUsuario';
import { crearUsuario } from '../services/api';

jest.mock('../services/api');

describe('CrearUsuario', () => {
  it('crea un usuario correctamente', async () => {
    (crearUsuario as jest.Mock).mockResolvedValueOnce({ id: '1', createdAt: '2022-01-01' });

    const { getByLabelText, getByTestId } = render(<CrearUsuario />);

    fireEvent.change(getByLabelText(/nombre/i), { target: { value: 'John Doe' } });
    fireEvent.change(getByLabelText(/trabajo/i), { target: { value: 'Developer' } });
    fireEvent.click(getByTestId('crear-usuario-boton'));

    await waitFor(() => expect(crearUsuario).toHaveBeenCalledWith({ name: 'John Doe', job: 'Developer' }));

    // Aquí puedes verificar que se muestra el mensaje de éxito
  });

  it('muestra un error si la creación del usuario falla', async () => {
    (crearUsuario as jest.Mock).mockRejectedValueOnce(new Error('Error al crear el usuario'));

    const { getByLabelText, getByTestId } = render(<CrearUsuario />);

    fireEvent.change(getByLabelText(/nombre/i), { target: { value: 'John Doe' } });
    fireEvent.change(getByLabelText(/trabajo/i), { target: { value: 'Developer' } });
    fireEvent.click(getByTestId('crear-usuario-boton'));

    await waitFor(() => expect(crearUsuario).toHaveBeenCalledWith({ name: 'John Doe', job: 'Developer' }));

    // Aquí puedes verificar que se muestra el mensaje de error
  });
});