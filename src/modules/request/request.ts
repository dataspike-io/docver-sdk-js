import axios from 'axios';
import { ResponseErrorModel, ResponseModel } from './types';

export enum RequestMethodEnum {
  'GET' = 'get',
  'POST' = 'post',
}

export class Request {
  url: string;
  token: string;

  constructor(token: string, url?: string) {
    this.url = url || 'https://api.dataspike.io';
    this.token = token;
  }
  getRequest = async <R, D = unknown>(method: RequestMethodEnum, paramsQuery: string, data?: D) => {
    try {
      const response = await axios({
        method,
        url: this.url + paramsQuery,
        headers: {
          'ds-api-token': this.token,
          'Content-Type': 'application/json',
        },
        data,
      });
      return {
        url: response.config.url,
        status: response.status,
        statusText: response.statusText,
        data: response.data,
      } as ResponseModel<R>;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          url: error?.response?.config?.url,
          status: error?.response?.status,
          statusText: error?.response?.statusText,
          data: error?.response?.data,
        } as ResponseModel<ResponseErrorModel>;
      } else {
        console.error(error);
      }
    }
  };
}
