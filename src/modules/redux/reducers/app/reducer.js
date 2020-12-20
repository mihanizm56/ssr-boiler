import { SET_INITIAL_RENDER } from './types';
const initialState = {
    isInitialRender: true,
};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIAL_RENDER:
            return {
                ...state,
                isInitialRender: action.payload,
            };
        default:
            return state;
    }
};
//# sourceMappingURL=reducer.js.map