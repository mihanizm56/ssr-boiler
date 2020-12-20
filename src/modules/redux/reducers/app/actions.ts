import { SET_INITIAL_RENDER, ISetInitialRenderAction } from './types';

/**
 * Установить флаг инициирующего рендера
 */
export const setInitialRender = (value: boolean): ISetInitialRenderAction => ({
  type: SET_INITIAL_RENDER,
  payload: value,
});
