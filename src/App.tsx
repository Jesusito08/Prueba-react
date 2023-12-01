import React from 'react';
import Routes from './routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyles } from './GlobalStyles';

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <div>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </div>
  );
};

export default App;