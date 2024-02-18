import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

// Use createRoot to manage the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);