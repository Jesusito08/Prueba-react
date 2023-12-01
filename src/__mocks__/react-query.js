import { render} from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const customRender = (ui, options) =>
  render(<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>, options);

export { customRender, queryClient, QueryClientProvider };
