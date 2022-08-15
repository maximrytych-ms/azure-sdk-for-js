/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  FleetMember,
  ContainerServiceClient
} from "@azure/arm-containerservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to A member contains a reference to an existing Kubernetes cluster. Creating a member makes the referenced cluster join the Fleet.
 *
 * @summary A member contains a reference to an existing Kubernetes cluster. Creating a member makes the referenced cluster join the Fleet.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-06-02-preview/examples/FleetMembers_Create.json
 */
async function createAFleetMemberResourceJoinsAnExistingClusterToTheFleet() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const fleetName = "fleet-1";
  const fleetMemberName = "member-1";
  const parameters: FleetMember = {
    clusterResourceId:
      "/subscriptions/subid1/resourcegroups/rg1/providers/Microsoft.ContainerService/managedClusters/cluster-1"
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.fleetMembers.beginCreateOrUpdateAndWait(
    resourceGroupName,
    fleetName,
    fleetMemberName,
    parameters
  );
  console.log(result);
}

createAFleetMemberResourceJoinsAnExistingClusterToTheFleet().catch(
  console.error
);
