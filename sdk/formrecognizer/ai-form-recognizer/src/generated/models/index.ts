/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";

/** Document analysis parameters. */
export interface AnalyzeDocumentRequest {
  /** Document URL to analyze */
  urlSource?: string;
  /** Base64 encoding of the document to analyze */
  base64Source?: Uint8Array;
}

/** Error response object. */
export interface ErrorResponse {
  /** Error info. */
  error: ErrorModel;
}

/** Error info. */
export interface ErrorModel {
  /** Error code. */
  code: string;
  /** Error message. */
  message: string;
  /** Target of the error. */
  target?: string;
  /** List of detailed errors. */
  details?: ErrorModel[];
  /** Detailed error. */
  innererror?: InnerError;
}

/** Detailed error. */
export interface InnerError {
  /** Error code. */
  code: string;
  /** Error message. */
  message?: string;
  /** Detailed error. */
  innererror?: InnerError;
}

/** Status and result of the analyze operation. */
export interface AnalyzeResultOperation {
  /** Operation status. */
  status: AnalyzeResultOperationStatus;
  /** Date and time (UTC) when the analyze operation was submitted. */
  createdDateTime: Date;
  /** Date and time (UTC) when the status was last updated. */
  lastUpdatedDateTime: Date;
  /** Encountered error during document analysis. */
  error?: ErrorModel;
  /** Document analysis result. */
  analyzeResult?: AnalyzeResult;
}

/** Document analysis result. */
export interface AnalyzeResult {
  /** API version used to produce this result. */
  apiVersion: ApiVersion;
  /** Document model ID used to produce this result. */
  modelId: string;
  /** Method used to compute string offset and length. */
  stringIndexType: StringIndexType;
  /** Concatenate string representation of all textual and visual elements in reading order. */
  content: string;
  /** Analyzed pages. */
  pages: DocumentPage[];
  /** Extracted paragraphs. */
  paragraphs?: DocumentParagraph[];
  /** Extracted tables. */
  tables?: DocumentTable[];
  /** Extracted key-value pairs. */
  keyValuePairs?: DocumentKeyValuePair[];
  /** Extracted font styles. */
  styles?: DocumentStyle[];
  /** Detected languages. */
  languages?: DocumentLanguage[];
  /** Extracted documents. */
  documents?: Document[];
}

/** Content and layout elements extracted from a page from the input. */
export interface DocumentPage {
  /** Kind of document page. */
  kind: DocumentPageKind;
  /** 1-based page number in the input document. */
  pageNumber: number;
  /** The general orientation of the content in clockwise direction, measured in degrees between (-180, 180]. */
  angle?: number;
  /** The width of the image/PDF in pixels/inches, respectively. */
  width?: number;
  /** The height of the image/PDF in pixels/inches, respectively. */
  height?: number;
  /** The unit used by the width, height, and polygon properties. For images, the unit is "pixel". For PDF, the unit is "inch". */
  unit?: LengthUnit;
  /** Location of the page in the reading order concatenated content. */
  spans: DocumentSpan[];
  /** Extracted words from the page. */
  words?: DocumentWord[];
  /** Extracted selection marks from the page. */
  selectionMarks?: DocumentSelectionMark[];
  /** Extracted images from the page. */
  images?: DocumentImage[];
  /** Extracted lines from the page, potentially containing both textual and visual elements. */
  lines?: DocumentLine[];
}

/** Contiguous region of the concatenated content property, specified as an offset and length. */
export interface DocumentSpan {
  /** Zero-based index of the content represented by the span. */
  offset: number;
  /** Number of characters in the content represented by the span. */
  length: number;
}

/** A word object consisting of a contiguous sequence of characters.  For non-space delimited languages, such as Chinese, Japanese, and Korean, each character is represented as its own word. */
export interface DocumentWord {
  /** Text content of the word. */
  content: string;
  /** Bounding polygon of the word. */
  polygon?: number[];
  /** Location of the word in the reading order concatenated content. */
  span: DocumentSpan;
  /** Confidence of correctly extracting the word. */
  confidence: number;
}

/** A selection mark object representing check boxes, radio buttons, and other elements indicating a selection. */
export interface DocumentSelectionMark {
  /** State of the selection mark. */
  state: SelectionMarkState;
  /** Bounding polygon of the selection mark. */
  polygon?: number[];
  /** Location of the selection mark in the reading order concatenated content. */
  span: DocumentSpan;
  /** Confidence of correctly extracting the selection mark. */
  confidence: number;
}

/** An image object detected in the page. */
export interface DocumentImage {
  /** Bounding polygon of the image. */
  polygon?: number[];
  /** Location of the image in the reading order concatenated content. */
  span: DocumentSpan;
  /** 0-based index of the global pages array that containing the content of the image. */
  pageRef: number;
  /** Confidence of correctly identifying the image. */
  confidence: number;
}

/** A content line object consisting of an adjacent sequence of content elements, such as words and selection marks. */
export interface DocumentLine {
  /** Concatenated content of the contained elements in reading order. */
  content: string;
  /** Bounding polygon of the line. */
  polygon?: number[];
  /** Location of the line in the reading order concatenated content. */
  spans: DocumentSpan[];
}

/** A paragraph object consisting with contiguous lines generally with common alignment and spacing. */
export interface DocumentParagraph {
  /** Semantic role of the paragraph. */
  role?: ParagraphRole;
  /** Concatenated content of the paragraph in reading order. */
  content: string;
  /** Bounding regions covering the paragraph. */
  boundingRegions?: BoundingRegion[];
  /** Location of the paragraph in the reading order concatenated content. */
  spans: DocumentSpan[];
}

/** Bounding polygon on a specific page of the input. */
export interface BoundingRegion {
  /** 1-based page number of page containing the bounding region. */
  pageNumber: number;
  /** Bounding polygon on the page, or the entire page if not specified. */
  polygon: number[];
}

/** A table object consisting table cells arranged in a rectangular layout. */
export interface DocumentTable {
  /** Number of rows in the table. */
  rowCount: number;
  /** Number of columns in the table. */
  columnCount: number;
  /** Cells contained within the table. */
  cells: DocumentTableCell[];
  /** Caption associated with the table. */
  caption?: DocumentCaption;
  /** Footnotes associated with the table. */
  footnotes?: DocumentFootnote[];
  /** Bounding regions covering the table. */
  boundingRegions?: BoundingRegion[];
  /** Location of the table in the reading order concatenated content. */
  spans: DocumentSpan[];
}

/** An object representing the location and content of a table cell. */
export interface DocumentTableCell {
  /** Table cell kind. */
  kind?: DocumentTableCellKind;
  /** Row index of the cell. */
  rowIndex: number;
  /** Column index of the cell. */
  columnIndex: number;
  /** Number of rows spanned by this cell. */
  rowSpan?: number;
  /** Number of columns spanned by this cell. */
  columnSpan?: number;
  /** Concatenated content of the table cell in reading order. */
  content: string;
  /** Bounding regions covering the table cell. */
  boundingRegions?: BoundingRegion[];
  /** Location of the table cell in the reading order concatenated content. */
  spans: DocumentSpan[];
}

/** An object representing the location and content of a table caption. */
export interface DocumentCaption {
  /** Table caption content. */
  content: string;
  /** Bounding regions covering the table caption. */
  boundingRegions?: BoundingRegion[];
  /** Location of the table caption in the reading order concatenated content. */
  spans: DocumentSpan[];
}

/** An object representing the location and content of a table footnote. */
export interface DocumentFootnote {
  /** Table footnote content. */
  content: string;
  /** Bounding regions covering the table footnote. */
  boundingRegions?: BoundingRegion[];
  /** Location of the table footnote in the reading order concatenated content. */
  spans: DocumentSpan[];
}

/** An object representing a form field with distinct field label (key) and field value (may be empty). */
export interface DocumentKeyValuePair {
  /** Field label of the key-value pair. */
  key: DocumentKeyValueElement;
  /** Field value of the key-value pair. */
  value?: DocumentKeyValueElement;
  /** Confidence of correctly extracting the key-value pair. */
  confidence: number;
}

/** An object representing the field key or value in a key-value pair. */
export interface DocumentKeyValueElement {
  /** Concatenated content of the key-value element in reading order. */
  content: string;
  /** Bounding regions covering the key-value element. */
  boundingRegions?: BoundingRegion[];
  /** Location of the key-value element in the reading order concatenated content. */
  spans: DocumentSpan[];
}

/** An object representing observed text styles. */
export interface DocumentStyle {
  /** Is content handwritten? */
  isHandwritten?: boolean;
  /** Location of the text elements in the concatenated content the style applies to. */
  spans: DocumentSpan[];
  /** Confidence of correctly identifying the style. */
  confidence: number;
}

/** An object representing the detected language for a given text span. */
export interface DocumentLanguage {
  /** Detected language.  Value may an ISO 639-1 language code (ex. "en", "fr") or BCP 47 language tag (ex. "zh-Hans"). */
  locale: string;
  /** Location of the text elements in the concatenated content the language applies to. */
  spans: DocumentSpan[];
  /** Confidence of correctly identifying the language. */
  confidence: number;
}

/** An object describing the location and semantic content of a document. */
export interface Document {
  /** Document type. */
  docType: string;
  /** Bounding regions covering the document. */
  boundingRegions?: BoundingRegion[];
  /** Location of the document in the reading order concatenated content. */
  spans: DocumentSpan[];
  /** Dictionary of named field values. */
  fields?: { [propertyName: string]: DocumentField };
  /** Confidence of correctly extracting the document. */
  confidence: number;
}

/** An object representing the content and location of a field value. */
export interface DocumentField {
  /** Data type of the field value. */
  type: DocumentFieldType;
  /** String value. */
  valueString?: string;
  /** Date value in YYYY-MM-DD format (ISO 8601). */
  valueDate?: Date;
  /**
   * Time value in hh:mm:ss format (ISO 8601).
   * This value should be an ISO-8601 formatted string representing time. E.g. "HH:MM:SS" or "HH:MM:SS.mm".
   */
  valueTime?: string;
  /** Phone number value in E.164 format (ex. +19876543210). */
  valuePhoneNumber?: string;
  /** Floating point value. */
  valueNumber?: number;
  /** Integer value. */
  valueInteger?: number;
  /** Selection mark value. */
  valueSelectionMark?: SelectionMarkState;
  /** Presence of signature. */
  valueSignature?: DocumentSignatureType;
  /** 3-letter country code value (ISO 3166-1 alpha-3). */
  valueCountryRegion?: string;
  /** Array of field values. */
  valueArray?: DocumentField[];
  /** Dictionary of named field values. */
  valueObject?: { [propertyName: string]: DocumentField };
  /** Currency value. */
  valueCurrency?: CurrencyValue;
  /** Address value. */
  valueAddress?: AddressValue;
  /** Field content. */
  content?: string;
  /** Bounding regions covering the field. */
  boundingRegions?: BoundingRegion[];
  /** Location of the field in the reading order concatenated content. */
  spans?: DocumentSpan[];
  /** Confidence of correctly extracting the field. */
  confidence?: number;
}

/** Currency field value. */
export interface CurrencyValue {
  /** Currency amount. */
  amount: number;
  /** Currency symbol label, if any. */
  currencySymbol?: string;
}

/** Address field value. */
export interface AddressValue {
  /** House or building number. */
  houseNumber?: string;
  /** Post office box number. */
  poBox?: string;
  /** Street name. */
  road?: string;
  /** Name of city, town, village, etc. */
  city?: string;
  /** First-level administrative division. */
  state?: string;
  /** Postal code used for mail sorting. */
  postalCode?: string;
  /** Country/region. */
  countryRegion?: string;
  /** Street-level address, excluding city, state, countryRegion, and postalCode. */
  streetAddress?: string;
}

/** Request body to build a new custom document model. */
export interface BuildDocumentModelRequest {
  /** Unique document model name. */
  modelId: string;
  /** Document model description. */
  description?: string;
  /** Custom document model build mode. */
  buildMode: DocumentBuildMode;
  /** Azure Blob Storage location containing the training data. */
  azureBlobSource?: AzureBlobContentSource;
  /** List of key-value tag attributes associated with the document model. */
  tags?: { [propertyName: string]: string };
}

/** Azure Blob Storage content. */
export interface AzureBlobContentSource {
  /** Azure Blob Storage container URL. */
  containerUrl: string;
  /** Blob name prefix. */
  prefix?: string;
}

/** Request body to create a composed document model from component document models. */
export interface ComposeDocumentModelRequest {
  /** Unique document model name. */
  modelId: string;
  /** Document model description. */
  description?: string;
  /** List of component document models to compose. */
  componentModels: ComponentDocumentModelDetails[];
  /** List of key-value tag attributes associated with the document model. */
  tags?: { [propertyName: string]: string };
}

/** A component of a composed document model. */
export interface ComponentDocumentModelDetails {
  /** Unique document model name. */
  modelId: string;
}

/** Request body to authorize document model copy. */
export interface AuthorizeCopyRequest {
  /** Unique document model name. */
  modelId: string;
  /** Document model description. */
  description?: string;
  /** List of key-value tag attributes associated with the document model. */
  tags?: { [propertyName: string]: string };
}

/** Authorization to copy a document model to the specified target resource and modelId. */
export interface CopyAuthorization {
  /** ID of the target Azure resource where the document model should be copied to. */
  targetResourceId: string;
  /** Location of the target Azure resource where the document model should be copied to. */
  targetResourceRegion: string;
  /** Identifier of the target document model. */
  targetModelId: string;
  /** URL of the copied document model in the target account. */
  targetModelLocation: string;
  /** Token used to authorize the request. */
  accessToken: string;
  /** Date/time when the access token expires. */
  expirationDateTime: Date;
}

/** List Operations response object. */
export interface GetOperationsResponse {
  /** List of operations. */
  value: OperationSummary[];
  /** Link to the next page of operations. */
  nextLink?: string;
}

/** Operation info. */
export interface OperationSummary {
  /** Operation ID */
  operationId: string;
  /** Operation status. */
  status: OperationStatus;
  /** Operation progress (0-100). */
  percentCompleted?: number;
  /** Date and time (UTC) when the operation was created. */
  createdDateTime: Date;
  /** Date and time (UTC) when the status was last updated. */
  lastUpdatedDateTime: Date;
  /** Type of operation. */
  kind: OperationKind;
  /** URL of the resource targeted by this operation. */
  resourceLocation: string;
  /** API version used to create this operation. */
  apiVersion?: string;
  /** List of key-value tag attributes associated with the document model. */
  tags?: { [propertyName: string]: string };
}

/** List Document models response object. */
export interface GetDocumentModelsResponse {
  /** List of document models. */
  value: DocumentModelSummary[];
  /** Link to the next page of document models. */
  nextLink?: string;
}

/** Document model summary. */
export interface DocumentModelSummary {
  /** Unique document model name. */
  modelId: string;
  /** Document model description. */
  description?: string;
  /** Date and time (UTC) when the document model was created. */
  createdDateTime: Date;
  /** API version used to create this document model. */
  apiVersion?: string;
  /** List of key-value tag attributes associated with the document model. */
  tags?: { [propertyName: string]: string };
}

/** Document type info. */
export interface DocumentTypeDetails {
  /** Document model description. */
  description?: string;
  /** Custom document model build mode. */
  buildMode?: DocumentBuildMode;
  /** Description of the document semantic schema using a JSON Schema style syntax. */
  fieldSchema: { [propertyName: string]: DocumentFieldSchema };
  /** Estimated confidence for each field. */
  fieldConfidence?: { [propertyName: string]: number };
}

/** Description of the field semantic schema using a JSON Schema style syntax. */
export interface DocumentFieldSchema {
  /** Semantic data type of the field value. */
  type: DocumentFieldType;
  /** Field description. */
  description?: string;
  /** Example field content. */
  example?: string;
  /** Field type schema of each array element. */
  items?: DocumentFieldSchema;
  /** Named sub-fields of the object field. */
  properties?: { [propertyName: string]: DocumentFieldSchema };
}

/** General information regarding the current resource. */
export interface ResourceDetails {
  /** Details regarding custom document models. */
  customDocumentModels: CustomDocumentModelsDetails;
}

/** Details regarding custom document models. */
export interface CustomDocumentModelsDetails {
  /** Number of custom document models in the current resource. */
  count: number;
  /** Maximum number of custom document models supported in the current resource. */
  limit: number;
}

/** Get Operation response object. */
export interface OperationDetails extends OperationSummary {
  /** Encountered error. */
  error?: ErrorModel;
  /** Operation result upon success. */
  result?: Record<string, unknown>;
}

/** Document model info. */
export interface DocumentModelDetails extends DocumentModelSummary {
  /** Supported document types. */
  docTypes?: { [propertyName: string]: DocumentTypeDetails };
}

/** Defines headers for GeneratedClient_analyzeDocument operation. */
export interface GeneratedClientAnalyzeDocumentHeaders {
  /** URL used to track the progress and obtain the result of the analyze operation. */
  operationLocation?: string;
}

/** Defines headers for GeneratedClient_buildDocumentModel operation. */
export interface GeneratedClientBuildDocumentModelHeaders {
  /** Operation result URL. */
  operationLocation?: string;
}

/** Defines headers for GeneratedClient_composeDocumentModel operation. */
export interface GeneratedClientComposeDocumentModelHeaders {
  /** Operation result URL. */
  operationLocation?: string;
}

/** Defines headers for GeneratedClient_copyDocumentModelTo operation. */
export interface GeneratedClientCopyDocumentModelToHeaders {
  /** Operation result URL. */
  operationLocation?: string;
}

/** Known values of {@link StringIndexType} that the service accepts. */
export enum KnownStringIndexType {
  /** TextElements */
  TextElements = "textElements",
  /** UnicodeCodePoint */
  UnicodeCodePoint = "unicodeCodePoint",
  /** Utf16CodeUnit */
  Utf16CodeUnit = "utf16CodeUnit"
}

/**
 * Defines values for StringIndexType. \
 * {@link KnownStringIndexType} can be used interchangeably with StringIndexType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **textElements** \
 * **unicodeCodePoint** \
 * **utf16CodeUnit**
 */
export type StringIndexType = string;

/** Known values of {@link ApiVersion} that the service accepts. */
export enum KnownApiVersion {
  /** TwoThousandTwentyTwo0630Preview */
  TwoThousandTwentyTwo0630Preview = "2022-06-30-preview"
}

/**
 * Defines values for ApiVersion. \
 * {@link KnownApiVersion} can be used interchangeably with ApiVersion,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **2022-06-30-preview**
 */
export type ApiVersion = string;

/** Known values of {@link DocumentPageKind} that the service accepts. */
export enum KnownDocumentPageKind {
  /** Document */
  Document = "document",
  /** Sheet */
  Sheet = "sheet",
  /** Slide */
  Slide = "slide",
  /** Image */
  Image = "image"
}

/**
 * Defines values for DocumentPageKind. \
 * {@link KnownDocumentPageKind} can be used interchangeably with DocumentPageKind,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **document** \
 * **sheet** \
 * **slide** \
 * **image**
 */
export type DocumentPageKind = string;

/** Known values of {@link LengthUnit} that the service accepts. */
export enum KnownLengthUnit {
  /** Pixel */
  Pixel = "pixel",
  /** Inch */
  Inch = "inch"
}

/**
 * Defines values for LengthUnit. \
 * {@link KnownLengthUnit} can be used interchangeably with LengthUnit,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **pixel** \
 * **inch**
 */
export type LengthUnit = string;

/** Known values of {@link SelectionMarkState} that the service accepts. */
export enum KnownSelectionMarkState {
  /** Selected */
  Selected = "selected",
  /** Unselected */
  Unselected = "unselected"
}

/**
 * Defines values for SelectionMarkState. \
 * {@link KnownSelectionMarkState} can be used interchangeably with SelectionMarkState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **selected** \
 * **unselected**
 */
export type SelectionMarkState = string;

/** Known values of {@link ParagraphRole} that the service accepts. */
export enum KnownParagraphRole {
  /** PageHeader */
  PageHeader = "pageHeader",
  /** PageFooter */
  PageFooter = "pageFooter",
  /** PageNumber */
  PageNumber = "pageNumber",
  /** Title */
  Title = "title",
  /** SectionHeading */
  SectionHeading = "sectionHeading",
  /** Footnote */
  Footnote = "footnote"
}

/**
 * Defines values for ParagraphRole. \
 * {@link KnownParagraphRole} can be used interchangeably with ParagraphRole,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **pageHeader** \
 * **pageFooter** \
 * **pageNumber** \
 * **title** \
 * **sectionHeading** \
 * **footnote**
 */
export type ParagraphRole = string;

/** Known values of {@link DocumentTableCellKind} that the service accepts. */
export enum KnownDocumentTableCellKind {
  /** Content */
  Content = "content",
  /** RowHeader */
  RowHeader = "rowHeader",
  /** ColumnHeader */
  ColumnHeader = "columnHeader",
  /** StubHead */
  StubHead = "stubHead",
  /** Description */
  Description = "description"
}

/**
 * Defines values for DocumentTableCellKind. \
 * {@link KnownDocumentTableCellKind} can be used interchangeably with DocumentTableCellKind,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **content** \
 * **rowHeader** \
 * **columnHeader** \
 * **stubHead** \
 * **description**
 */
export type DocumentTableCellKind = string;

/** Known values of {@link DocumentFieldType} that the service accepts. */
export enum KnownDocumentFieldType {
  /** String */
  String = "string",
  /** Date */
  Date = "date",
  /** Time */
  Time = "time",
  /** PhoneNumber */
  PhoneNumber = "phoneNumber",
  /** Number */
  Number = "number",
  /** Integer */
  Integer = "integer",
  /** SelectionMark */
  SelectionMark = "selectionMark",
  /** CountryRegion */
  CountryRegion = "countryRegion",
  /** Signature */
  Signature = "signature",
  /** Array */
  Array = "array",
  /** Object */
  Object = "object",
  /** Currency */
  Currency = "currency",
  /** Address */
  Address = "address"
}

/**
 * Defines values for DocumentFieldType. \
 * {@link KnownDocumentFieldType} can be used interchangeably with DocumentFieldType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **string** \
 * **date** \
 * **time** \
 * **phoneNumber** \
 * **number** \
 * **integer** \
 * **selectionMark** \
 * **countryRegion** \
 * **signature** \
 * **array** \
 * **object** \
 * **currency** \
 * **address**
 */
export type DocumentFieldType = string;

/** Known values of {@link DocumentSignatureType} that the service accepts. */
export enum KnownDocumentSignatureType {
  /** Signed */
  Signed = "signed",
  /** Unsigned */
  Unsigned = "unsigned"
}

/**
 * Defines values for DocumentSignatureType. \
 * {@link KnownDocumentSignatureType} can be used interchangeably with DocumentSignatureType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **signed** \
 * **unsigned**
 */
export type DocumentSignatureType = string;

/** Known values of {@link DocumentBuildMode} that the service accepts. */
export enum KnownDocumentBuildMode {
  /** Template */
  Template = "template",
  /** Neural */
  Neural = "neural"
}

/**
 * Defines values for DocumentBuildMode. \
 * {@link KnownDocumentBuildMode} can be used interchangeably with DocumentBuildMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **template** \
 * **neural**
 */
export type DocumentBuildMode = string;

/** Known values of {@link OperationKind} that the service accepts. */
export enum KnownOperationKind {
  /** DocumentModelBuild */
  DocumentModelBuild = "documentModelBuild",
  /** DocumentModelCompose */
  DocumentModelCompose = "documentModelCompose",
  /** DocumentModelCopyTo */
  DocumentModelCopyTo = "documentModelCopyTo"
}

/**
 * Defines values for OperationKind. \
 * {@link KnownOperationKind} can be used interchangeably with OperationKind,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **documentModelBuild** \
 * **documentModelCompose** \
 * **documentModelCopyTo**
 */
export type OperationKind = string;
/** Defines values for ContentType. */
export type ContentType =
  | "application/octet-stream"
  | "application/pdf"
  | "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  | "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  | "image/bmp"
  | "image/heif"
  | "image/jpeg"
  | "image/png"
  | "image/tiff";
/** Defines values for AnalyzeResultOperationStatus. */
export type AnalyzeResultOperationStatus =
  | "notStarted"
  | "running"
  | "failed"
  | "succeeded";
/** Defines values for OperationStatus. */
export type OperationStatus =
  | "notStarted"
  | "running"
  | "failed"
  | "succeeded"
  | "canceled";

/** Optional parameters. */
export interface AnalyzeDocument$binaryOptionalParams
  extends coreClient.OperationOptions {
  /** Analyze request parameters. */
  analyzeRequest?: coreRestPipeline.RequestBodyType;
  /** List of 1-based page numbers to analyze.  Ex. "1-3,5,7-9" */
  pages?: string;
  /** Locale hint for text recognition and document analysis.  Value may contain only the language code (ex. "en", "fr") or BCP 47 language tag (ex. "en-US"). */
  locale?: string;
}

/** Optional parameters. */
export interface AnalyzeDocument$textOptionalParams
  extends coreClient.OperationOptions {
  /** Analyze request parameters. */
  analyzeRequest?: string;
  /** List of 1-based page numbers to analyze.  Ex. "1-3,5,7-9" */
  pages?: string;
  /** Locale hint for text recognition and document analysis.  Value may contain only the language code (ex. "en", "fr") or BCP 47 language tag (ex. "en-US"). */
  locale?: string;
}

/** Optional parameters. */
export interface AnalyzeDocument$jsonOptionalParams
  extends coreClient.OperationOptions {
  /** Analyze request parameters. */
  analyzeRequest?: AnalyzeDocumentRequest;
  /** List of 1-based page numbers to analyze.  Ex. "1-3,5,7-9" */
  pages?: string;
  /** Locale hint for text recognition and document analysis.  Value may contain only the language code (ex. "en", "fr") or BCP 47 language tag (ex. "en-US"). */
  locale?: string;
}

/** Contains response data for the analyzeDocument operation. */
export type AnalyzeDocumentResponse = GeneratedClientAnalyzeDocumentHeaders;

/** Optional parameters. */
export interface GetAnalyzeDocumentResultOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAnalyzeDocumentResult operation. */
export type GetAnalyzeDocumentResultResponse = AnalyzeResultOperation;

/** Optional parameters. */
export interface BuildDocumentModelOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the buildDocumentModel operation. */
export type BuildDocumentModelResponse = GeneratedClientBuildDocumentModelHeaders;

/** Optional parameters. */
export interface ComposeDocumentModelOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the composeDocumentModel operation. */
export type ComposeDocumentModelResponse = GeneratedClientComposeDocumentModelHeaders;

/** Optional parameters. */
export interface AuthorizeCopyDocumentModelOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the authorizeCopyDocumentModel operation. */
export type AuthorizeCopyDocumentModelResponse = CopyAuthorization;

/** Optional parameters. */
export interface CopyDocumentModelToOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the copyDocumentModelTo operation. */
export type CopyDocumentModelToResponse = GeneratedClientCopyDocumentModelToHeaders;

/** Optional parameters. */
export interface GetOperationsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getOperations operation. */
export type GetOperationsOperationResponse = GetOperationsResponse;

/** Optional parameters. */
export interface GetOperationOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getOperation operation. */
export type GetOperationResponse = OperationDetails;

/** Optional parameters. */
export interface GetDocumentModelsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDocumentModels operation. */
export type GetDocumentModelsOperationResponse = GetDocumentModelsResponse;

/** Optional parameters. */
export interface GetDocumentModelOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDocumentModel operation. */
export type GetDocumentModelResponse = DocumentModelDetails;

/** Optional parameters. */
export interface DeleteDocumentModelOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface GetResourceDetailsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getResourceDetails operation. */
export type GetResourceDetailsResponse = ResourceDetails;

/** Optional parameters. */
export interface GetOperationsNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getOperationsNext operation. */
export type GetOperationsNextResponse = GetOperationsResponse;

/** Optional parameters. */
export interface GetDocumentModelsNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDocumentModelsNext operation. */
export type GetDocumentModelsNextResponse = GetDocumentModelsResponse;

/** Optional parameters. */
export interface GeneratedClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Method used to compute string offset and length. */
  stringIndexType?: StringIndexType;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
