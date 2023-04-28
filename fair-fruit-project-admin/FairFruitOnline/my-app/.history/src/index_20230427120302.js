import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './router';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';


const theme = createTheme({
  palette: {
    primary: {
      main: '#2A9F85'
    },
    secondary: {
      main: '#FF7070'
    },
  }
})


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </StylesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
