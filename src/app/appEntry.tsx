import React from 'react';
import "./index.scss";
import {Routing} from "../pages/test";
import ReactDOM from 'react-dom/client';


const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <Routing/>
    </React.StrictMode>
);