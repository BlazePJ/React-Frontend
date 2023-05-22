import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material';
import App from './App';
import store from './redux/store';
import { themeSettings } from './theme';
import TopBar from './scenes/global/TopBar';
import './index.css';
const mode = 'light'; // Set the initial theme mode here

const theme = createTheme(themeSettings(mode));

// Wrap the rendering with createRoot instead of ReactDOM.render
const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
   
    <BrowserRouter>

      <Provider store={store}>
      
          <App />
       
      </Provider>
    </BrowserRouter>
   
  </React.StrictMode>
);
