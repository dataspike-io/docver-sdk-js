import { BaseAPi } from '../base-api/base-api';
import { AmlHistoryModel, AmlSearchRequestModel, DataSourceModel } from './models';
import { WithPaginationResponse } from '../../models';
import { SearchDataSourcesRequest } from './models/search-data-sources-request';
import { RequestMethodEnum } from '../base-api';

export class AmlApi extends BaseAPi {
  #amlPath = '/api/v3/aml/search';
  #datasourcesPath = '/webapi/public/datasources';

  constructor(token: string, isSandbox?: boolean) {
    super(token, isSandbox);
  }

  getHistoryById = async (id: string) => {
    return await this.getRequest<AmlHistoryModel>({
      query: `${this.#amlPath}/history/${id}`,
    });
  };
  getHistory = async () => {
    return await this.getRequest<AmlHistoryModel>({
      query: `${this.#amlPath}/history`,
    });
  };
  search = async (data: AmlSearchRequestModel) => {
    return await this.getRequest<AmlHistoryModel, AmlSearchRequestModel>({
      method: RequestMethodEnum.POST,
      query: this.#amlPath,
      data,
    });
  };
  getDataSources = async (data: SearchDataSourcesRequest) => {
    return await this.getRequest<WithPaginationResponse<DataSourceModel>>({
      method: RequestMethodEnum.POST,
      query: this.#datasourcesPath,
      data,
    });
  };
}
