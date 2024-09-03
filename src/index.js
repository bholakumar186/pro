import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  // Your theme settings
});
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
    
    </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
