import React from 'react';
import Routes from './routes';
import { QueryClient, QueryClientProvider } from 'react-query';

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
      <Routes />

      </QueryClientProvider>
      {}
    </div>
  );
};

export default App;
//OJO