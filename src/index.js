import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Layout from './modules/layout/view';
import rootReducer from './reducer';
import { configureRoutes } from './routes';

const store = applyMiddleware(thunk)(createStore)(rootReducer);
configureRoutes(store);

const render = () => {
  ReactDOM.render((
    <Provider store={store}>
      <Layout />
    </Provider>
  ), document.getElementById('root'));
};

store.subscribe(render);
render();
