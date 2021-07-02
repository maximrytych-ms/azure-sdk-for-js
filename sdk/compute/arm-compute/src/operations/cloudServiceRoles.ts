import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { CloudServiceRoles } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import {
  CloudServiceRole,
  CloudServiceRolesListNextOptionalParams,
  CloudServiceRolesListOptionalParams,
  CloudServiceRolesGetOptionalParams,
  CloudServiceRolesGetResponse,
  CloudServiceRolesListResponse,
  CloudServiceRolesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a CloudServiceRoles. */
export class CloudServiceRolesImpl implements CloudServiceRoles {
  private readonly client: ComputeManagementClientContext;

  /**
   * Initialize a new instance of the class CloudServiceRoles class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of all roles in a cloud service. Use nextLink property in the response to get the next
   * page of roles. Do this till nextLink is null to fetch all the roles.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRolesListOptionalParams
  ): PagedAsyncIterableIterator<CloudServiceRole> {
    const iter = this.listPagingAll(
      resourceGroupName,
      cloudServiceName,
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
        return this.listPagingPage(
          resourceGroupName,
          cloudServiceName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRolesListOptionalParams
  ): AsyncIterableIterator<CloudServiceRole[]> {
    let result = await this._list(resourceGroupName, cloudServiceName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        cloudServiceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRolesListOptionalParams
  ): AsyncIterableIterator<CloudServiceRole> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      cloudServiceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a role from a cloud service.
   * @param roleName Name of the role.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  get(
    roleName: string,
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRolesGetOptionalParams
  ): Promise<CloudServiceRolesGetResponse> {
    return this.client.sendOperationRequest(
      { roleName, resourceGroupName, cloudServiceName, options },
      getOperationSpec
    );
  }

  /**
   * Gets a list of all roles in a cloud service. Use nextLink property in the response to get the next
   * page of roles. Do this till nextLink is null to fetch all the roles.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRolesListOptionalParams
  ): Promise<CloudServiceRolesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, cloudServiceName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName
   * @param cloudServiceName
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    cloudServiceName: string,
    nextLink: string,
    options?: CloudServiceRolesListNextOptionalParams
  ): Promise<CloudServiceRolesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, cloudServiceName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/roles/{roleName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CloudServiceRole
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.cloudServiceName,
    Parameters.roleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/roles",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CloudServiceRoleListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.cloudServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CloudServiceRoleListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.cloudServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
