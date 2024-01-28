// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { BrowserRouter } from 'react-router-dom';
import Routing from './components/Routing';

// Wrap your App component with createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </React.StrictMode>,
);

