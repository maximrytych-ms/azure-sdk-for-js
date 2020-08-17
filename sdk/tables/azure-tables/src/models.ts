// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  TableQueryEntitiesWithPartitionAndRowKeyHeaders,
  TableQueryEntitiesHeaders,
  TableResponseProperties,
  TableQueryResponse,
  TableQueryHeaders,
  TableInsertEntityHeaders
} from "./generated/models";
import { OperationOptions, HttpResponse } from "@azure/core-http";

/**
 * Contains response data for the createEntity operation.
 */
export type CreateTableEntityResponse<T extends object> = TableEntity<T> & {
  /**
   * The underlying HTTP response.
   */
  _response: HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: { [propertyName: string]: any };
    /**
     * The parsed HTTP response headers.
     */
    parsedHeaders: TableInsertEntityHeaders;
  };
};

/**
 * Contains response data for the listTable operation.
 */
export type ListTableItemsResponse = Array<TableResponseProperties> & {
  /**
   * This header contains the continuation token value.
   */
  nextTableName?: string;
  /**
   * The underlying HTTP response.
   */
  _response: HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: TableQueryResponse;
    /**
     * The parsed HTTP response headers.
     */
    parsedHeaders: TableQueryHeaders;
  };
};

/**
 * Contains response data for the getEntity operation.
 */
export type ListEntitiesResponse<T extends object> = Array<TableEntity<T>> & {
  /**
   * Contains the continuation token value for partition key.
   */
  nextPartitionKey?: string;
  /**
   * Contains the continuation token value for row key.
   */
  nextextRowKey?: string;
  /**
   * The underlying HTTP response.
   */
  _response: HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;
    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: { value?: { [key: string]: any } };
    /**
     * The parsed HTTP response headers.
     */
    parsedHeaders: TableQueryEntitiesHeaders;
  };
};

/**
 * Contains response data for the listEntities operation.
 */
export type GetTableEntityResponse<T extends object> = TableEntity<T> & {
  /**
   * The underlying HTTP response.
   */
  _response: HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: { [propertyName: string]: any };
    /**
     * The parsed HTTP response headers.
     */
    parsedHeaders: TableQueryEntitiesWithPartitionAndRowKeyHeaders;
  };
};

/**
 * Optional parameters for DeleteTableEntity operation
 */
export type DeleteTableEntityOptions = OperationOptions & {
  /**
   * Query options group
   */
  queryOptions?: TableEntityQueryOptions;

  /**
   * Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when analytics logging is enabled.
   */
  requestId?: string;
  /**
   * The timeout parameter is expressed in seconds.
   */
  timeout?: number;
  /**
   * UTC date/time value generated by the service that indicates the time at which the response was initiated
   */
  etag?: string;
};

/**
 * Optional parameters for CreaateTable operation
 */
export type CreateTableOptions = OperationOptions & {
  /**
   * Query options group
   */
  queryOptions?: TableQueryOptions;
  /**
   * Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when analytics logging is enabled.
   */
  requestId?: string;
};

/**
 * OData Query options to limit the set of tables returned.
 */
export interface TableQueryOptions {
  /**
   * Maximum number of records to return.
   */
  top?: number;
  /**
   * OData filter expression.
   */
  filter?: string;
}

/**
 * OData Query options to limit the set of entities returned.
 */
export interface TableEntityQueryOptions {
  /**
   * Maximum number of records to return.
   */
  top?: number;
  /**
   * OData filter expression.
   */
  filter?: string;
  /**
   * A select expression limits the properties on each entity to just those requested.
   */
  select?: string[];
}

/**
 * List tables optional parameters.
 */
export interface ListTablesOptions {
  /**
   * Query options group
   */
  queryOptions?: TableQueryOptions;
  /**
   * Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when analytics logging is enabled.
   */
  requestId?: string;
  /**
   * A table query continuation token from a previous call.
   */
  nextTableName?: string;
}

/**
 * List entities optional parameters.
 */
export interface ListTableEntitiesOptions {
  /**
   * Query options group
   */
  queryOptions?: TableEntityQueryOptions;
  /**
   * Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when analytics logging is enabled.
   */
  requestId?: string;
  /**
   * The timeout parameter is expressed in seconds.
   */
  timeout?: number;
  /**
   * An entity query continuation token from a previous call.
   */
  nextPartitionKey?: string;
  /**
   * An entity query continuation token from a previous call.
   */
  nextRowKey?: string;
}

/**
 * GetEntity optional parameters.
 */
export type GetTableEntityOptions = OperationOptions & {
  /**
   * Parameter group
   */
  queryOptions?: TableEntityQueryOptions;
  /**
   * Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when analytics logging is enabled.
   */
  requestId?: string;
  /**
   * The timeout parameter is expressed in seconds.
   */
  timeout?: number;
};

/**
 * Create entity optional parameters.
 */
export type CreateTableEntityOptions = OperationOptions & {
  /**
   * Parameter group
   */
  queryOptions?: TableEntityQueryOptions;
  /**
   * Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when analytics logging is enabled.
   */
  requestId?: string;
  /**
   * The timeout parameter is expressed in seconds.
   */
  timeout?: number;
};

/**
 * Update entity optional parameters.
 */
export type UpdateTableEntityOptions = OperationOptions & {
  /**
   * Query options group
   */
  queryOptions?: TableQueryOptions;
  /**
   * Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when analytics logging is enabled.
   */
  requestId?: string;
  /**
   * The timeout parameter is expressed in seconds.
   */
  timeout?: number;
  /**
   * Match condition for an entity to be updated. If specified and a matching entity is not found, an error will be raised. To force an unconditional update, set to the wildcard character (*). If not specified, an insert will be performed when no existing entity is found to update and a replace will be performed if an existing entity is found.
   */
  etag?: string;
};

/**
 * Merge entity optional parameters.
 */
export type UpsertTableEntityOptions = OperationOptions & {
  /**
   * Parameter group
   */
  queryOptions?: TableEntityQueryOptions;
  /**
   * Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when analytics logging is enabled.
   */
  requestId?: string;
  /**
   * The timeout parameter is expressed in seconds.
   */
  timeout?: number;
  /**
   * Match condition for an entity to be updated. If specified and a matching entity is not found, an error will be raised. To force an unconditional update, set to the wildcard character (*). If not specified, an insert will be performed when no existing entity is found to update and a merge will be performed if an existing entity is found.
   */
  etag?: string;
};

/**
 * A set of key-value pairs representing the table entity.
 */
export type TableEntity<T extends object> = T & {
  /**
   * The PartitionKey property of the entity.
   */
  PartitionKey: string;
  /**
   * The RowKey property of the entity.
   */
  RowKey: string;
};

/**
 * Supported EDM Types by Azure Tables.
 */
export type EdmTypes =
  | "Binary"
  | "Boolean"
  | "DateTime"
  | "Double"
  | "Guid"
  | "Int32"
  | "Int64"
  | "String";

/**
 * Entity Data Model representation for an entity property.
 */
export interface Edm<T extends EdmTypes> {
  /**
   * The value of the entity property
   */
  value: T extends "Binary"
    ? Uint8Array
    : T extends "Boolean"
    ? boolean
    : T extends "DateTime"
    ? Date
    : T extends "Double"
    ? number
    : T extends "Int32"
    ? number
    : string;
  /**
   * The type of the entity property
   */
  type: T;
}

/**
 * The different modes for Update and Upsert methods
 * - Merge: Updates an entity by updating the entity's properties without replacing the existing entity.
 * - Replace: Updates an existing entity by replacing the entire entity.
 */
export type UpdateMode = "Merge" | "Replace";
