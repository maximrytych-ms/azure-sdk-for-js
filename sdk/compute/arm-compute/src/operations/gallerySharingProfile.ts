import { GallerySharingProfile } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  SharingUpdate,
  GallerySharingProfileUpdateOptionalParams,
  GallerySharingProfileUpdateResponse
} from "../models";

/** Class representing a GallerySharingProfile. */
export class GallerySharingProfileImpl implements GallerySharingProfile {
  private readonly client: ComputeManagementClientContext;

  /**
   * Initialize a new instance of the class GallerySharingProfile class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Update sharing profile of a gallery.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery.
   * @param sharingUpdate Parameters supplied to the update gallery sharing profile.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    galleryName: string,
    sharingUpdate: SharingUpdate,
    options?: GallerySharingProfileUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GallerySharingProfileUpdateResponse>,
      GallerySharingProfileUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<GallerySharingProfileUpdateResponse> => {
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
      { resourceGroupName, galleryName, sharingUpdate, options },
      updateOperationSpec,
      sendOperation
    );
  }

  /**
   * Update sharing profile of a gallery.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery.
   * @param sharingUpdate Parameters supplied to the update gallery sharing profile.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    galleryName: string,
    sharingUpdate: SharingUpdate,
    options?: GallerySharingProfileUpdateOptionalParams
  ): Promise<GallerySharingProfileUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      galleryName,
      sharingUpdate,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/share",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SharingUpdate
    },
    201: {
      bodyMapper: Mappers.SharingUpdate
    },
    202: {
      bodyMapper: Mappers.SharingUpdate
    },
    204: {
      bodyMapper: Mappers.SharingUpdate
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.sharingUpdate,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.galleryName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
