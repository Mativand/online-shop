import React from 'react';
import "./index.scss";
import ReactDOM from 'react-dom/client';
import {Routing} from "@/pages";



const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <Routing/>
    </React.StrictMode>
);