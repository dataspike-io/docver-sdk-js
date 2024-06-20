import dotenv from 'dotenv';
import { amlExampleRequests, Api } from 'src/modules';
import { EntityTypeEnum } from 'src/enums';


dotenv.config();
const api = new Api(process.env.API_TOKEN || '');

const res = await api.aml.search(amlExampleRequests.amlSearchExample);
console.log(process.env.API_TOKEN, res, EntityTypeEnum);
