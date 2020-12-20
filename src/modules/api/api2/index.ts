import { AxiosInstance } from 'axios';
import { home, IHomeApi } from './features/home';

export interface IApi2 {
  home: IHomeApi;
}

export const api2 = (serviceUrl: string, axios: AxiosInstance): IApi2 => {
  return {
    /**
     * Фичи апи
     */
    home: home(axios, serviceUrl),
  };
};
