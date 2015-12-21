import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Layout from './layout/view';
import rootReducer from './reducer';
import {defineRoute} from './routes';

const store = applyMiddleware(thunk)(createStore)(rootReducer);
defineRoute(store, 'postList', '/');
defineRoute(store, 'singlePost', '/post/:postId');

const render = () => {
  ReactDOM.render((
    <Provider store={store}>
      <Layout />
    </Provider>
  ), document.getElementById('root'));
};

store.subscribe(render);
render();
