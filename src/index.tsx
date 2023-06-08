import 'reflect-metadata';

import '@fontsource/vollkorn-sc/400.css';
import '@fontsource/vollkorn-sc/600.css';
import '@fontsource/vollkorn-sc/700.css';
import '@fontsource/vollkorn-sc/900.css';
import '@fontsource/vollkorn/400.css';
import '@fontsource/vollkorn/500.css';
import '@fontsource/vollkorn/600.css';
import '@fontsource/vollkorn/700.css';
import '@fontsource/vollkorn/800.css';
import '@fontsource/vollkorn/900.css';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Provider as ContainerProvider } from 'inversify-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import container from './inversify.config';
import reportWebVitals from './reportWebVitals';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ContainerProvider container={container}>
              <App />
            </ContainerProvider>
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
