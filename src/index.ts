import { Api } from './modules/api.js';
import { createApplicant, searchApplicants } from './modules/applicants/test.js';

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJvNGU5NDMyMTJkNjI0NTkyYSIsInRwZSI6MCwiYXAiOlsxM10sImlzcyI6ImRhdGFzcGlrZS5pbyIsInMiOiIyNDQ2Y2U2ZC1lZDg3LTRjMWUtYTZkZi1iYThiNDFhODAwNTcifQ.exEOHscPJP65L7jnE8lssQk3ZtcDSdHVpeUM1HmMaYI'




const api = new Api(token)
const res = await api.applicant.getApplicantById('1ef177b3-1732-6623-8f67-45ecbd176b2d')
// console.log( res.data.data[0])

console.log(res.data)





