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
  Gallery,
  GalleriesListByDevCenterOptionalParams,
  GalleriesGetOptionalParams,
  GalleriesGetResponse,
  GalleriesCreateOrUpdateOptionalParams,
  GalleriesCreateOrUpdateResponse,
  GalleriesDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Galleries. */
export interface Galleries {
  /**
   * Lists galleries for a devcenter.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param options The options parameters.
   */
  listByDevCenter(
    resourceGroupName: string,
    devCenterName: string,
    options?: GalleriesListByDevCenterOptionalParams
  ): PagedAsyncIterableIterator<Gallery>;
  /**
   * Gets a gallery
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param galleryName The name of the gallery.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    devCenterName: string,
    galleryName: string,
    options?: GalleriesGetOptionalParams
  ): Promise<GalleriesGetResponse>;
  /**
   * Creates or updates a gallery.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param galleryName The name of the gallery.
   * @param body Represents a gallery.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    devCenterName: string,
    galleryName: string,
    body: Gallery,
    options?: GalleriesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GalleriesCreateOrUpdateResponse>,
      GalleriesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a gallery.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param galleryName The name of the gallery.
   * @param body Represents a gallery.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    devCenterName: string,
    galleryName: string,
    body: Gallery,
    options?: GalleriesCreateOrUpdateOptionalParams
  ): Promise<GalleriesCreateOrUpdateResponse>;
  /**
   * Deletes a gallery resource.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param galleryName The name of the gallery.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    devCenterName: string,
    galleryName: string,
    options?: GalleriesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a gallery resource.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param galleryName The name of the gallery.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    devCenterName: string,
    galleryName: string,
    options?: GalleriesDeleteOptionalParams
  ): Promise<void>;
}
