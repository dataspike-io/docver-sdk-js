import { ApplicantsApi } from "./modules/applicants/index.js";
import { AmlApi } from "./modules/aml/index.js";
const token = '***REMOVED***';
const amlRequestId = '1ef14657-3041-619f-82ba-7ec0580e143e';
const applicantId = '1ef0c6f9-d9a6-6976-b51d-d57a050caddc';
const aml = new AmlApi(token);
const applicants = new ApplicantsApi(token);
const res2 = await aml.getRequestById(amlRequestId);
console.log(11, res2);
//# sourceMappingURL=index.js.map