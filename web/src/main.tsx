import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import { VisibilityProvider } from './providers/VisibilityProvider';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';
import { isEnvBrowser } from './utils/misc';

if (isEnvBrowser()) {
  const root = document.getElementById('root');

  // https://i.imgur.com/iPTAdYV.png - Night time img
  root!.style.backgroundImage = 'url("https://i.imgur.com/3pzRj9n.png")';
  root!.style.backgroundSize = 'cover';
  root!.style.backgroundRepeat = 'no-repeat';
  root!.style.backgroundPosition = 'center';
}

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
