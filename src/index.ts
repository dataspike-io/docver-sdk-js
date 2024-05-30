import { Api } from './modules/api.js';
import { searchApplicants } from './modules/applicants/test.js';
const token = '---'



const api = new Api(token)
const res = await api.applicant.getApplicants(searchApplicants)


console.log(res)





