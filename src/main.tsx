import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ChakraUIProvider } from './components/ui/provider.tsx';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraUIProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraUIProvider>
  </StrictMode>
);
