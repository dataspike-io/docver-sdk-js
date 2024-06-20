# Dataspike python client library

The official wrapper for Dataspike API

## Installation

## Getting started

Library offers well typed async API powered by node.js and axios.

```
npm install
```

Create a .env file, add TOKEN and TOKEN SANDBOX

```
TOKEN = your token
TOKEN_SANDBOX = your token sandbox
```

This application has two operational modes:

1. To operate in production mode, use the command: `npm run dev`
2. For sandbox mode, use the command: `npm run dev:sandbox`

### Resources

Full reference and documentation about available resources
can be found at our [official documentation](https://docs.dataspike.io)

Currently library provides following resources

- AML `api.aml`
- Applicant `api.applicant`
- Verification `api.verification`
- Profile `api.profile`
- SDK `api.sdk`

### AML Screening Example

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
