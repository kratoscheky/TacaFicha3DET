import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FichaProvider } from './context/ficha.context';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FichaProvider>
      <App />
    </FichaProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.unregister();

reportWebVitals();
