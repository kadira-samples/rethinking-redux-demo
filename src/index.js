import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { Router, Route, IndexRoute } from 'react-router'
import { createHistory } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'

import rootReducer from './reducer';
// This is the Layout of our app, which render it based
// on the route actions
import Layout from './modules/layout/view';
import PostList from './modules/post_list/view';
import SinglePost from './modules/single_post/view';

// Apply middlewares and add support for dev tools
const finalCreateStore = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

// create the store
const store = finalCreateStore(rootReducer);
const history = createHistory();

syncReduxAndRouter(history, store);

// Render the the layout
const render = () => {
  ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <Route component={Layout} path="/">
          <IndexRoute component={PostList} />
          <Router path="post/:postId" component={SinglePost} />
        </Route>
      </Router>
    </Provider>
  ), document.getElementById('root'));
};

store.subscribe(render);
render();
