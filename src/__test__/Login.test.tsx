import '@testing-library/jest-dom';
import { render, fireEvent, act } from '@testing-library/react';
import axios from 'axios';
import Login from '../components/Login/login';

jest.mock('axios');

test('renders login form and shows error message when login fails', async () => {
  const { getByLabelText, getByRole, findByText } = render(<Login />);
  
  const emailInput = getByLabelText(/Correo Electronico:/i) as HTMLInputElement;
  const passwordInput = getByLabelText(/Contraseña:/i) as HTMLInputElement;
  const loginButton = getByRole('button', { name: /INICIAR SESION/i });

  // SIMULACION DE LOGUEO
  (axios.post as jest.Mock).mockResolvedValueOnce({
    data: { token: 'QpwL5tke4Pnpja7X4' },
  });

  await act(async () => {
    fireEvent.change(emailInput, { target: { value: 'eve.holt@reqres.in' } });
    fireEvent.change(passwordInput, { target: { value: 'cityslicka' } });
    fireEvent.click(loginButton);
  });

  expect(emailInput.value).toBe('eve.holt@reqres.in');
  expect(passwordInput.value).toBe('cityslicka');
  expect(axios.post).toHaveBeenCalledWith('https://reqres.in/api/login', { email: 'eve.holt@reqres.in', password: 'cityslicka' });

  // SIMULACION DE LOGEO FALLIDO
  (axios.post as jest.Mock).mockRejectedValueOnce({
    isAxiosError: true,
    response: {
      status: 400,
      data: { error: 'Missing password' },
    },
  });

  await act(async () => {
    fireEvent.change(emailInput, { target: { value: 'peter@klaven' } });
    fireEvent.change(passwordInput, { target: { value: '' } });
    fireEvent.click(loginButton);
  });

  expect(emailInput.value).toBe('peter@klaven');
  expect(passwordInput.value).toBe('');
  expect(axios.post).toHaveBeenCalledWith('https://reqres.in/api/login', { email: 'peter@klaven', password: '' });

  
  const errorMessage = await findByText(/Missing password/i);
  expect(errorMessage).toBeInTheDocument();
});