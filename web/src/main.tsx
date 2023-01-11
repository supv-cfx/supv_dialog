import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import { VisibilityProvider } from './providers/VisibilityProvider';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <VisibilityProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </VisibilityProvider>
  </React.StrictMode>,
);
