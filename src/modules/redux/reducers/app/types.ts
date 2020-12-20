/**
 * Установить флаг инициирующего рендера
 */

export const SET_INITIAL_RENDER = 'app/SET_INITIAL_RENDER';

export interface ISetInitialRenderAction {
  type: typeof SET_INITIAL_RENDER;
  payload: boolean;
}

/**
 * Состояние
 */

export interface IAppState {
  isInitialRender: boolean;
}

export interface IAppStatePart {
  app?: IAppState;
}

export type AppActionTypes = ISetInitialRenderAction;
