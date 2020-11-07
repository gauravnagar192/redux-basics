import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore , combineReducers } from 'redux';
import { Provider } from 'react-redux';
import counterReducers from './store/reducers/counter';
import resultReducers from './store/reducers/result';

import App from './App';

const rootReducer = combineReducers({
  ctr : counterReducers ,
  res : resultReducers
});



const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
