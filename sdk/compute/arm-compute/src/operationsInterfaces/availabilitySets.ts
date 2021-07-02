import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AvailabilitySet,
  AvailabilitySetsListBySubscriptionOptionalParams,
  AvailabilitySetsListOptionalParams,
  VirtualMachineSize,
  AvailabilitySetsListAvailableSizesOptionalParams,
  AvailabilitySetsCreateOrUpdateOptionalParams,
  AvailabilitySetsCreateOrUpdateResponse,
  AvailabilitySetUpdate,
  AvailabilitySetsUpdateOptionalParams,
  AvailabilitySetsUpdateResponse,
  AvailabilitySetsDeleteOptionalParams,
  AvailabilitySetsGetOptionalParams,
  AvailabilitySetsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AvailabilitySets. */
export interface AvailabilitySets {
  /**
   * Lists all availability sets in a subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: AvailabilitySetsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<AvailabilitySet>;
  /**
   * Lists all availability sets in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: AvailabilitySetsListOptionalParams
  ): PagedAsyncIterableIterator<AvailabilitySet>;
  /**
   * Lists all available virtual machine sizes that can be used to create a new virtual machine in an
   * existing availability set.
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param options The options parameters.
   */
  listAvailableSizes(
    resourceGroupName: string,
    availabilitySetName: string,
    options?: AvailabilitySetsListAvailableSizesOptionalParams
  ): PagedAsyncIterableIterator<VirtualMachineSize>;
  /**
   * Create or update an availability set.
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param parameters Parameters supplied to the Create Availability Set operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    availabilitySetName: string,
    parameters: AvailabilitySet,
    options?: AvailabilitySetsCreateOrUpdateOptionalParams
  ): Promise<AvailabilitySetsCreateOrUpdateResponse>;
  /**
   * Update an availability set.
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param parameters Parameters supplied to the Update Availability Set operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    availabilitySetName: string,
    parameters: AvailabilitySetUpdate,
    options?: AvailabilitySetsUpdateOptionalParams
  ): Promise<AvailabilitySetsUpdateResponse>;
  /**
   * Delete an availability set.
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    availabilitySetName: string,
    options?: AvailabilitySetsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Retrieves information about an availability set.
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    availabilitySetName: string,
    options?: AvailabilitySetsGetOptionalParams
  ): Promise<AvailabilitySetsGetResponse>;
}
