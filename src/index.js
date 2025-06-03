import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Adjust path if App.js is in a different location
import './index.css'; // Import global styles (e.g., Tailwind CSS)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);