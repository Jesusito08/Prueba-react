import React, { useState } from 'react';
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
      console.log('Error caught:', error);
      if (axios.isAxiosError(error)) {
        const errorData: ErrorResponse = error.response?.data || { error: 'Missing password' };
        setError(errorData.error);
      } else {
        setError('Missing password');
      }
      console.log('Error caught:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form>
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
