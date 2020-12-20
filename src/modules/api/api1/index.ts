import { AxiosInstance } from 'axios';
import { home, IHomeApi } from './features/home';

export interface IApi1 {
  home: IHomeApi;
}

export const api1 = (serviceUrl: string, axios: AxiosInstance): IApi1 => {
  return {
    /**
     * Фичи апи
     */
    home: home(axios, serviceUrl),
  };
};
