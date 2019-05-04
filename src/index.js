import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';

import './index.css';
import App from './App';
import rootReducer from './store/rootReducer';
import { watchHero } from './store/rootSaga';

// initialize saga middleware
const sagaMiddleware = createSagaMiddleware();

// initialize redux store with reducers and middleware
const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware))
);

// attatch hero saga to middleware
sagaMiddleware.run(watchHero);

// wrap App component with react-router and redux store
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
