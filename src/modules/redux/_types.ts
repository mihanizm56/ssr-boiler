import { Store, Reducer, AnyAction } from 'redux';
import { ICookies } from '@/modules/cookies/_types';
import { IApi } from '@/modules/api';
import { IAppStatePart } from './reducers/app/types';

export interface IAsyncReducers {
  [reducerName: string]: Reducer;
}

export interface IStoreHelpers {
  cookies: ICookies;
  api: IApi;
}

export type IGlobalState = IAppStatePart;

export interface IAdvancedStore extends Store<IGlobalState, AnyAction> {
  asyncReducers?: IAsyncReducers;
}
