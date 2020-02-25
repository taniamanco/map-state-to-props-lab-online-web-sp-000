import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import manageUsers from './reducers/manageUsers';
import ReactDOM from 'react-dom';
import App from './App'

let store = createStore(manageUsers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// add imports and code


ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
  // add imports and code
  ,
  document.getElementById('root')
);
