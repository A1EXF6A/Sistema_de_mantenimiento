import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // Ruta de tu archivo App.tsx

ReactDOM.render(
  <React.StrictMode>
    {/* Envolvemos la app solo una vez en el Router */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
