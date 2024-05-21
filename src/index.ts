import { Api } from './modules/api.js';
import { createApplicant, searchApplicants } from './modules/applicants/test.js';

const token = '***REMOVED***'




const api = new Api(token)
const res = await api.applicant.getApplicantById('1ef177b3-1732-6623-8f67-45ecbd176b2d')
// console.log( res.data.data[0])

console.log(res.data)





