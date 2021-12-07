let nock = require('nock');

module.exports.hash = "5cf7c3dad62da5a8ace919ef2d0bf7bc";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'c1cfa25c-7442-47ca-b044-7b1750741800',
  'x-ms-ests-server',
  '2.1.12249.17 - KRSLR2 ProdSlices',
  'Set-Cookie',
  'fpc=AqfbXTO1rEtEmLfEQYFNSyE; expires=Thu, 06-Jan-2022 03:44:31 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrmKsb2u0MfHutnfJDTviG_VFliZii126JOssEUVenqCR0s2sNZ9Q2jG2VnLTvKBk6wMatXnXkckYXRZoDjj42h-NHnBUQERKv5R1iaax64o14H26pTi0B4_QTO0mIgssouZBPI9tTBfcZ6uCRO2BUvpKohGTODLN9ye7xHsJU0MYgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 07 Dec 2021 03:44:31 GMT',
  'Content-Length',
  '980'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"kerberos_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/kerberos","tenant_region_scope":"WW","cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '115f1bfd-a469-43d8-b3cf-29ab38ca1800',
  'x-ms-ests-server',
  '2.1.12249.17 - KRSLR2 ProdSlices',
  'Set-Cookie',
  'fpc=Avd5ZkyxCExDpvN9Y9-F09c; expires=Thu, 06-Jan-2022 03:44:31 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7Wevr8HxJ5no1asjLFbUZqZ919U9imsV1HZ3A_Ve-r73zHb0emjgZc55LEpDcCaUrfk2vEYNyEpnqfQ8nZY95tNBPWWc_t3wIevccA6EYFSAQBWWDi3evLF_FiI0i5ygaKC2YwLE6X3Rl7S_0tKtM3RzkYTegvEptHzLCmvnA5DPp3FEgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 07 Dec 2021 03:44:31 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.3.3&x-client-OS=win32&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=f56510d3-8771-4b18-bb63-418a63ef00a6&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22cp1%22%5D%7D%7D%7D")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '192f85c9-9d5a-4aff-a38f-fa4697191d00',
  'x-ms-ests-server',
  '2.1.12249.17 - KRSLR1 ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=AhWE67nw77lNgL4EFHHrCPYWPr5BAQAAAJ_PQNkOAAAA; expires=Thu, 06-Jan-2022 03:44:32 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 07 Dec 2021 03:44:31 GMT',
  'Content-Length',
  '1374'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/providers/Microsoft.Management/managementGroups/20000000-0001-0000-0000-000000000123/providers/Microsoft.Authorization/policyDefinitions/jspolicy')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147abba5ae5755be4cd478fe8afaa2ca6d76fae57f9478f3e3a59376db5f868f4d1a29ae1efb3e52c7f97cfe88359de4ceb62d516d5923e7f5a2d3f6ed3699d676d9e66e94f7e9166cbebab795ee7d47491b7d92c6b33409726b327d7f4d2f9834fcf0ff63ebdbffd69f620dfdecff6ceb71feece0eb6efefec4df24fcf77f667e7fbf4babef225fad9dbd9dbdddedddbde79f066e7dea3fdfd477b07e307fb3b3b3b9f3ef8296aba5e513f027db92e4bfb01dec507bf64a4c37bb52e6938bff8a3e21cff666559d12fdffbc51f35d5ba9ed2371f65531ed9e8a3fc17adb39208f3d117c5b4ae9aeabc1d9f548bd5bacdef5e16754b5f7e914de7c5326fee5ed5459b7ff44b46bff8a3f3222f67f44e594d338553100adffb28cf9a76ddd09ff2cb1efd36cd976d9d95f4e9f77fc9f709c1769e53d35ffc517e7e9e4f5b0232cb97d71ffd925f425f15807997a6ebb298e57573d7a1f445b6cc2ef20581babbb0bf7e5e57eb5573778fc883679bfebf8b7ff837f9879fddbd7b51a0c7eb765ed5c50f78087785704ff3f36259e083e6ee4f37f2190da21576b9f5bbf4ca325be0150f4873ddb4f9e2698c53b2fd07d9eebd9dedf3ecfe747b7f36d9d97e389ddedf9e4c3fbdbf737f7ab0ff60ff0101b0af28f71eaf56049a5170df1e83a6513eda3dd8dbb9bf0f3e2a6976bea86605cd2341a3f6b744207c2f8a85dfe466547ec9","2ff97f00850916be9f030000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-tenant-reads',
  '11994',
  'x-ms-request-id',
  '1c24d279-af59-4273-ad50-3128698204c0',
  'x-ms-correlation-request-id',
  '1c24d279-af59-4273-ad50-3128698204c0',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211207T034432Z:1c24d279-af59-4273-ad50-3128698204c0',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Tue, 07 Dec 2021 03:44:31 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .put('//providers/Microsoft.Management/managementgroups/20000000-0001-0000-0000-000000000123//providers/Microsoft.Authorization/policyAssignments/passigment', {"properties":{"policyDefinitionId":"/providers/Microsoft.Management/managementGroups/20000000-0001-0000-0000-000000000123/providers/Microsoft.Authorization/policyDefinitions/jspolicy"}})
  .query(true)
  .reply(201, {"properties":{"policyDefinitionId":"/providers/Microsoft.Management/managementGroups/20000000-0001-0000-0000-000000000123/providers/Microsoft.Authorization/policyDefinitions/jspolicy","scope":"/providers/Microsoft.Management/managementgroups/20000000-0001-0000-0000-000000000123","metadata":{"createdBy":"f76f8265-6a7e-4a2f-91d8-502be6f04df4","createdOn":"2021-12-07T03:44:32.2932547Z","updatedBy":null,"updatedOn":null},"enforcementMode":"Default"},"id":"/providers/Microsoft.Management/managementgroups/20000000-0001-0000-0000-000000000123/providers/Microsoft.Authorization/policyAssignments/passigment","type":"Microsoft.Authorization/policyAssignments","name":"passigment","systemData":{"createdBy":"azure_client_id","createdByType":"Application","createdAt":"2021-12-07T03:44:32.2732784Z","lastModifiedBy":"azure_client_id","lastModifiedByType":"Application","lastModifiedAt":"2021-12-07T03:44:32.2732784Z"}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '956',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-tenant-writes',
  '1197',
  'x-ms-request-id',
  '99b01b1e-7f27-4cae-8d47-cbf6df0be3f8',
  'x-ms-correlation-request-id',
  '99b01b1e-7f27-4cae-8d47-cbf6df0be3f8',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211207T034432Z:99b01b1e-7f27-4cae-8d47-cbf6df0be3f8',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Tue, 07 Dec 2021 03:44:31 GMT'
]);
