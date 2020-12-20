import { SET_INITIAL_RENDER, IAppState, AppActionTypes } from './types';

const initialState: IAppState = {
  isInitialRender: true,
};

export const reducer = (
  state: IAppState = initialState,
  action: AppActionTypes,
): IAppState => {
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
