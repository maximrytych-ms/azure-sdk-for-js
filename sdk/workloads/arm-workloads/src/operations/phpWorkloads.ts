/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PhpWorkloads } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WorkloadsClient } from "../workloadsClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  PhpWorkloadResource,
  PhpWorkloadsListBySubscriptionNextOptionalParams,
  PhpWorkloadsListBySubscriptionOptionalParams,
  PhpWorkloadsListByResourceGroupNextOptionalParams,
  PhpWorkloadsListByResourceGroupOptionalParams,
  PhpWorkloadsListBySubscriptionResponse,
  PhpWorkloadsListByResourceGroupResponse,
  PhpWorkloadsGetOptionalParams,
  PhpWorkloadsGetResponse,
  PhpWorkloadsCreateOrUpdateOptionalParams,
  PhpWorkloadsCreateOrUpdateResponse,
  PatchResourceRequestBody,
  PhpWorkloadsUpdateOptionalParams,
  PhpWorkloadsUpdateResponse,
  PhpWorkloadsDeleteOptionalParams,
  PhpWorkloadsListBySubscriptionNextResponse,
  PhpWorkloadsListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PhpWorkloads operations. */
export class PhpWorkloadsImpl implements PhpWorkloads {
  private readonly client: WorkloadsClient;

  /**
   * Initialize a new instance of the class PhpWorkloads class.
   * @param client Reference to the service client
   */
  constructor(client: WorkloadsClient) {
    this.client = client;
  }

  /**
   * Lists PHP workload resources for a subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: PhpWorkloadsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<PhpWorkloadResource> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: PhpWorkloadsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<PhpWorkloadResource[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: PhpWorkloadsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<PhpWorkloadResource> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists PHP workload resources in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: PhpWorkloadsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<PhpWorkloadResource> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: PhpWorkloadsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<PhpWorkloadResource[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: PhpWorkloadsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<PhpWorkloadResource> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists PHP workload resources for a subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: PhpWorkloadsListBySubscriptionOptionalParams
  ): Promise<PhpWorkloadsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Lists PHP workload resources in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: PhpWorkloadsListByResourceGroupOptionalParams
  ): Promise<PhpWorkloadsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Gets the PHP workload resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param phpWorkloadName Php workload name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    phpWorkloadName: string,
    options?: PhpWorkloadsGetOptionalParams
  ): Promise<PhpWorkloadsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, phpWorkloadName, options },
      getOperationSpec
    );
  }

  /**
   * Create or updated PHP workload resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param phpWorkloadName Php workload name
   * @param phpWorkloadResource Resource create or update request payload
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    phpWorkloadName: string,
    phpWorkloadResource: PhpWorkloadResource,
    options?: PhpWorkloadsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<PhpWorkloadsCreateOrUpdateResponse>,
      PhpWorkloadsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<PhpWorkloadsCreateOrUpdateResponse> => {
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
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, phpWorkloadName, phpWorkloadResource, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or updated PHP workload resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param phpWorkloadName Php workload name
   * @param phpWorkloadResource Resource create or update request payload
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    phpWorkloadName: string,
    phpWorkloadResource: PhpWorkloadResource,
    options?: PhpWorkloadsCreateOrUpdateOptionalParams
  ): Promise<PhpWorkloadsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      phpWorkloadName,
      phpWorkloadResource,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update PHP workload resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param phpWorkloadName Php workload name
   * @param resourcePatchRequestBody Workload resource update data
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    phpWorkloadName: string,
    resourcePatchRequestBody: PatchResourceRequestBody,
    options?: PhpWorkloadsUpdateOptionalParams
  ): Promise<PhpWorkloadsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, phpWorkloadName, resourcePatchRequestBody, options },
      updateOperationSpec
    );
  }

  /**
   * Delete PHP workload resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param phpWorkloadName Php workload name
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    phpWorkloadName: string,
    options?: PhpWorkloadsDeleteOptionalParams
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
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, phpWorkloadName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete PHP workload resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param phpWorkloadName Php workload name
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    phpWorkloadName: string,
    options?: PhpWorkloadsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      phpWorkloadName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: PhpWorkloadsListBySubscriptionNextOptionalParams
  ): Promise<PhpWorkloadsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: PhpWorkloadsListByResourceGroupNextOptionalParams
  ): Promise<PhpWorkloadsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Workloads/phpWorkloads",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PhpWorkloadResourceList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/phpWorkloads",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PhpWorkloadResourceList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/phpWorkloads/{phpWorkloadName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PhpWorkloadResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.phpWorkloadName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/phpWorkloads/{phpWorkloadName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PhpWorkloadResource
    },
    201: {
      bodyMapper: Mappers.PhpWorkloadResource
    },
    202: {
      bodyMapper: Mappers.PhpWorkloadResource
    },
    204: {
      bodyMapper: Mappers.PhpWorkloadResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.phpWorkloadResource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.phpWorkloadName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/phpWorkloads/{phpWorkloadName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.PhpWorkloadResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.resourcePatchRequestBody,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.phpWorkloadName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/phpWorkloads/{phpWorkloadName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.deleteInfra],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.phpWorkloadName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PhpWorkloadResourceList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PhpWorkloadResourceList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
