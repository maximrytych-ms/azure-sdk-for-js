/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Update a private cloud
 *
 * @summary Update a private cloud
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2021-12-01/examples/PrivateClouds_Update.json
 */
async function privateCloudsUpdate() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const privateCloudUpdate = {
    encryption: {
      keyVaultProperties: {
        keyName: "keyname1",
        keyVaultUrl: "https://keyvault1-kmip-kvault.vault.azure.net/",
        keyVersion: "ver1.0",
      },
      status: "Enabled",
    },
    identity: { type: "None" },
    managementCluster: { clusterSize: 4 },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.privateClouds.beginUpdateAndWait(
    resourceGroupName,
    privateCloudName,
    privateCloudUpdate
  );
  console.log(result);
}

privateCloudsUpdate().catch(console.error);

/**
 * This sample demonstrates how to Update a private cloud
 *
 * @summary Update a private cloud
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2021-12-01/examples/PrivateClouds_Update_Stretched.json
 */
async function privateCloudsUpdateStretched() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const privateCloudUpdate = {
    managementCluster: { clusterSize: 4 },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.privateClouds.beginUpdateAndWait(
    resourceGroupName,
    privateCloudName,
    privateCloudUpdate
  );
  console.log(result);
}

privateCloudsUpdateStretched().catch(console.error);
