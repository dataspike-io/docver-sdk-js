import { Api, RequestMethodEnum } from "../api/index.js";
export class ApplicantsApi extends Api {
    constructor(token, url) {
        super(token, url);
        this.getRequestById = async (applicant_id) => {
            const paramsQuery = `/api/v3/applicants/${applicant_id}`;
            try {
                const res = await this.getRequest(RequestMethodEnum.GET, paramsQuery);
                return res;
            }
            catch (e) {
                console.log('aml', e);
            }
        };
    }
}
//# sourceMappingURL=index.js.map