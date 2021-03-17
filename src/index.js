import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from 'styled-components'
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import App from './Components/App'
import GlobalStyles from './GlobalStyles/globalStyles'
import Theme from './GlobalStyles/theme';
import rootReducer from './Reducers'

const store = createStore(rootReducer)



ReactDOM.render(
  <Router>
    <ThemeProvider theme={Theme}>
      <GlobalStyles/>
      <Provider store={store}>
        <App/>
      </Provider>
    </ThemeProvider>
  </Router>
  ,document.getElementById('root'))
