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
  RetrieveThroughputParameters,
  CosmosDBManagementClient
} from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Retrieve throughput distribution for an Azure Cosmos DB MongoDB container
 *
 * @summary Retrieve throughput distribution for an Azure Cosmos DB MongoDB container
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/CosmosDBMongoDBCollectionRetrieveThroughputDistribution.json
 */
async function cosmosDbMongoDbcollectionRetrieveThroughputDistribution() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const collectionName = "collectionName";
  const retrieveThroughputParameters: RetrieveThroughputParameters = {
    resource: { physicalPartitionIds: [{ id: "0" }, { id: "1" }] }
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.mongoDBResources.beginMongoDBContainerRetrieveThroughputDistributionAndWait(
    resourceGroupName,
    accountName,
    databaseName,
    collectionName,
    retrieveThroughputParameters
  );
  console.log(result);
}

cosmosDbMongoDbcollectionRetrieveThroughputDistribution().catch(console.error);
