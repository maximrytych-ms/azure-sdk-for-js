import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { GalleryImageVersions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  GalleryImageVersion,
  GalleryImageVersionsListByGalleryImageNextOptionalParams,
  GalleryImageVersionsListByGalleryImageOptionalParams,
  GalleryImageVersionsCreateOrUpdateOptionalParams,
  GalleryImageVersionsCreateOrUpdateResponse,
  GalleryImageVersionUpdate,
  GalleryImageVersionsUpdateOptionalParams,
  GalleryImageVersionsUpdateResponse,
  GalleryImageVersionsGetOptionalParams,
  GalleryImageVersionsGetResponse,
  GalleryImageVersionsDeleteOptionalParams,
  GalleryImageVersionsListByGalleryImageResponse,
  GalleryImageVersionsListByGalleryImageNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a GalleryImageVersions. */
export class GalleryImageVersionsImpl implements GalleryImageVersions {
  private readonly client: ComputeManagementClientContext;

  /**
   * Initialize a new instance of the class GalleryImageVersions class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * List gallery image versions in a gallery image definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the Shared Image Gallery Image Definition from which the Image
   *                         Versions are to be listed.
   * @param options The options parameters.
   */
  public listByGalleryImage(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    options?: GalleryImageVersionsListByGalleryImageOptionalParams
  ): PagedAsyncIterableIterator<GalleryImageVersion> {
    const iter = this.listByGalleryImagePagingAll(
      resourceGroupName,
      galleryName,
      galleryImageName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByGalleryImagePagingPage(
          resourceGroupName,
          galleryName,
          galleryImageName,
          options
        );
      }
    };
  }

  private async *listByGalleryImagePagingPage(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    options?: GalleryImageVersionsListByGalleryImageOptionalParams
  ): AsyncIterableIterator<GalleryImageVersion[]> {
    let result = await this._listByGalleryImage(
      resourceGroupName,
      galleryName,
      galleryImageName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByGalleryImageNext(
        resourceGroupName,
        galleryName,
        galleryImageName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByGalleryImagePagingAll(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    options?: GalleryImageVersionsListByGalleryImageOptionalParams
  ): AsyncIterableIterator<GalleryImageVersion> {
    for await (const page of this.listByGalleryImagePagingPage(
      resourceGroupName,
      galleryName,
      galleryImageName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Create or update a gallery image version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the gallery image definition in which the Image Version is to be
   *                         created.
   * @param galleryImageVersionName The name of the gallery image version to be created. Needs to follow
   *                                semantic version name pattern: The allowed characters are digit and period. Digits must be within
   *                                the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryImageVersion Parameters supplied to the create or update gallery image version
   *                            operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    galleryImageVersion: GalleryImageVersion,
    options?: GalleryImageVersionsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GalleryImageVersionsCreateOrUpdateResponse>,
      GalleryImageVersionsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<GalleryImageVersionsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      {
        resourceGroupName,
        galleryName,
        galleryImageName,
        galleryImageVersionName,
        galleryImageVersion,
        options
      },
      createOrUpdateOperationSpec,
      sendOperation
    );
  }

  /**
   * Create or update a gallery image version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the gallery image definition in which the Image Version is to be
   *                         created.
   * @param galleryImageVersionName The name of the gallery image version to be created. Needs to follow
   *                                semantic version name pattern: The allowed characters are digit and period. Digits must be within
   *                                the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryImageVersion Parameters supplied to the create or update gallery image version
   *                            operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    galleryImageVersion: GalleryImageVersion,
    options?: GalleryImageVersionsCreateOrUpdateOptionalParams
  ): Promise<GalleryImageVersionsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      galleryName,
      galleryImageName,
      galleryImageVersionName,
      galleryImageVersion,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update a gallery image version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the gallery image definition in which the Image Version is to be
   *                         updated.
   * @param galleryImageVersionName The name of the gallery image version to be updated. Needs to follow
   *                                semantic version name pattern: The allowed characters are digit and period. Digits must be within
   *                                the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryImageVersion Parameters supplied to the update gallery image version operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    galleryImageVersion: GalleryImageVersionUpdate,
    options?: GalleryImageVersionsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GalleryImageVersionsUpdateResponse>,
      GalleryImageVersionsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<GalleryImageVersionsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      {
        resourceGroupName,
        galleryName,
        galleryImageName,
        galleryImageVersionName,
        galleryImageVersion,
        options
      },
      updateOperationSpec,
      sendOperation
    );
  }

  /**
   * Update a gallery image version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the gallery image definition in which the Image Version is to be
   *                         updated.
   * @param galleryImageVersionName The name of the gallery image version to be updated. Needs to follow
   *                                semantic version name pattern: The allowed characters are digit and period. Digits must be within
   *                                the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryImageVersion Parameters supplied to the update gallery image version operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    galleryImageVersion: GalleryImageVersionUpdate,
    options?: GalleryImageVersionsUpdateOptionalParams
  ): Promise<GalleryImageVersionsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      galleryName,
      galleryImageName,
      galleryImageVersionName,
      galleryImageVersion,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Retrieves information about a gallery image version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the gallery image definition in which the Image Version resides.
   * @param galleryImageVersionName The name of the gallery image version to be retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    options?: GalleryImageVersionsGetOptionalParams
  ): Promise<GalleryImageVersionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        galleryName,
        galleryImageName,
        galleryImageVersionName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Delete a gallery image version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the gallery image definition in which the Image Version resides.
   * @param galleryImageVersionName The name of the gallery image version to be deleted.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    options?: GalleryImageVersionsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      {
        resourceGroupName,
        galleryName,
        galleryImageName,
        galleryImageVersionName,
        options
      },
      deleteOperationSpec,
      sendOperation
    );
  }

  /**
   * Delete a gallery image version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the gallery image definition in which the Image Version resides.
   * @param galleryImageVersionName The name of the gallery image version to be deleted.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    options?: GalleryImageVersionsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      galleryName,
      galleryImageName,
      galleryImageVersionName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List gallery image versions in a gallery image definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the Shared Image Gallery Image Definition from which the Image
   *                         Versions are to be listed.
   * @param options The options parameters.
   */
  private _listByGalleryImage(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    options?: GalleryImageVersionsListByGalleryImageOptionalParams
  ): Promise<GalleryImageVersionsListByGalleryImageResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, galleryName, galleryImageName, options },
      listByGalleryImageOperationSpec
    );
  }

  /**
   * ListByGalleryImageNext
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the Shared Image Gallery Image Definition from which the Image
   *                         Versions are to be listed.
   * @param nextLink The nextLink from the previous successful call to the ListByGalleryImage method.
   * @param options The options parameters.
   */
  private _listByGalleryImageNext(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    nextLink: string,
    options?: GalleryImageVersionsListByGalleryImageNextOptionalParams
  ): Promise<GalleryImageVersionsListByGalleryImageNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, galleryName, galleryImageName, nextLink, options },
      listByGalleryImageNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}/versions/{galleryImageVersionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryImageVersion
    },
    201: {
      bodyMapper: Mappers.GalleryImageVersion
    },
    202: {
      bodyMapper: Mappers.GalleryImageVersion
    },
    204: {
      bodyMapper: Mappers.GalleryImageVersion
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.galleryImageVersion,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.galleryName,
    Parameters.galleryImageName,
    Parameters.galleryImageVersionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}/versions/{galleryImageVersionName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryImageVersion
    },
    201: {
      bodyMapper: Mappers.GalleryImageVersion
    },
    202: {
      bodyMapper: Mappers.GalleryImageVersion
    },
    204: {
      bodyMapper: Mappers.GalleryImageVersion
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.galleryImageVersion1,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.galleryName,
    Parameters.galleryImageName,
    Parameters.galleryImageVersionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}/versions/{galleryImageVersionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryImageVersion
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion3, Parameters.expand4],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.galleryName,
    Parameters.galleryImageName,
    Parameters.galleryImageVersionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}/versions/{galleryImageVersionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.galleryName,
    Parameters.galleryImageName,
    Parameters.galleryImageVersionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByGalleryImageOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}/versions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryImageVersionList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.galleryName,
    Parameters.galleryImageName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByGalleryImageNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryImageVersionList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.galleryName,
    Parameters.galleryImageName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
