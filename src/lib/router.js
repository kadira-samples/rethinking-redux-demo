import pathToRegexp from 'path-to-regexp';

const routes = [];
export const defineRoute = (store, name, pathDef) => {
  const keys = [];
  const regexp = pathToRegexp(pathDef, keys);
  routes.push({store, name, regexp, keys, pathDef});
};

export const register = (path) => {
  return () => go(path);
}

export const go = (path) => {
  for(const route of routes) {
    const matched = route.regexp.exec(path);
    if(matched) {
      const params = {};
      route.keys.forEach(({name}, index) => {
        params[name] = matched[index + 1];
      });

      route.store.dispatch({
        type: 'ROUTE_CHANGE',
        name: route.name,
        path: path,
        params: params,
        pathDef: route.pathDef
      });
    }
  }
};
