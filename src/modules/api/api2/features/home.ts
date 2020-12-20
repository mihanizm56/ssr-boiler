import { AxiosInstance } from 'axios';

export interface IFetchHomeResponse {
  state: number;
  data: {
    hardUpdate: boolean;
    isAuthenticated: boolean;
    userName: string;
    needShippingSurvey: boolean;
    someId: string;
    eventsCount: number;
  };
}

export interface IHomeApi {
  fetchHome: () => Promise<IFetchHomeResponse>;
}

export const home = (axios: AxiosInstance, serviceUrl: string): IHomeApi => {
  return {
    fetchHome: async () => {
      const res = await axios({
        url: `${serviceUrl}/api/home`,
        method: 'GET',
      });
      return res.data;
    },
  };
};
