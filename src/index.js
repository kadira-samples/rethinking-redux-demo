import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createHistory } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'

import rootReducer from './reducer';
import { createRoutes } from './routes';

// Apply middlewares and add support for dev tools
const finalCreateStore = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

// create the store
const store = finalCreateStore(rootReducer);
const history = createHistory();
const Routes = createRoutes(history);

syncReduxAndRouter(history, store);

// Render the the layout
const render = () => {
  ReactDOM.render((
    <Provider store={store}>
      <Routes />
    </Provider>
  ), document.getElementById('root'));
};

store.subscribe(render);
render();
