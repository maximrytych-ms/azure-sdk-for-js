/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { WorkloadNetworkDhcp, AzureVMwareSolutionAPI } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Create or update dhcp by id in a private cloud workload network.
 *
 * @summary Create or update dhcp by id in a private cloud workload network.
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2021-12-01/examples/WorkloadNetworks_UpdateDhcpConfigurations.json
 */
async function workloadNetworksUpdateDhcp() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const dhcpId = "dhcp1";
  const workloadNetworkDhcp: WorkloadNetworkDhcp = {
    properties: {
      dhcpType: "SERVER",
      leaseTime: 86400,
      revision: 1,
      serverAddress: "40.1.5.1/24"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.workloadNetworks.beginUpdateDhcpAndWait(
    resourceGroupName,
    privateCloudName,
    dhcpId,
    workloadNetworkDhcp
  );
  console.log(result);
}

workloadNetworksUpdateDhcp().catch(console.error);
