import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {FichaProvider} from './context/ficha.context';
import {SlotsProvider} from './context/slots.context';
import {ColorSchemeProvider} from './context/color-scheme.context';
import {ImgurProvider} from './context/imgur.context';
import {BrowserProvider} from './context/browser.context';
import {ShareProvider} from './context/share.context';
import { registerSW } from "virtual:pwa-register";
import {FichaAlphaProvider} from "./context/fichaAlpha.context.jsx";

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New content available. Reload?")) {
      updateSW(true);
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserProvider>
      <ImgurProvider>
        <FichaProvider>
          <FichaAlphaProvider>
          <SlotsProvider>
            <ShareProvider>
              <ColorSchemeProvider>
                <App/>
              </ColorSchemeProvider>
            </ShareProvider>
          </SlotsProvider>
          </FichaAlphaProvider>
        </FichaProvider>
      </ImgurProvider>
    </BrowserProvider>
  </React.StrictMode>
);