let nock = require('nock');

module.exports.hash = "a029440b94d74f4bb37d8021fa55d003";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint', {"encodedQueryParams":false})
  .patch('/phoneNumbers/%2B14155550100/capabilities', {"calling":"none","sms":"outbound"})
  .query(true)
  .reply(404, "", [
  'Request-Context',
  'appId=',
  'MS-CV',
  'A1uTBbq3nk2rB2RHx2xxiQ.0',
  'api-supported-versions',
  '2021-03-07',
  'X-Processing-Time',
  '277ms',
  'X-Cache',
  'CONFIG_NOCACHE',
  'X-Azure-Ref',
  '0blm2YAAAAAApYfcZTdxvQ4um59ELvNWHWVZSMzBFREdFMDMxNAA5ZmM3YjUxOS1hOGNjLTRmODktOTM1ZS1jOTE0OGFlMDllODE=',
  'Date',
  'Tue, 01 Jun 2021 15:59:42 GMT',
  'Content-Length',
  '0'
]);
