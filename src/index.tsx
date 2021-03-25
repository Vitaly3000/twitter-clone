import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme';
import { BrowserRouter as Router } from 'react-router-dom';

import { StylesProvider } from '@material-ui/core/styles';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        {/* Нужен чтобы мои стили перекрывали стили Material UI*/}
        <StylesProvider injectFirst>
          <App />
        </StylesProvider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
