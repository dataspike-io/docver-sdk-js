import axios from 'axios';
import { RequestMethodEnum, RequestProps, ResponseErrorModel, ResponseModel } from './types';


export class BaseAPi {
  url: string;
  token: string;
  isSandbox?: boolean;

  constructor(token: string, isSandbox: boolean = false) {
    this.isSandbox = isSandbox;
    this.token = token;
    this.url = this.isSandbox ? 'https://sandboxapi.dataspike.io' : 'https://api.dataspike.dev';
  }

  getRequest = async <R, D = unknown>({ method = RequestMethodEnum.GET, query, data, headers }: RequestProps<D>) => {
    try {
      const response = await axios({
        method,
        url: this.url + query,
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
