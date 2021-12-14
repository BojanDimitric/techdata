import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import reportWebVitals from './reportWebVitals';

import articleReducers from './Store/Reducers/articleReducers'

import './index.scss';

const rootReducer = combineReducers({
  articleReducers
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();