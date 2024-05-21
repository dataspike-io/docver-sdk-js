import { Api, RequestMethodEnum, } from "../api/index.js";
export class AmlApi extends Api {
    constructor(token, url) {
        super(token, url);
        this.getRequestById = async (id) => {
            const paramsQuery = `/api/v3/aml/search/history/${id}`;
            const res = await this.getRequest(RequestMethodEnum.GET, paramsQuery);
            return res;
        };
    }
}
//# sourceMappingURL=index.js.map