/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { BgpConnection, NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates a VirtualHubBgpConnection resource if it doesn't exist else updates the existing VirtualHubBgpConnection.
 *
 * @summary Creates a VirtualHubBgpConnection resource if it doesn't exist else updates the existing VirtualHubBgpConnection.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-01-01/examples/VirtualHubBgpConnectionPut.json
 */
async function virtualHubRouteTableV2Put() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const virtualHubName = "hub1";
  const connectionName = "conn1";
  const parameters: BgpConnection = {
    hubVirtualNetworkConnection: {
      id:
        "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/hub1/hubVirtualNetworkConnections/hubVnetConn1"
    },
    peerAsn: 20000,
    peerIp: "192.168.1.5"
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualHubBgpConnection.beginCreateOrUpdateAndWait(
    resourceGroupName,
    virtualHubName,
    connectionName,
    parameters
  );
  console.log(result);
}

virtualHubRouteTableV2Put().catch(console.error);
