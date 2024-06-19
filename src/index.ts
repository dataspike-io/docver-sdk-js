import { Api } from './modules/api';
import { searchApplicants } from './modules/applicants/test';
const token = '---';

const api = new Api(token);
const res = await api.applicant.getApplicants(searchApplicants);

console.log(res);
