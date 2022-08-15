/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates a new operation in the API or updates an existing one.
 *
 * @summary Creates a new operation in the API or updates an existing one.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementCreateApiOperation.json
 */
async function apiManagementCreateApiOperation() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "PetStoreTemplate2";
  const operationId = "newoperations";
  const parameters = {
    method: "POST",
    description: "This can only be done by the logged in user.",
    displayName: "createUser2",
    templateParameters: [],
    urlTemplate: "/user1",
    request: {
      description: "Created user object",
      headers: [],
      queryParameters: [],
      representations: [
        {
          contentType: "application/json",
          schemaId: "592f6c1d0af5840ca8897f0c",
          typeName: "User",
        },
      ],
    },
    responses: [
      {
        description: "successful operation",
        headers: [],
        representations: [{ contentType: "application/xml" }, { contentType: "application/json" }],
        statusCode: 200,
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.apiOperation.createOrUpdate(
    resourceGroupName,
    serviceName,
    apiId,
    operationId,
    parameters
  );
  console.log(result);
}

apiManagementCreateApiOperation().catch(console.error);
