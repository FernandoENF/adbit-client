import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline>
      <Routes />
    </CssBaseline>
  </React.StrictMode>,
  document.getElementById('root')
);
