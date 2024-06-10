import { BaseAPi, RequestMethodEnum } from '../base-api/base-api.js';
import {ResponseErrorModel, ResponseModel} from "../base-api/types.js";
import { AmlHistoryModel, AmlSearchRequestModel, DataSourceModel } from './models/index.js';
import { WithPaginationResponse } from '../../models/index.js';
import { SearchDataSourcesRequest } from './models/search-data-sources-request.js';


export class AmlApi extends BaseAPi {
  #amlPath = '/api/v3/aml/search'
  #datasourcesPath = '/webapi/public/datasources'
  constructor( token: string) {
    super(token);
  }
  getHistoryById = async (id: string) =>{
    return  await this.getRequest<AmlHistoryModel>(RequestMethodEnum.GET,`${this.#amlPath}/history/${id}`)
  }
  getHistory = async () =>{
    return  await this.getRequest<AmlHistoryModel>(RequestMethodEnum.GET,`${this.#amlPath}/history`)
  }
  search = async (data: AmlSearchRequestModel) => {
    return await this.getRequest<AmlHistoryModel>(RequestMethodEnum.POST,  this.#amlPath, data)
  }
  getDataSources = async (data: SearchDataSourcesRequest)=> {
    return await this.getRequest<WithPaginationResponse<DataSourceModel>>(RequestMethodEnum.POST, this.#datasourcesPath, data)
  }
}

