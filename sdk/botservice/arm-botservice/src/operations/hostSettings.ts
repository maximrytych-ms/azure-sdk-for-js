/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { HostSettings } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureBotServiceContext } from "../azureBotServiceContext";
import {
  HostSettingsGetOptionalParams,
  HostSettingsGetResponse
} from "../models";

/** Class containing HostSettings operations. */
export class HostSettingsImpl implements HostSettings {
  private readonly client: AzureBotServiceContext;

  /**
   * Initialize a new instance of the class HostSettings class.
   * @param client Reference to the service client
   */
  constructor(client: AzureBotServiceContext) {
    this.client = client;
  }

  /**
   * Get per subscription settings needed to host bot in compute resource such as Azure App Service
   * @param options The options parameters.
   */
  get(
    options?: HostSettingsGetOptionalParams
  ): Promise<HostSettingsGetResponse> {
    return this.client.sendOperationRequest({ options }, getOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.BotService/hostSettings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HostSettingsResponse
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
