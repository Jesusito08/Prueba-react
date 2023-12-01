import React, { useState } from 'react';
import { Container, StyledLogin } from './StyledLogin';
import axios from 'axios';
interface LoginResponse {
  token: string;
}

interface ErrorResponse {
  error: string;
}
const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const response = await axios.post<LoginResponse>('https://reqres.in/api/login', {
        email,
        password,
      });

      console.log('Token:', response.data.token);

      // Almacenar el token en localStorage
      localStorage.setItem('token', response.data.token);

    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorData: ErrorResponse = error.response?.data || { error: 'Missing password' };
        setError(errorData.error);
      } else {
        setError('Missing password');
      }
    }
  };


  return (
    <Container>
      <StyledLogin>
        <h1>INICIO DE SESION</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form>
          <label>
            Correo Electronico:
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Contraseña:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="button" onClick={handleLogin}>
            INICIAR SESION
          </button>
        </form>
      </StyledLogin>
    </Container>
  );
};

export default Login;