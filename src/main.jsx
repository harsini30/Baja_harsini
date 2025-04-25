// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap your whole app in a Router so hooks like useSearchParams work */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
