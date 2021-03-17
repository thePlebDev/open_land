import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from 'styled-components'

import App from './Components/App'
import GlobalStyles from './GlobalStyles/globalStyles'
import Theme from './GlobalStyles/theme';



ReactDOM.render(
  <Router>
    <ThemeProvider theme={Theme}>
      <GlobalStyles/>
      <App/>
    </ThemeProvider>
  </Router>
  ,document.getElementById('root'))
