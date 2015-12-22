import pathToRegexp from 'path-to-regexp';

const routes = [];

// define a new route
export const defineRoute = (store, name, pathDef) => {
  const keys = [];
  const regexp = pathToRegexp(pathDef, keys);
  routes.push({store, name, regexp, keys, pathDef});
};

// return a thunk to go()
// pretty much useful to when working with React's event handlers
export const register = (path) => {
  return () => go(path);
}

// simply fire an route
export const go = (path) => {
  for(const route of routes) {
    const matched = route.regexp.exec(path);
    if(matched) {
      const params = {};
      route.keys.forEach(({name}, index) => {
        params[name] = matched[index + 1];
      });

      const action = {
        type: 'ROUTE_CHANGE',
        name: route.name,
        path: path,
        params: params,
        pathDef: route.pathDef
      };

      history.pushState(action, window.title, path);
      route.store.dispatch(action);
    }
  }
};


// Following code is picked from https://github.com/visionmedia/page.js

var clickEvent = ('undefined' !== typeof document) && document.ontouchstart ? 'touchstart' : 'click';
document.addEventListener(clickEvent, onclick, false);

function onclick(e) {
  if (1 !== which(e)) return;

  if (e.metaKey || e.ctrlKey || e.shiftKey) return;
  if (e.defaultPrevented) return;

  // ensure link
  var el = e.target;
  while (el && 'A' !== el.nodeName) el = el.parentNode;
  if (!el || 'A' !== el.nodeName) return;

  // Ignore if tag has
  // 1. "download" attribute
  // 2. rel="external" attribute
  if (el.hasAttribute('download') || el.getAttribute('rel') === 'external') return;

  // ensure non-hash for the same path
  var link = el.getAttribute('href');
  if (el.pathname === location.pathname && (el.hash || '#' === link)) return;

  // Check for mailto: in the href
  if (link && link.indexOf('mailto:') > -1) return;

  // check target
  if (el.target) return;

  // rebuild path
  var path = el.pathname + el.search + (el.hash || '');

  // strip leading "/[drive letter]:" on NW.js on Windows
  if (typeof process !== 'undefined' && path.match(/^\/[a-zA-Z]:\//)) {
    path = path.replace(/^\/[a-zA-Z]:\//, '/');
  }

  e.preventDefault();
  go(path);
}

function which(e) {
  e = e || window.event;
  return null === e.which ? e.button : e.which;
}
