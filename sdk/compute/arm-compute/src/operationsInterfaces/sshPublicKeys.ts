import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  SshPublicKeyResource,
  SshPublicKeysListBySubscriptionOptionalParams,
  SshPublicKeysListByResourceGroupOptionalParams,
  SshPublicKeysCreateOptionalParams,
  SshPublicKeysCreateResponse,
  SshPublicKeyUpdateResource,
  SshPublicKeysUpdateOptionalParams,
  SshPublicKeysUpdateResponse,
  SshPublicKeysDeleteOptionalParams,
  SshPublicKeysGetOptionalParams,
  SshPublicKeysGetResponse,
  SshPublicKeysGenerateKeyPairOptionalParams,
  SshPublicKeysGenerateKeyPairResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SshPublicKeys. */
export interface SshPublicKeys {
  /**
   * Lists all of the SSH public keys in the subscription. Use the nextLink property in the response to
   * get the next page of SSH public keys.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: SshPublicKeysListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<SshPublicKeyResource>;
  /**
   * Lists all of the SSH public keys in the specified resource group. Use the nextLink property in the
   * response to get the next page of SSH public keys.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: SshPublicKeysListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<SshPublicKeyResource>;
  /**
   * Creates a new SSH public key resource.
   * @param resourceGroupName The name of the resource group.
   * @param sshPublicKeyName The name of the SSH public key.
   * @param parameters Parameters supplied to create the SSH public key.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    sshPublicKeyName: string,
    parameters: SshPublicKeyResource,
    options?: SshPublicKeysCreateOptionalParams
  ): Promise<SshPublicKeysCreateResponse>;
  /**
   * Updates a new SSH public key resource.
   * @param resourceGroupName The name of the resource group.
   * @param sshPublicKeyName The name of the SSH public key.
   * @param parameters Parameters supplied to update the SSH public key.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    sshPublicKeyName: string,
    parameters: SshPublicKeyUpdateResource,
    options?: SshPublicKeysUpdateOptionalParams
  ): Promise<SshPublicKeysUpdateResponse>;
  /**
   * Delete an SSH public key.
   * @param resourceGroupName The name of the resource group.
   * @param sshPublicKeyName The name of the SSH public key.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    sshPublicKeyName: string,
    options?: SshPublicKeysDeleteOptionalParams
  ): Promise<void>;
  /**
   * Retrieves information about an SSH public key.
   * @param resourceGroupName The name of the resource group.
   * @param sshPublicKeyName The name of the SSH public key.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    sshPublicKeyName: string,
    options?: SshPublicKeysGetOptionalParams
  ): Promise<SshPublicKeysGetResponse>;
  /**
   * Generates and returns a public/private key pair and populates the SSH public key resource with the
   * public key. The length of the key will be 3072 bits. This operation can only be performed once per
   * SSH public key resource.
   * @param resourceGroupName The name of the resource group.
   * @param sshPublicKeyName The name of the SSH public key.
   * @param options The options parameters.
   */
  generateKeyPair(
    resourceGroupName: string,
    sshPublicKeyName: string,
    options?: SshPublicKeysGenerateKeyPairOptionalParams
  ): Promise<SshPublicKeysGenerateKeyPairResponse>;
}
