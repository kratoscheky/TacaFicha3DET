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
import { ShareProvider } from './context/share.context';
import {TacaFicha} from "./components/TacaFicha";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserProvider>
      <ImgurProvider>
        <FichaProvider>
          <SlotsProvider>
            <ShareProvider>
              <ColorSchemeProvider>
                <TacaFicha />
                <App />
              </ColorSchemeProvider>
            </ShareProvider>
          </SlotsProvider>
        </FichaProvider>
      </ImgurProvider>
    </BrowserProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register({
  onUpdate: registration => {
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
    window.location.reload();
  }
});

reportWebVitals();
