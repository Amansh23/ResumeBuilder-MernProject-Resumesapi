import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { store } from '../src/store/store'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'remixicon/fonts/remixicon.css'
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
    <Provider store={store}>
     <App />
    <ToastContainer/>
    </Provider>
 </BrowserRouter>
);
