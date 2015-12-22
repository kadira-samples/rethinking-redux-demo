import { defineRoute } from './lib/router';

export const configureRoutes = (store) => {
  defineRoute(store, 'postList', '/');
  defineRoute(store, 'singlePost', '/post/:postId');
};
