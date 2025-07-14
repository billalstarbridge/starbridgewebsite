import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the global stylesheet converted from the original site
import '/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 