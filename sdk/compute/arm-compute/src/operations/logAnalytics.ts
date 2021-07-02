import { LogAnalytics } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  RequestRateByIntervalInput,
  LogAnalyticsExportRequestRateByIntervalOptionalParams,
  LogAnalyticsExportRequestRateByIntervalResponse,
  ThrottledRequestsInput,
  LogAnalyticsExportThrottledRequestsOptionalParams,
  LogAnalyticsExportThrottledRequestsResponse
} from "../models";

/** Class representing a LogAnalytics. */
export class LogAnalyticsImpl implements LogAnalytics {
  private readonly client: ComputeManagementClientContext;

  /**
   * Initialize a new instance of the class LogAnalytics class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Export logs that show Api requests made by this subscription in the given time window to show
   * throttling activities.
   * @param location The location upon which virtual-machine-sizes is queried.
   * @param parameters Parameters supplied to the LogAnalytics getRequestRateByInterval Api.
   * @param options The options parameters.
   */
  async beginExportRequestRateByInterval(
    location: string,
    parameters: RequestRateByIntervalInput,
    options?: LogAnalyticsExportRequestRateByIntervalOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LogAnalyticsExportRequestRateByIntervalResponse>,
      LogAnalyticsExportRequestRateByIntervalResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<LogAnalyticsExportRequestRateByIntervalResponse> => {
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
      { location, parameters, options },
      exportRequestRateByIntervalOperationSpec,
      sendOperation,
      "azure-async-operation"
    );
  }

  /**
   * Export logs that show Api requests made by this subscription in the given time window to show
   * throttling activities.
   * @param location The location upon which virtual-machine-sizes is queried.
   * @param parameters Parameters supplied to the LogAnalytics getRequestRateByInterval Api.
   * @param options The options parameters.
   */
  async beginExportRequestRateByIntervalAndWait(
    location: string,
    parameters: RequestRateByIntervalInput,
    options?: LogAnalyticsExportRequestRateByIntervalOptionalParams
  ): Promise<LogAnalyticsExportRequestRateByIntervalResponse> {
    const poller = await this.beginExportRequestRateByInterval(
      location,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Export logs that show total throttled Api requests for this subscription in the given time window.
   * @param location The location upon which virtual-machine-sizes is queried.
   * @param parameters Parameters supplied to the LogAnalytics getThrottledRequests Api.
   * @param options The options parameters.
   */
  async beginExportThrottledRequests(
    location: string,
    parameters: ThrottledRequestsInput,
    options?: LogAnalyticsExportThrottledRequestsOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LogAnalyticsExportThrottledRequestsResponse>,
      LogAnalyticsExportThrottledRequestsResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<LogAnalyticsExportThrottledRequestsResponse> => {
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
      { location, parameters, options },
      exportThrottledRequestsOperationSpec,
      sendOperation,
      "azure-async-operation"
    );
  }

  /**
   * Export logs that show total throttled Api requests for this subscription in the given time window.
   * @param location The location upon which virtual-machine-sizes is queried.
   * @param parameters Parameters supplied to the LogAnalytics getThrottledRequests Api.
   * @param options The options parameters.
   */
  async beginExportThrottledRequestsAndWait(
    location: string,
    parameters: ThrottledRequestsInput,
    options?: LogAnalyticsExportThrottledRequestsOptionalParams
  ): Promise<LogAnalyticsExportThrottledRequestsResponse> {
    const poller = await this.beginExportThrottledRequests(
      location,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const exportRequestRateByIntervalOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/logAnalytics/apiAccess/getRequestRateByInterval",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.LogAnalyticsOperationResult
    },
    201: {
      bodyMapper: Mappers.LogAnalyticsOperationResult
    },
    202: {
      bodyMapper: Mappers.LogAnalyticsOperationResult
    },
    204: {
      bodyMapper: Mappers.LogAnalyticsOperationResult
    }
  },
  requestBody: Parameters.parameters25,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const exportThrottledRequestsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/logAnalytics/apiAccess/getThrottledRequests",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.LogAnalyticsOperationResult
    },
    201: {
      bodyMapper: Mappers.LogAnalyticsOperationResult
    },
    202: {
      bodyMapper: Mappers.LogAnalyticsOperationResult
    },
    204: {
      bodyMapper: Mappers.LogAnalyticsOperationResult
    }
  },
  requestBody: Parameters.parameters26,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
