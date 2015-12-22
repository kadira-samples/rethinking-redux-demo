import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { configureRoutes } from './routes';
import rootReducer from './reducer';
// This is the Layout of our app, which render it based
// on the route actions
import Layout from './modules/layout/view';

// Apply middlewares and add support for dev tools
const finalCreateStore = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

// create the store
const store = finalCreateStore(rootReducer);

// configure routes
configureRoutes(store);

// Render the the layout
const render = () => {
  ReactDOM.render((
    <Provider store={store}>
      <Layout />
    </Provider>
  ), document.getElementById('root'));
};

store.subscribe(render);
render();
