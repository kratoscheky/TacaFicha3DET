import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FichaProvider } from './context/ficha.context';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { SlotsProvider } from './context/slots.context';
import { ColorSchemeProvider } from './context/color-scheme.context';
import { ImgurProvider } from './context/imgur.context';
import { BrowserProvider } from './context/browser.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserProvider>
      <ImgurProvider>
        <FichaProvider>
          <SlotsProvider>
            <ColorSchemeProvider>
              <App />
            </ColorSchemeProvider>
          </SlotsProvider>
        </FichaProvider>
      </ImgurProvider>
    </BrowserProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();

reportWebVitals();
