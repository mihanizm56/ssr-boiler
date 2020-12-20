import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { request as requestMiddleware } from './middlewares/request';
import { createLogger as createClientLogger } from './logger/logger.client';
import { createReducer } from './_utils/reducers';
export const configureRedux = (initialState, helpers) => {
    const middleware = [thunk.withExtraArgument(helpers), requestMiddleware];
    let enhancer;
    if (__DEV__ && __CLIENT__) {
        middleware.push(createClientLogger());
        const composeEnhancers = composeWithDevTools({
            name: 'wildberries-frontend-ssr',
        });
        enhancer = composeEnhancers(applyMiddleware(...middleware));
    }
    else {
        enhancer = applyMiddleware(...middleware);
    }
    const store = createStore(createReducer({}, initialState), initialState, enhancer);
    store.asyncReducers = {};
    return store;
};
//# sourceMappingURL=index.js.map