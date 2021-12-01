/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Channels } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureBotServiceContext } from "../azureBotServiceContext";
import {
  BotChannel,
  ChannelsListByResourceGroupNextOptionalParams,
  ChannelsListByResourceGroupOptionalParams,
  ChannelName,
  ChannelsCreateOptionalParams,
  ChannelsCreateResponse,
  ChannelsUpdateOptionalParams,
  ChannelsUpdateResponse,
  ChannelsDeleteOptionalParams,
  ChannelsGetOptionalParams,
  ChannelsGetResponse,
  ChannelsListWithKeysOptionalParams,
  ChannelsListWithKeysResponse,
  ChannelsListByResourceGroupResponse,
  ChannelsListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Channels operations. */
export class ChannelsImpl implements Channels {
  private readonly client: AzureBotServiceContext;

  /**
   * Initialize a new instance of the class Channels class.
   * @param client Reference to the service client
   */
  constructor(client: AzureBotServiceContext) {
    this.client = client;
  }

  /**
   * Returns all the Channel registrations of a particular BotService resource
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    resourceName: string,
    options?: ChannelsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<BotChannel> {
    const iter = this.listByResourceGroupPagingAll(
      resourceGroupName,
      resourceName,
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          resourceName,
          options
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    resourceName: string,
    options?: ChannelsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<BotChannel[]> {
    let result = await this._listByResourceGroup(
      resourceGroupName,
      resourceName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        resourceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    resourceName: string,
    options?: ChannelsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<BotChannel> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      resourceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Creates a Channel registration for a Bot Service
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param channelName The name of the Channel resource.
   * @param parameters The parameters to provide for the created bot.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    resourceName: string,
    channelName: ChannelName,
    parameters: BotChannel,
    options?: ChannelsCreateOptionalParams
  ): Promise<ChannelsCreateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, channelName, parameters, options },
      createOperationSpec
    );
  }

  /**
   * Updates a Channel registration for a Bot Service
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param channelName The name of the Channel resource.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    resourceName: string,
    channelName: ChannelName,
    options?: ChannelsUpdateOptionalParams
  ): Promise<ChannelsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, channelName, options },
      updateOperationSpec
    );
  }

  /**
   * Deletes a Channel registration from a Bot Service
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param channelName The name of the Bot resource.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceName: string,
    channelName: string,
    options?: ChannelsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, channelName, options },
      deleteOperationSpec
    );
  }

  /**
   * Returns a BotService Channel registration specified by the parameters.
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param channelName The name of the Bot resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    channelName: string,
    options?: ChannelsGetOptionalParams
  ): Promise<ChannelsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, channelName, options },
      getOperationSpec
    );
  }

  /**
   * Lists a Channel registration for a Bot Service including secrets
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param channelName The name of the Channel resource.
   * @param options The options parameters.
   */
  listWithKeys(
    resourceGroupName: string,
    resourceName: string,
    channelName: ChannelName,
    options?: ChannelsListWithKeysOptionalParams
  ): Promise<ChannelsListWithKeysResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, channelName, options },
      listWithKeysOperationSpec
    );
  }

  /**
   * Returns all the Channel registrations of a particular BotService resource
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    resourceName: string,
    options?: ChannelsListByResourceGroupOptionalParams
  ): Promise<ChannelsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    resourceName: string,
    nextLink: string,
    options?: ChannelsListByResourceGroupNextOptionalParams
  ): Promise<ChannelsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/channels/{channelName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.BotChannel
    },
    201: {
      bodyMapper: Mappers.BotChannel
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.subscriptionId,
    Parameters.channelName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/channels/{channelName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.BotChannel
    },
    201: {
      bodyMapper: Mappers.BotChannel
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: {
    parameterPath: {
      location: ["options", "location"],
      tags: ["options", "tags"],
      sku: ["options", "sku"],
      kind: ["options", "kind"],
      etag: ["options", "etag"],
      properties: ["options", "properties"]
    },
    mapper: { ...Mappers.BotChannel, required: true }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.subscriptionId,
    Parameters.channelName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/channels/{channelName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.subscriptionId,
    Parameters.channelName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/channels/{channelName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BotChannel
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.subscriptionId,
    Parameters.channelName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listWithKeysOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/channels/{channelName}/listChannelWithKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.BotChannel
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.subscriptionId,
    Parameters.channelName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/channels",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChannelResponseList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChannelResponseList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
