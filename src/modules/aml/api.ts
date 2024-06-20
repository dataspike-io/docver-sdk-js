import { BaseAPi, RequestMethodEnum } from '../base-api/base-api.js';
import { AmlHistoryModel, AmlSearchRequestModel, DataSourceModel } from './models/index.js';
import { WithPaginationResponse } from '../../models/index.js';
import { SearchDataSourcesRequest } from './models/search-data-sources-request.js';


export class AmlApi extends BaseAPi {
  #amlPath = '/api/v3/aml/search';
  #datasourcesPath = '/webapi/public/datasources';

  constructor(token: string, isSandbox?: boolean) {
    super(token, isSandbox);
  }

  getHistoryById = async (id: string) => {
    return await this.getRequest<AmlHistoryModel>({
      paramsQuery: `${this.#amlPath}/history/${id}`,
    });
  };
  getHistory = async () => {
    return await this.getRequest<AmlHistoryModel>({
      paramsQuery: `${this.#amlPath}/history`,
    });
  };
  search = async (data: AmlSearchRequestModel) => {
    return await this.getRequest<AmlHistoryModel, AmlSearchRequestModel>({
      method: RequestMethodEnum.POST,
      paramsQuery: this.#amlPath,
      data,
    });
  };
  getDataSources = async (data: SearchDataSourcesRequest) => {
    return await this.getRequest<WithPaginationResponse<DataSourceModel>>({
      method: RequestMethodEnum.POST,
      paramsQuery: this.#datasourcesPath,
      data,
    });
  };
}

