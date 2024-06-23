import dotenv from 'dotenv';
import { amlExampleRequests, DSApi, EntityTypeEnum } from './index';

dotenv.config();

const start = async () => {
  const api = new DSApi(process.env.API_TOKEN || '');

  const res = await api.aml.search(amlExampleRequests.amlSearchExample);
  console.log(process.env.API_TOKEN, res, EntityTypeEnum);
};

start();
