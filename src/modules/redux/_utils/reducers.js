import { combineReducers } from 'redux';
import { reducer as appReducer } from '../reducers/app/reducer';
const combineAsyncReducers = (reducers, initialState) => {
    const reducerKeys = new Set(Object.keys(reducers));
    Object.keys(initialState)
        .filter(k => !reducerKeys.has(k))
        .forEach(k => {
        // eslint-disable-next-line no-param-reassign
        reducers[k] = state => (state === undefined ? null : state);
    });
    return combineReducers(reducers);
};
export const createReducer = (asyncReducers, initialState) => combineAsyncReducers({
    app: appReducer,
    ...asyncReducers,
}, initialState);
export const injectAsyncReducer = (store, name, asyncReducer) => {
    if (!store.asyncReducers[name]) {
        store.asyncReducers[name] = asyncReducer; // eslint-disable-line no-param-reassign
        store.replaceReducer(createReducer(store.asyncReducers, store.getState()));
    }
};
//# sourceMappingURL=reducers.js.map