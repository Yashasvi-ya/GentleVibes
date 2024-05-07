import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeContext } from './context/ThemeContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <NextUIProvider>
    <App />
    </NextUIProvider>
    </BrowserRouter>,
)