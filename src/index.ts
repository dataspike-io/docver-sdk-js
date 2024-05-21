import { Api } from './modules/api.js';
import { searchApplicants } from './modules/applicants/test.js';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJvNGU5NDMyMTJkNjI0NTkyYSIsInRwZSI6MCwiYXAiOlsxM10sImlzcyI6ImRhdGFzcGlrZS5pbyIsInMiOiIyNDQ2Y2U2ZC1lZDg3LTRjMWUtYTZkZi1iYThiNDFhODAwNTcifQ.exEOHscPJP65L7jnE8lssQk3ZtcDSdHVpeUM1HmMaYI'




const api = new Api(token)
const res = await api.applicant.getApplicants(searchApplicants)


console.log(res)





