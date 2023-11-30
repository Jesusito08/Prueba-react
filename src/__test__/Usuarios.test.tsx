import { render, waitFor, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import '@testing-library/jest-dom';
import { Usuario } from '../services/api';
import Usuarios from '../components/Usuarios/usuarios';

jest.mock('react-query', () => ({
  ...jest.requireActual('react-query'),
  useQuery: jest.fn().mockReturnValue({
    data: null,
    isLoading: false,
    isError: false,
  }),
}));

jest.mock('../services/api');

describe('Usuarios Component', () => {
  const mockUsuarios: Usuario[] = [
    {
      id: 1,
      email: 'test@example.com',
      avatar: 'avatar.jpg'
    },
    // ... otros usuarios mockeados ...
  ];

  beforeEach(() => {
    jest.resetAllMocks();
  });

  const renderWithQueryClient = (client: QueryClient) => {
    render(
      <QueryClientProvider client={client}>
        <Usuarios />
      </QueryClientProvider>
    );
  };

  test('renders without errors', async () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: mockUsuarios,
      isLoading: false,
      isError: false,
    });

    const queryClient = new QueryClient();
    queryClient.setQueryData('usuarios', mockUsuarios);

    renderWithQueryClient(queryClient);

    await waitFor(() => {
      expect(queryClient.getQueryData('usuarios')).toEqual(mockUsuarios);
    });
  });

  test('renders user data', async () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: mockUsuarios,
      isLoading: false,
      isError: false,
    });

    const queryClient = new QueryClient();
    queryClient.setQueryData('usuarios', mockUsuarios);

    renderWithQueryClient(queryClient);

    await waitFor(() => {
      expect(screen.getByText(mockUsuarios[0].email)).toBeInTheDocument();
    });
  });

  test('handles loading state', async () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      isError: false,
    });

    const queryClient = new QueryClient();

    renderWithQueryClient(queryClient);

    await waitFor(() => {
      expect(screen.getByText('Cargando...')).toBeInTheDocument();
    });
  });

  test('handles error state', async () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      isError: true,
    });

    const queryClient = new QueryClient();
    queryClient.invalidateQueries('usuarios');

    renderWithQueryClient(queryClient);

    await waitFor(() => {
      expect(screen.getByText('Error al cargar los usuarios.')).toBeInTheDocument();
    });
  });
});