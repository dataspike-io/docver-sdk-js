import {Request, RequestMethodEnum, } from "../request/request.js";
import {ResponseErrorModel, ResponseModel} from "../request/types.js";
import { AmlHistoryModel, AmlSearchRequestModel, DataSourceModel } from './models/index.js';
import { WithPaginationResponse } from '../../models/index.js';
import { DataSourcesSearchRequest } from './models/data-sources-search-request.js';


export class AmlApi extends Request {
  constructor( token: string, url?: string) {
    super(token, url);
  }
   getHistoryById = async (id: string) =>{
    const path = `/api/v3/aml/search/history/${id}`
    const res = await this.getRequest(RequestMethodEnum.GET,path)
    return res as  ResponseModel<AmlHistoryModel | ResponseErrorModel>
  }
  search = async (data: AmlSearchRequestModel) => {
    const path = '/api/v3/aml/search'
    const res = await this.getRequest<AmlHistoryModel>(RequestMethodEnum.POST, path, data)
    return res
  }
  getDataSources = async (data: DataSourcesSearchRequest)=> {
    const path = '/webapi/public/datasources'
    const res = await this.getRequest(RequestMethodEnum.POST, path, data)
    return res as ResponseModel<WithPaginationResponse<DataSourceModel>>
  }
}

