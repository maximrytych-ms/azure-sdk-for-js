/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { DevCenterClient } = require("@azure/arm-devcenter");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists pools for a project
 *
 * @summary Lists pools for a project
 * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/preview/2022-08-01-preview/examples/Pools_List.json
 */
async function poolsListByProject() {
  const subscriptionId = "{subscriptionId}";
  const resourceGroupName = "rg1";
  const projectName = "{projectName}";
  const credential = new DefaultAzureCredential();
  const client = new DevCenterClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.pools.listByProject(resourceGroupName, projectName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

poolsListByProject().catch(console.error);
