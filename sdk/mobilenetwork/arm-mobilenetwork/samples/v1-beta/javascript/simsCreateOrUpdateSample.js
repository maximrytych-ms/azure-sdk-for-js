/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { MobileNetworkManagementClient } = require("@azure/arm-mobilenetwork");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates a SIM.
 *
 * @summary Creates or updates a SIM.
 * x-ms-original-file: specification/mobilenetwork/resource-manager/Microsoft.MobileNetwork/preview/2022-04-01-preview/examples/SimCreate.json
 */
async function createSim() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const simGroupName = "testSimGroup";
  const simName = "testSim";
  const parameters = {
    authenticationKey: "00000000000000000000000000000000",
    deviceType: "Video camera",
    integratedCircuitCardIdentifier: "8900000000000000000",
    internationalMobileSubscriberIdentity: "00000",
    operatorKeyCode: "00000000000000000000000000000000",
    simPolicy: {
      id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.MobileNetwork/mobileNetworks/testMobileNetwork/simPolicies/MySimPolicy",
    },
    staticIpConfiguration: [
      {
        attachedDataNetwork: {
          id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.MobileNetwork/packetCoreControlPlanes/TestPacketCoreCP/packetCoreDataPlanes/TestPacketCoreDP/attachedDataNetworks/TestAttachedDataNetwork",
        },
        slice: {
          id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.MobileNetwork/mobileNetworks/testMobileNetwork/slices/testSlice",
        },
        staticIp: { ipv4Address: "2.4.0.1" },
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new MobileNetworkManagementClient(credential, subscriptionId);
  const result = await client.sims.beginCreateOrUpdateAndWait(
    resourceGroupName,
    simGroupName,
    simName,
    parameters
  );
  console.log(result);
}

createSim().catch(console.error);
