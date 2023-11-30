import { render, fireEvent } from '@testing-library/react';
import Login from '../components/Login/login';

test('renders login form and allows typing into input fields', () => {
  const { getByLabelText, getByRole } = render(<Login />);
  
  const emailInput = getByLabelText(/Email:/i) as HTMLInputElement;
  const passwordInput = getByLabelText(/Password:/i) as HTMLInputElement;
  const loginButton = getByRole('button', { name: /login/i });

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password' } });
  fireEvent.click(loginButton);

  expect(emailInput.value).toBe('test@example.com');
  expect(passwordInput.value).toBe('password');
});