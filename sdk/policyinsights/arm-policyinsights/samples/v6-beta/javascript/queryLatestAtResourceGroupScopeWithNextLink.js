/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Queries policy states for the resources under the resource group.
 *
 * @summary Queries policy states for the resources under the resource group.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2019-10-01/examples/PolicyStates_QueryResourceGroupScopeNextLink.json
 */
const { PolicyInsightsClient } = require("@azure/arm-policyinsights");
const { DefaultAzureCredential } = require("@azure/identity");

async function queryLatestAtResourceGroupScopeWithNextLink() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const policyStatesResource = "latest";
  const subscriptionId2 = "fffedd8f-ffff-fffd-fffd-fffed2f84852";
  const resourceGroupName = "myResourceGroup";
  const skipToken = "WpmWfBSvPhkAK6QD";
  const options = { skipToken: skipToken };
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.policyStates.listQueryResultsForResourceGroup(
    policyStatesResource,
    subscriptionId2,
    resourceGroupName,
    { queryOptions: options }
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

queryLatestAtResourceGroupScopeWithNextLink().catch(console.error);
