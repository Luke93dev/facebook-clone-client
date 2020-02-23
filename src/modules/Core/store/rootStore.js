import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from './rootReducer';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(applyMiddleware(routerMiddleware(history), thunk)),
  );

  //   // Hot reloading
  //   if (module.hot) {
  //     // Enable Webpack hot module replacement for reducers
  //     module.hot.accept('./reducers', () => {
  //       store.replaceReducer(createRootReducer(history));
  //     });
  //   }

  return store;
}
