import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />,
    /*<App>
        Este texto se guarda en una propiedad especial llamada children
    </App>*/
);

/*
ReactDOM.render(
    <App message="Learning React" />,
    document.getElementById('root')
)
*/
