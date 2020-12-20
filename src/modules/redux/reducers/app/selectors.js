import { createSelector } from 'reselect';
export const getStatePart = (state) => state.app;
export const getIsInitialRender = createSelector([getStatePart], statePart => {
    return statePart.isInitialRender;
});
//# sourceMappingURL=selectors.js.map