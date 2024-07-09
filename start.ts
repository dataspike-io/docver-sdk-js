import dotenv from 'dotenv';
import { DSApi } from './src/modules/api';
import { amlExampleRequests, EntityTypeEnum } from './src';

dotenv.config();

const start = async () => {
  const api = new DSApi(process.env.API_TOKEN || '');

  const res = await api.aml.search(amlExampleRequests.amlSearchExample);
  console.log(process.env.API_TOKEN, res, EntityTypeEnum);
};

start();
