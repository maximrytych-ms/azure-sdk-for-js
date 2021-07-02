import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  GalleryApplicationVersion,
  GalleryApplicationVersionsListByGalleryApplicationOptionalParams,
  GalleryApplicationVersionsCreateOrUpdateOptionalParams,
  GalleryApplicationVersionsCreateOrUpdateResponse,
  GalleryApplicationVersionUpdate,
  GalleryApplicationVersionsUpdateOptionalParams,
  GalleryApplicationVersionsUpdateResponse,
  GalleryApplicationVersionsGetOptionalParams,
  GalleryApplicationVersionsGetResponse,
  GalleryApplicationVersionsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a GalleryApplicationVersions. */
export interface GalleryApplicationVersions {
  /**
   * List gallery Application Versions in a gallery Application Definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition
   *                    resides.
   * @param galleryApplicationName The name of the Shared Application Gallery Application Definition from
   *                               which the Application Versions are to be listed.
   * @param options The options parameters.
   */
  listByGalleryApplication(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    options?: GalleryApplicationVersionsListByGalleryApplicationOptionalParams
  ): PagedAsyncIterableIterator<GalleryApplicationVersion>;
  /**
   * Create or update a gallery Application Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition
   *                    resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   *                               Application Version is to be created.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be created.
   *                                      Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits
   *                                      must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryApplicationVersion Parameters supplied to the create or update gallery Application
   *                                  Version operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplicationVersionName: string,
    galleryApplicationVersion: GalleryApplicationVersion,
    options?: GalleryApplicationVersionsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GalleryApplicationVersionsCreateOrUpdateResponse>,
      GalleryApplicationVersionsCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a gallery Application Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition
   *                    resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   *                               Application Version is to be created.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be created.
   *                                      Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits
   *                                      must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryApplicationVersion Parameters supplied to the create or update gallery Application
   *                                  Version operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplicationVersionName: string,
    galleryApplicationVersion: GalleryApplicationVersion,
    options?: GalleryApplicationVersionsCreateOrUpdateOptionalParams
  ): Promise<GalleryApplicationVersionsCreateOrUpdateResponse>;
  /**
   * Update a gallery Application Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition
   *                    resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   *                               Application Version is to be updated.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be updated.
   *                                      Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits
   *                                      must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryApplicationVersion Parameters supplied to the update gallery Application Version
   *                                  operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplicationVersionName: string,
    galleryApplicationVersion: GalleryApplicationVersionUpdate,
    options?: GalleryApplicationVersionsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GalleryApplicationVersionsUpdateResponse>,
      GalleryApplicationVersionsUpdateResponse
    >
  >;
  /**
   * Update a gallery Application Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition
   *                    resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   *                               Application Version is to be updated.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be updated.
   *                                      Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits
   *                                      must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryApplicationVersion Parameters supplied to the update gallery Application Version
   *                                  operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplicationVersionName: string,
    galleryApplicationVersion: GalleryApplicationVersionUpdate,
    options?: GalleryApplicationVersionsUpdateOptionalParams
  ): Promise<GalleryApplicationVersionsUpdateResponse>;
  /**
   * Retrieves information about a gallery Application Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition
   *                    resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   *                               Application Version resides.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplicationVersionName: string,
    options?: GalleryApplicationVersionsGetOptionalParams
  ): Promise<GalleryApplicationVersionsGetResponse>;
  /**
   * Delete a gallery Application Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition
   *                    resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   *                               Application Version resides.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be deleted.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplicationVersionName: string,
    options?: GalleryApplicationVersionsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete a gallery Application Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition
   *                    resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   *                               Application Version resides.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be deleted.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplicationVersionName: string,
    options?: GalleryApplicationVersionsDeleteOptionalParams
  ): Promise<void>;
}
