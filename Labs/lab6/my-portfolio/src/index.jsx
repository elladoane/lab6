import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import your main app component
import './style.css'; // Your global styles

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
