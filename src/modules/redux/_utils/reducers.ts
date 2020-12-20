import { Reducer, combineReducers, AnyAction } from 'redux';
import { reducer as appReducer } from '../reducers/app/reducer';
import { IGlobalState, IAsyncReducers, IAdvancedStore } from '../_types';

const combineAsyncReducers = (
  reducers: IAsyncReducers,
  initialState: IGlobalState,
) => {
  const reducerKeys = new Set(Object.keys(reducers));
  Object.keys(initialState)
    .filter((k) => !reducerKeys.has(k))
    .forEach((k) => {
      // eslint-disable-next-line no-param-reassign
      reducers[k] = (state) => (state === undefined ? null : state);
    });

  return combineReducers<IGlobalState, AnyAction>(reducers);
};

export const createReducer = (
  asyncReducers: IAsyncReducers,
  initialState: IGlobalState,
) =>
  combineAsyncReducers(
    {
      app: appReducer,
      ...asyncReducers,
    },
    initialState,
  );

export const injectAsyncReducer = (
  store: IAdvancedStore,
  name: string,
  asyncReducer: Reducer,
) => {
  if (!store.asyncReducers[name]) {
    store.asyncReducers[name] = asyncReducer; // eslint-disable-line no-param-reassign
    store.replaceReducer(createReducer(store.asyncReducers, store.getState()));
  }
};
