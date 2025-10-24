import { type ReactNode } from 'react';
import { Provider as ChakraUIProvider } from '@/components/ui/provider.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { testQueryClient } from '@/tests/config/testQueryClient.ts';
import { MemoryRouter } from 'react-router-dom';

interface CustomRenderProviderProps {
  children: ReactNode;
}

export const CustomRenderProvider = ({ children }: CustomRenderProviderProps) => {
  return (
    <>
      <ChakraUIProvider>
        <QueryClientProvider client={testQueryClient}>
          <MemoryRouter>{children}</MemoryRouter>
        </QueryClientProvider>
      </ChakraUIProvider>
    </>
  );
};
