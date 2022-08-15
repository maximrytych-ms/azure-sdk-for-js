/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  ResourceSyncRule,
  ResourceSyncRulesListByCustomLocationIDOptionalParams,
  ResourceSyncRulesGetOptionalParams,
  ResourceSyncRulesGetResponse,
  ResourceSyncRulesCreateOrUpdateOptionalParams,
  ResourceSyncRulesCreateOrUpdateResponse,
  ResourceSyncRulesDeleteOptionalParams,
  ResourceSyncRulesUpdateOptionalParams,
  ResourceSyncRulesUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ResourceSyncRules. */
export interface ResourceSyncRules {
  /**
   * Gets a list of Resource Sync Rules in the specified subscription. The operation returns properties
   * of each Resource Sync Rule
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName Custom Locations name.
   * @param options The options parameters.
   */
  listByCustomLocationID(
    resourceGroupName: string,
    resourceName: string,
    options?: ResourceSyncRulesListByCustomLocationIDOptionalParams
  ): PagedAsyncIterableIterator<ResourceSyncRule>;
  /**
   * Gets the details of the resourceSyncRule with a specified resource group, subscription id Custom
   * Location resource name and Resource Sync Rule name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName Custom Locations name.
   * @param childResourceName Resource Sync Rule name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    childResourceName: string,
    options?: ResourceSyncRulesGetOptionalParams
  ): Promise<ResourceSyncRulesGetResponse>;
  /**
   * Creates or updates a Resource Sync Rule in the parent Custom Location, Subscription Id and Resource
   * Group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName Custom Locations name.
   * @param childResourceName Resource Sync Rule name.
   * @param parameters Parameters supplied to create or update a Resource Sync Rule.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    childResourceName: string,
    parameters: ResourceSyncRule,
    options?: ResourceSyncRulesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ResourceSyncRulesCreateOrUpdateResponse>,
      ResourceSyncRulesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a Resource Sync Rule in the parent Custom Location, Subscription Id and Resource
   * Group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName Custom Locations name.
   * @param childResourceName Resource Sync Rule name.
   * @param parameters Parameters supplied to create or update a Resource Sync Rule.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    resourceName: string,
    childResourceName: string,
    parameters: ResourceSyncRule,
    options?: ResourceSyncRulesCreateOrUpdateOptionalParams
  ): Promise<ResourceSyncRulesCreateOrUpdateResponse>;
  /**
   * Deletes the Resource Sync Rule with the specified Resource Sync Rule Name, Custom Location Resource
   * Name, Resource Group, and Subscription Id.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName Custom Locations name.
   * @param childResourceName Resource Sync Rule name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceName: string,
    childResourceName: string,
    options?: ResourceSyncRulesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Updates a Resource Sync Rule with the specified Resource Sync Rule name in the specified Resource
   * Group, Subscription and Custom Location name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName Custom Locations name.
   * @param childResourceName Resource Sync Rule name.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    resourceName: string,
    childResourceName: string,
    options?: ResourceSyncRulesUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ResourceSyncRulesUpdateResponse>,
      ResourceSyncRulesUpdateResponse
    >
  >;
  /**
   * Updates a Resource Sync Rule with the specified Resource Sync Rule name in the specified Resource
   * Group, Subscription and Custom Location name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName Custom Locations name.
   * @param childResourceName Resource Sync Rule name.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    resourceName: string,
    childResourceName: string,
    options?: ResourceSyncRulesUpdateOptionalParams
  ): Promise<ResourceSyncRulesUpdateResponse>;
}
