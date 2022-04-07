import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import MainReducer from '../src/redux/reducers/MainReducer'

const reduxStore = createStore(MainReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);


