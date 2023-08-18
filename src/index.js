import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

const rootRef = document.querySelector('#root');

const root = ReactDOM.createRoot(rootRef);

root.render(<App/>)