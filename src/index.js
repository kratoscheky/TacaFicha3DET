import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FichaProvider } from './context/ficha.context';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { SlotsProvider } from './context/slots.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FichaProvider>
      <SlotsProvider>
        <App />
      </SlotsProvider>
    </FichaProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.unregister();

reportWebVitals();
