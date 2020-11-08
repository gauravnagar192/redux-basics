import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import counterReducers from './store/reducers/counter';
import resultReducers from './store/reducers/result';
import thunk from 'redux-thunk';

import App from './App';

const rootReducer = combineReducers({
  ctr: counterReducers,
  res: resultReducers,
});

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log('Middleware Dispatching : ', action);
      const result = next(action);
      console.log('Middleware Next State : ', store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
