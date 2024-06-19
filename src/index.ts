import { amlExampleRequests, AmlHistoryModel, Api } from './modules/index.ts';
import * as dotenv from 'dotenv';

dotenv.config();

const TOKEN: string = process.env.API_ENDPOINT === 'prod' ? process.env.TOKEN || '' : process.env.TOKEN_SANDBOX || '';

const api = new Api(TOKEN);

// AML search
const amlSearchResult = await api.aml.search(amlExampleRequests.amlSearchExample);
const amlSearchResultId = amlSearchResult.data as AmlHistoryModel;
console.log(amlSearchResultId);




