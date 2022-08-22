import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Compare from './Compare';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    
    <Compare />
  </React.StrictMode>
);

