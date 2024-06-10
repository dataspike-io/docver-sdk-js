import axios from 'axios';
import { ResponseErrorModel, ResponseModel } from './types.ts';


export enum RequestMethodEnum {
  'GET' = 'get',
  'PUT' = 'put',
  'POST' = 'post',
  'DELETE' = 'delete'

}

export class BaseAPi {
  url: string;
  token: string;

  constructor(token: string) {
    this.url = process.env.API_ENDPOINT === 'prod' ? 'https://api.dataspike.dev' : 'https://sandboxapi.dataspike.io';
    this.token = token;
  }

  getRequest = async <R, D = unknown>(method: RequestMethodEnum, paramsQuery: string, data?: D, headers?: Record<string, string>) => {
    try {
      const response = await axios({
        method,
        url: this.url + paramsQuery,
        headers: {
          'ds-api-token': this.token,
          'Content-Type': 'application/json',
          ...headers,
        },
        data,
      });
      return {
        url: response.config.url,
        status: response.status,
        statusText: response.statusText,
        ...(data && {
          requestBody: data,
        }),
        data: response.data,

      } as ResponseModel<R, D>;
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        return {
          url: error?.response?.config?.url,
          status: error?.response?.status,
          statusText: error?.response?.statusText,
          ...(data && {
            requestBody: data,
          }),
          data: error?.response?.data || error,

        } as ResponseModel<ResponseErrorModel, D>;
      } else {
        console.error(error);
      }
    }
  };
}


