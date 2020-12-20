import { Store, Reducer, AnyAction } from 'redux';
import { ICookies } from '@/modules/cookies/_types';
import { IAppStatePart } from './reducers/app/types';

export interface IAsyncReducers {
  [reducerName: string]: Reducer;
}

export interface IStoreHelpers {
  cookies: ICookies;
}

export type IGlobalState = IAppStatePart;

export interface IAdvancedStore extends Store<IGlobalState, AnyAction> {
  asyncReducers?: IAsyncReducers;
}
