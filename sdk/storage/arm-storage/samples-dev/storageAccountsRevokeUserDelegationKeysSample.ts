/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { StorageManagementClient } from "@azure/arm-storage";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Revoke user delegation keys.
 *
 * @summary Revoke user delegation keys.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2022-05-01/examples/StorageAccountRevokeUserDelegationKeys.json
 */
async function storageAccountRevokeUserDelegationKeys() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "res4167";
  const accountName = "sto3539";
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.storageAccounts.revokeUserDelegationKeys(
    resourceGroupName,
    accountName
  );
  console.log(result);
}

storageAccountRevokeUserDelegationKeys().catch(console.error);
