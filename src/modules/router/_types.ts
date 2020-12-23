import * as React from 'react';
import { Router, Route, State } from 'router5';
import { i18n as i18nInstance } from 'i18next';
import { IAdvancedStore } from '@wildberries/redux-core-modules';
import { ICookies } from '@/modules/cookies/_types';

export interface IAdvancedRoute extends Route {
  action?: IAction;
  loadAction?: (redux: IAdvancedStore) => Promise<{ default: IAction }>;
  chunks?: string[];
  translations?: string[];
  canParallel?: boolean;
  children?: IAdvancedRoute[];
  i18nResources?: Record<string, any>;
  actionResult?: IActionResult;
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
  i18n: {
    locale: string;
    instance: i18nInstance;
  };
  redux: IAdvancedStore;
  cookies: ICookies;
  // Только для сервера
  getChunks?: (name: string) => string[];
  i18nResources?: (name: string) => string[];
  // Только для клиента
}
