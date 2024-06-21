# Dataspike NodeJs client library

The official wrapper for Dataspike API

### Resources

Full reference and documentation about available resources
can be found at our [official documentation](https://docs.dataspike.io)

Currently library provides following resources

- AML `api.aml`
- Applicant `api.applicant`
- Verification `api.verification`
- Profile `api.profile`
- SDK `api.sdk`


#### AML search

```node.js
from dataspike import *
import { amlExampleRequests, Api } from './modules/index';

const api = new Api(TOKEN);
const amlSearchResult = await api.aml.search(amlExampleRequests.amlSearchExample);
```

```node.js
from dataspike import *

const api = new Api(TOKEN);
const verification = await api.verification.create(CreateVerificationRequest)
```
