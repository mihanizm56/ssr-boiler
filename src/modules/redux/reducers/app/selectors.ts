import { createSelector } from 'reselect';
import { IAppStatePart } from './types';

export const getStatePart = (state: IAppStatePart) => state.app;

export const getIsInitialRender = createSelector(
  [getStatePart],
  (statePart) => {
    return statePart.isInitialRender;
  },
);
