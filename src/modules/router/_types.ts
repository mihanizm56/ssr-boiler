import React from 'react';
import { Router, Route, State } from 'router5';
import {
  IAdvancedStore,
  StoreInjectConfig,
} from '@wildberries/redux-core-modules';
import { ICookies } from '@/_utils/cookies/_types';

type i18nConfigType = {
  namespaces: Array<string>;
};

export interface IAdvancedRoute extends Route {
  action?: IAction;
  loadAction?: (redux: IAdvancedStore) => Promise<{ default: IAction }>;
  chunks?: string[];
  canParallel?: boolean;
  children?: IAdvancedRoute[];
  actionResult?: IActionResult;
  i18n?: i18nConfigType;
}

type RouterDependeciesOptionalType = Partial<IRouterDependecies>;

export interface IActionParams extends RouterDependeciesOptionalType {
  router: Router;
  toState: State;
  fromState: State;
}

export interface IAction {
  (params: IActionParams): Promise<IActionResult>;
}

export interface IActionResult {
  title?: string;
  content?: React.ReactNode;
  useCache?: boolean;
  status?: number;
  storeInjectConfig?: StoreInjectConfig;
  redirect?: {
    url?: string;
    route?: {
      name: string;
      params?: Record<string, any>;
    };
  };
  error?: {
    title: string;
    status: number;
    content: React.ReactNode;
  };
  description?: string;
  keywords?: string;
  canonical?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
}

export interface IRouterDependecies {
  // Для сервера и клиента
  routerId: number;
  routes: IAdvancedRoute[];
  getSegmentActionResult?: (name: string) => IActionResult;
  getRouteActionResult?: (name: string) => IActionResult;
  getHideLayoutFooter?: (name: string) => IActionResult;
  getHideLayoutMenu?: (name: string) => IActionResult;
  getShowLayoutScrollTop?: (name: string) => IActionResult;
  toState: State;
  fromState: State;
  store: IAdvancedStore;
  cookies: ICookies;
  // Только для сервера
  getChunks?: (name: string) => string[];
  // Только для клиента
}
