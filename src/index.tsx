import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Medición del rendimiento de la aplicación.
// Puedes registrar los resultados en la consola o enviarlos a un servicio de analítica.
reportWebVitals();
