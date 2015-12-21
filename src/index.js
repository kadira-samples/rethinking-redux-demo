import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Layout from './containers/layout';
import rootReducer from './reducers/root';
import {defineRoute} from './routes';

const store = createStore(rootReducer);
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
