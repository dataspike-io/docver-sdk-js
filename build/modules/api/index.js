import axios from "axios";
export var RequestMethodEnum;
(function (RequestMethodEnum) {
    RequestMethodEnum["GET"] = "get";
    RequestMethodEnum["POST"] = "post";
})(RequestMethodEnum || (RequestMethodEnum = {}));
export class Api {
    constructor(token, url) {
        this.getRequest = async (method, paramsQuery, data) => {
            var _a, _b, _c, _d, _e;
            try {
                const response = await axios({
                    method,
                    url: this.url + paramsQuery,
                    headers: {
                        'ds-api-token': this.token,
                        'Content-Type': 'application/json',
                    },
                    data
                });
                return {
                    url: response.config.url,
                    status: response.status,
                    statusText: response.statusText,
                    data: response.data
                };
            }
            catch (error) {
                if (axios.isAxiosError(error)) {
                    return {
                        url: (_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.url,
                        status: (_c = error === null || error === void 0 ? void 0 : error.response) === null || _c === void 0 ? void 0 : _c.status,
                        statusText: (_d = error === null || error === void 0 ? void 0 : error.response) === null || _d === void 0 ? void 0 : _d.statusText,
                        data: (_e = error === null || error === void 0 ? void 0 : error.response) === null || _e === void 0 ? void 0 : _e.data,
                    };
                }
                else {
                    console.error(error);
                }
            }
        };
        this.url = url || 'https://api.dataspike.io';
        this.token = token;
    }
}
//# sourceMappingURL=index.js.map