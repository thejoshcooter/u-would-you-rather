import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';

import Reset from './styles/Reset'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import reducer from './redux/reducers'

// create store
const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Router>
    <Reset />
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
