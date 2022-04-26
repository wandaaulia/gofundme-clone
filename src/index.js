import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import './App.scss'
import { MenuProvider } from './contextApp';

const travelApp = document.getElementById("app");

    ReactDOM.render(
        <MenuProvider>  
        <App />
        </MenuProvider>, travelApp);

