import { createStore, applyMiddleware, StoreEnhancer } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createReducer } from './_utils/reducers';
import { IGlobalState, IStoreHelpers, IAdvancedStore } from './_types';

export const configureRedux = (
  initialState: IGlobalState,
  helpers: IStoreHelpers,
) => {
  const middleware = [thunk.withExtraArgument(helpers)];

  let enhancer: StoreEnhancer;

  if (__DEV__ && __CLIENT__) {
    const composeEnhancers = composeWithDevTools({
      name: 'wildberries-frontend-ssr',
    });

    enhancer = composeEnhancers(applyMiddleware(...middleware));
  } else {
    enhancer = applyMiddleware(...middleware);
  }

  const store: IAdvancedStore = createStore(
    createReducer({}, initialState),
    initialState,
    enhancer,
  );

  store.asyncReducers = {};

  return store;
};
