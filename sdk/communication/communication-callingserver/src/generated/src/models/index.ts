/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

/** The audio routing group result. */
export interface AudioRoutingGroupResult {
  /** The audio routing mode. */
  audioRoutingMode?: AudioRoutingMode;
  /** The target identities that would be receivers in the audio routing group. */
  targets?: CommunicationIdentifierModel[];
}

/** Identifies a participant in Azure Communication services. A participant is, for example, a phone number or an Azure communication user. This model must be interpreted as a union: Apart from rawId, at most one further property may be set. */
export interface CommunicationIdentifierModel {
  /** Raw Id of the identifier. Optional in requests, required in responses. */
  rawId?: string;
  /** The communication user. */
  communicationUser?: CommunicationUserIdentifierModel;
  /** The phone number. */
  phoneNumber?: PhoneNumberIdentifierModel;
  /** The Microsoft Teams user. */
  microsoftTeamsUser?: MicrosoftTeamsUserIdentifierModel;
}

/** A user that got created with an Azure Communication Services resource. */
export interface CommunicationUserIdentifierModel {
  /** The Id of the communication user. */
  id: string;
}

/** A phone number. */
export interface PhoneNumberIdentifierModel {
  /** The phone number in E.164 format. */
  value: string;
}

/** A Microsoft Teams user. */
export interface MicrosoftTeamsUserIdentifierModel {
  /** The Id of the Microsoft Teams user. If not anonymous, this is the AAD object Id of the user. */
  userId: string;
  /** True if the Microsoft Teams user is anonymous. By default false if missing. */
  isAnonymous?: boolean;
  /** The cloud that the Microsoft Teams user belongs to. By default 'public' if missing. */
  cloud?: CommunicationCloudEnvironmentModel;
}

/** The Communication Services error. */
export interface CommunicationErrorResponse {
  /** The Communication Services error. */
  error: CommunicationError;
}

/** The Communication Services error. */
export interface CommunicationError {
  /** The error code. */
  code: string;
  /** The error message. */
  message: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * Further details about specific errors that led to this error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: CommunicationError[];
  /**
   * The inner error if any.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly innerError?: CommunicationError;
}

/** The update audio routing group request. */
export interface UpdateAudioRoutingGroupRequest {
  /** The target identities that would be receivers in the audio routing group. */
  targets: CommunicationIdentifierModel[];
}

/** The request payload for create call. */
export interface CreateCallRequest {
  /** The alternate identity of the source of the call if dialing out to a pstn number */
  alternateCallerId?: PhoneNumberIdentifierModel;
  /** The targets of the call. */
  targets: CommunicationIdentifierModel[];
  /** The source of the call. */
  source: CommunicationIdentifierModel;
  /** The subject. */
  subject?: string;
  /** The callback URI. */
  callbackUri: string;
  /** The requested modalities. */
  requestedMediaTypes?: CallMediaType[];
  /** The requested call events to subscribe to. */
  requestedCallEvents?: CallingEventSubscriptionType[];
}

/** The response payload of the create call operation. */
export interface CreateCallResult {
  /** The call connection id. */
  callConnectionId?: string;
}

export interface CallConnectionProperties {
  /** The call connection id. */
  callConnectionId?: string;
  /** The source of the call. */
  source?: CommunicationIdentifierModel;
  /** The alternate identity of the source of the call if dialing out to a pstn number */
  alternateCallerId?: PhoneNumberIdentifierModel;
  /** The targets of the call. */
  targets?: CommunicationIdentifierModel[];
  /** The state of the call connection. */
  callConnectionState?: CallConnectionState;
  /** The subject. */
  subject?: string;
  /** The callback URI. */
  callbackUri?: string;
  /** The requested modalities. */
  requestedMediaTypes?: CallMediaType[];
  /** The requested call events to subscribe to. */
  requestedCallEvents?: CallingEventSubscriptionType[];
  /** The call locator. */
  callLocator?: CallLocatorModel;
}

/** The locator used for joining or taking action on a call. */
export interface CallLocatorModel {
  /** The group call id */
  groupCallId?: string;
  /** The server call id. */
  serverCallId?: string;
  /** The call locator kind. */
  kind?: CallLocatorKindModel;
}

/** The request payload for playing audio. */
export interface PlayAudioRequest {
  /**
   * The media resource uri of the play audio request.
   * Currently only Wave file (.wav) format audio prompts are supported.
   * More specifically, the audio content in the wave file must be mono (single-channel),
   * 16-bit samples with a 16,000 (16KHz) sampling rate.
   */
  audioFileUri: string;
  /** The flag indicating whether audio file needs to be played in loop or not. */
  loop: boolean;
  /** The value to identify context of the operation. */
  operationContext?: string;
  /** An id for the media in the AudioFileUri, using which we cache the media resource. */
  audioFileId?: string;
  /** The callback Uri to receive PlayAudio status notifications. */
  callbackUri?: string;
}

/** The response payload for play audio operation. */
export interface PlayAudioResult {
  /** The operation id. */
  operationId?: string;
  /** The status of the operation */
  status: CallingOperationStatus;
  /** The operation context provided by client. */
  operationContext?: string;
  /** The result info for the operation. */
  resultInfo?: CallingOperationResultDetails;
}

/** The result details of calling operation. */
export interface CallingOperationResultDetails {
  /** The result code associated with the operation. */
  code: number;
  /** The subcode that further classifies the result. */
  subcode: number;
  /** The message is a detail explanation of subcode. */
  message?: string;
}

/** The transfer call request. */
export interface TransferCallRequest {
  /** The identity of the target where call should be transfer to. */
  targetParticipant?: CommunicationIdentifierModel;
  /** The call connection id to replace the current call with. This parameter should be used for consultative transfer. */
  targetCallConnectionId?: string;
  /** The alternate identity of the transferor if transferring to a pstn number. */
  alternateCallerId?: PhoneNumberIdentifierModel;
  /** The user to user information. */
  userToUserInformation?: string;
  /** The operation context. */
  operationContext?: string;
}

/** The response payload for transfer call operation. */
export interface TransferCallResult {
  /** The operation id. */
  operationId?: string;
  /** The status of the operation */
  status: CallingOperationStatus;
  /** The operation context provided by client. */
  operationContext?: string;
  /** The result info for the operation. */
  resultInfo?: CallingOperationResultDetails;
}

/** The audio routing group request. */
export interface AudioRoutingGroupRequest {
  /** The audio routing mode. */
  audioRoutingMode: AudioRoutingMode;
  /** The target identities that would be receivers in the audio routing group. */
  targets: CommunicationIdentifierModel[];
}

/** The response payload of the create audio routing group operation. */
export interface CreateAudioRoutingGroupResult {
  /** The audio routing group id. */
  audioRoutingGroupId?: string;
}

/** The request payload for get all participants. */
export interface GetAllParticipantsWithCallLocatorRequest {
  /** The call locator. */
  callLocator: CallLocatorModel;
}

/** A participant in a call. */
export interface CallParticipant {
  /** Communication identifier of the participant */
  identifier: CommunicationIdentifierModel;
  /** Participant id */
  participantId?: string;
  /** Is participant muted */
  isMuted: boolean;
}

/** The add participant request with call locator. */
export interface AddParticipantWithCallLocatorRequest {
  /** The call locator. */
  callLocator: CallLocatorModel;
  /** The alternate identity of source participant. */
  alternateCallerId?: PhoneNumberIdentifierModel;
  /** The participant to be added to the call. */
  participant: CommunicationIdentifierModel;
  /** The operation context. */
  operationContext?: string;
  /** The callback URI. */
  callbackUri?: string;
}

/** The add participant result */
export interface AddParticipantResult {
  /** The id of the added participant. */
  participantId?: string;
}

/** The remove participant by identifier request. */
export interface RemoveParticipantWithCallLocatorRequest {
  /** The call locator. */
  callLocator: CallLocatorModel;
  /** The identifier of the participant to be removed from the call. */
  identifier: CommunicationIdentifierModel;
}

/** The get participant by identifier request using call locator. */
export interface GetParticipantWithCallLocatorRequest {
  /** The call locator. */
  callLocator: CallLocatorModel;
  /** The identifier of the participant. */
  identifier: CommunicationIdentifierModel;
}

/** The request payload for playing audio with call locator to participant. */
export interface PlayAudioToParticipantWithCallLocatorRequest {
  /** The call locator. */
  callLocator: CallLocatorModel;
  /** The identifier of the participant to play audio to. */
  identifier: CommunicationIdentifierModel;
  /**
   * The media resource uri of the play audio request.
   * Currently only Wave file (.wav) format audio prompts are supported.
   * More specifically, the audio content in the wave file must be mono (single-channel),
   * 16-bit samples with a 16,000 (16KHz) sampling rate.
   */
  audioFileUri: string;
  /** The flag indicating whether audio file needs to be played in loop or not. */
  loop: boolean;
  /** The value to identify context of the operation. */
  operationContext?: string;
  /** An id for the media in the AudioFileUri, using which we cache the media resource. */
  audioFileId?: string;
  /** The callback Uri to receive PlayAudio status notifications. */
  callbackUri?: string;
}

/** The request payload for stopping a media operation for a participant with call locator. */
export interface CancelParticipantMediaOperationWithCallLocatorRequest {
  /** The call locator. */
  callLocator: CallLocatorModel;
  /** The identifier of the participant. */
  identifier: CommunicationIdentifierModel;
  /** The operationId of the media operation to cancel. */
  mediaOperationId: string;
}

/** The add participant request. */
export interface AddParticipantRequest {
  /** The alternate identity of source participant. */
  alternateCallerId?: PhoneNumberIdentifierModel;
  /** The participant to be added to the call. */
  participant: CommunicationIdentifierModel;
  /** The operation context. */
  operationContext?: string;
  /** The callback URI. */
  callbackUri?: string;
}

/** The remove participant by identifier request. */
export interface RemoveParticipantRequest {
  /** The identifier of the participant to be removed from the call. */
  identifier: CommunicationIdentifierModel;
}

/** The get participant by identifier request. */
export interface GetParticipantRequest {
  /** The identifier of the participant. */
  identifier: CommunicationIdentifierModel;
}

/** The request payload for playing audio to participant. */
export interface PlayAudioToParticipantRequest {
  /** The identifier of the participant to play audio to. */
  identifier: CommunicationIdentifierModel;
  /**
   * The media resource uri of the play audio request.
   * Currently only Wave file (.wav) format audio prompts are supported.
   * More specifically, the audio content in the wave file must be mono (single-channel),
   * 16-bit samples with a 16,000 (16KHz) sampling rate.
   */
  audioFileUri: string;
  /** The flag indicating whether audio file needs to be played in loop or not. */
  loop: boolean;
  /** The value to identify context of the operation. */
  operationContext?: string;
  /** An id for the media in the AudioFileUri, using which we cache the media resource. */
  audioFileId?: string;
  /** The callback Uri to receive PlayAudio status notifications. */
  callbackUri?: string;
}

/** The request payload for stopping a media operation for a participant. */
export interface CancelParticipantMediaOperationRequest {
  /** The identifier of the participant. */
  identifier: CommunicationIdentifierModel;
  /** The operationId of the media operation to cancel. */
  mediaOperationId: string;
}

/** The request payload for muting any participant */
export interface MuteParticipantRequest {
  /** The identifier of the participant to be muted in the call. */
  identifier: CommunicationIdentifierModel;
  /** The operation context. */
  operationContext?: string;
}

/** The request payload for unmuting any participant */
export interface UnmuteParticipantRequest {
  /** The identifier of the participant to be unmuted in the call. */
  identifier: CommunicationIdentifierModel;
  /** The operation context. */
  operationContext?: string;
}

/** The request payload for holding meeting audio for a participant. */
export interface HoldMeetingAudioRequest {
  /** The identifier of the participant. */
  identifier: CommunicationIdentifierModel;
}

/** The request payload for resuming meeting audio for a participant. */
export interface ResumeMeetingAudioRequest {
  /** The identifier of the participant. */
  identifier: CommunicationIdentifierModel;
}

/** The request payload start for call recording operation with call locator. */
export interface StartCallRecordingWithCallLocatorRequest {
  /** The call locator. */
  callLocator: CallLocatorModel;
  /** The uri to send notifications to. */
  recordingStateCallbackUri?: string;
  /** The content type of call recording. */
  recordingContentType?: RecordingContentType;
  /** The channel type of call recording. */
  recordingChannelType?: RecordingChannelType;
  /** The format type of call recording. */
  recordingFormatType?: RecordingFormatType;
}

/** The response payload of start call recording operation. */
export interface StartCallRecordingResult {
  /** The recording id of the started recording */
  recordingId?: string;
}

/** The response payload of get call recording properties operation. */
export interface CallRecordingProperties {
  /** The state of the recording */
  recordingState: CallRecordingState;
}

/** The request payload for join call. */
export interface JoinCallRequest {
  /** The call locator. */
  callLocator: CallLocatorModel;
  /** The source of the call. */
  source: CommunicationIdentifierModel;
  /** The subject. */
  subject?: string;
  /** The callback URI. */
  callbackUri: string;
  /** The requested modalities. */
  requestedMediaTypes?: CallMediaType[];
  /** The requested call events to subscribe to. */
  requestedCallEvents?: CallingEventSubscriptionType[];
}

/** The response payload of the join call operation. */
export interface JoinCallResult {
  /** The call connection id. */
  callConnectionId?: string;
}

/** The request payload for playing audio with call locator. */
export interface PlayAudioWithCallLocatorRequest {
  /** The call locator. */
  callLocator: CallLocatorModel;
  /**
   * The media resource uri of the play audio request.
   * Currently only Wave file (.wav) format audio prompts are supported.
   * More specifically, the audio content in the wave file must be mono (single-channel),
   * 16-bit samples with a 16,000 (16KHz) sampling rate.
   */
  audioFileUri: string;
  /** The flag indicating whether audio file needs to be played in loop or not. */
  loop: boolean;
  /** The value to identify context of the operation. */
  operationContext?: string;
  /** An id for the media in the AudioFileUri, using which we cache the media resource. */
  audioFileId?: string;
  /** The callback Uri to receive PlayAudio status notifications. */
  callbackUri?: string;
}

/** The request payload for stopping a media operation for a participant with call locator. */
export interface CancelMediaOperationWithCallLocatorRequest {
  /** The call locator. */
  callLocator: CallLocatorModel;
  /** The operationId of the media operation to cancel */
  mediaOperationId: string;
}

/** The request payload for answering the call. */
export interface AnswerCallRequest {
  /** The context associated with the call. */
  incomingCallContext: string;
  /** The callback uri. */
  callbackUri?: string;
  /** The requested modalities. */
  requestedMediaTypes?: CallMediaType[];
  /** The requested call events to subscribe to. */
  requestedCallEvents?: CallingEventSubscriptionType[];
}

/** The response payload of the answer call operation. */
export interface AnswerCallResult {
  /** The call connection id. */
  callConnectionId?: string;
}

/** The request payload for rejecting the call. */
export interface RejectCallRequest {
  /** The context associated with the call. */
  incomingCallContext: string;
  /** The rejection reason. */
  callRejectReason?: CallRejectReason;
  /** The callback uri. */
  callbackUri?: string;
}

/** The request payload for redirecting the call. */
export interface RedirectCallRequest {
  /** The context associated with the call. */
  incomingCallContext: string;
  /** The target identity to redirect the call to. */
  targets: CommunicationIdentifierModel[];
  /** The callback uri. */
  callbackUri?: string;
  /** The timeout for the redirect in seconds. */
  timeoutInSeconds?: number;
}

/** The call connection state changed event. */
export interface CallConnectionStateChangedEvent {
  /** The server call locator. */
  callLocator?: CallLocatorModel;
  /** The call connection id. */
  callConnectionId?: string;
  /** The state of the call connection. */
  callConnectionState: CallConnectionState;
}

/** The call recording state change event. */
export interface CallRecordingStateChangeEvent {
  /** The call recording id */
  recordingId?: string;
  /** The state of the recording */
  callRecordingState: CallRecordingState;
  /** The time of the recording started */
  startDateTime: Date;
  /** The server call locator. */
  callLocator?: CallLocatorModel;
}

export interface AddParticipantResultEvent {
  /** The result details. */
  resultInfo?: CallingOperationResultDetails;
  /** The operation context. */
  operationContext?: string;
  /** The status of the operation */
  status: CallingOperationStatus;
}

/** The participant update event */
export interface ParticipantsUpdatedEvent {
  /** The call connection id. */
  callConnectionId?: string;
  /** The list of participants. */
  participants?: CallParticipant[];
}

/** The play audio result event. */
export interface PlayAudioResultEvent {
  /** The result details. */
  resultInfo?: CallingOperationResultDetails;
  /** The operation context. */
  operationContext?: string;
  /** The status of the operation */
  status: CallingOperationStatus;
}

/** The subscribe to tone event */
export interface ToneReceivedEvent {
  /** The tone info. */
  toneInfo: ToneInfo;
  /** The call connection id. */
  callConnectionId?: string;
}

/** The information about the tone. */
export interface ToneInfo {
  /** The sequence id which can be used to determine if the same tone was played multiple times or if any tones were missed. */
  sequenceId: number;
  /** The tone value. */
  tone: ToneValue;
}

/** The transfer call result event. */
export interface TransferCallResultEvent {
  /** The result details. */
  resultInfo?: CallingOperationResultDetails;
  /** The operation context. */
  operationContext?: string;
  /** The status of the operation */
  status: CallingOperationStatus;
}

/** Known values of {@link AudioRoutingMode} that the service accepts. */
export const enum KnownAudioRoutingMode {
  OneToOne = "oneToOne",
  Multicast = "multicast"
}

/**
 * Defines values for AudioRoutingMode. \
 * {@link KnownAudioRoutingMode} can be used interchangeably with AudioRoutingMode,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **oneToOne** \
 * **multicast**
 */
export type AudioRoutingMode = string;

/** Known values of {@link CommunicationCloudEnvironmentModel} that the service accepts. */
export const enum KnownCommunicationCloudEnvironmentModel {
  Public = "public",
  Dod = "dod",
  Gcch = "gcch"
}

/**
 * Defines values for CommunicationCloudEnvironmentModel. \
 * {@link KnownCommunicationCloudEnvironmentModel} can be used interchangeably with CommunicationCloudEnvironmentModel,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **public** \
 * **dod** \
 * **gcch**
 */
export type CommunicationCloudEnvironmentModel = string;

/** Known values of {@link CallMediaType} that the service accepts. */
export const enum KnownCallMediaType {
  Audio = "audio",
  Video = "video"
}

/**
 * Defines values for CallMediaType. \
 * {@link KnownCallMediaType} can be used interchangeably with CallMediaType,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **audio** \
 * **video**
 */
export type CallMediaType = string;

/** Known values of {@link CallingEventSubscriptionType} that the service accepts. */
export const enum KnownCallingEventSubscriptionType {
  ParticipantsUpdated = "participantsUpdated",
  ToneReceived = "toneReceived"
}

/**
 * Defines values for CallingEventSubscriptionType. \
 * {@link KnownCallingEventSubscriptionType} can be used interchangeably with CallingEventSubscriptionType,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **participantsUpdated** \
 * **toneReceived**
 */
export type CallingEventSubscriptionType = string;

/** Known values of {@link CallConnectionState} that the service accepts. */
export const enum KnownCallConnectionState {
  Connecting = "connecting",
  Connected = "connected",
  Transferring = "transferring",
  TransferAccepted = "transferAccepted",
  Disconnecting = "disconnecting",
  Disconnected = "disconnected"
}

/**
 * Defines values for CallConnectionState. \
 * {@link KnownCallConnectionState} can be used interchangeably with CallConnectionState,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **connecting** \
 * **connected** \
 * **transferring** \
 * **transferAccepted** \
 * **disconnecting** \
 * **disconnected**
 */
export type CallConnectionState = string;

/** Known values of {@link CallLocatorKindModel} that the service accepts. */
export const enum KnownCallLocatorKindModel {
  GroupCallLocator = "groupCallLocator",
  ServerCallLocator = "serverCallLocator"
}

/**
 * Defines values for CallLocatorKindModel. \
 * {@link KnownCallLocatorKindModel} can be used interchangeably with CallLocatorKindModel,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **groupCallLocator** \
 * **serverCallLocator**
 */
export type CallLocatorKindModel = string;

/** Known values of {@link CallingOperationStatus} that the service accepts. */
export const enum KnownCallingOperationStatus {
  NotStarted = "notStarted",
  Running = "running",
  Completed = "completed",
  Failed = "failed"
}

/**
 * Defines values for CallingOperationStatus. \
 * {@link KnownCallingOperationStatus} can be used interchangeably with CallingOperationStatus,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **notStarted** \
 * **running** \
 * **completed** \
 * **failed**
 */
export type CallingOperationStatus = string;

/** Known values of {@link RecordingContentType} that the service accepts. */
export const enum KnownRecordingContentType {
  Audio = "audio",
  AudioVideo = "audioVideo"
}

/**
 * Defines values for RecordingContentType. \
 * {@link KnownRecordingContentType} can be used interchangeably with RecordingContentType,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **audio** \
 * **audioVideo**
 */
export type RecordingContentType = string;

/** Known values of {@link RecordingChannelType} that the service accepts. */
export const enum KnownRecordingChannelType {
  Mixed = "mixed",
  Unmixed = "unmixed"
}

/**
 * Defines values for RecordingChannelType. \
 * {@link KnownRecordingChannelType} can be used interchangeably with RecordingChannelType,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **mixed** \
 * **unmixed**
 */
export type RecordingChannelType = string;

/** Known values of {@link RecordingFormatType} that the service accepts. */
export const enum KnownRecordingFormatType {
  Wav = "wav",
  Mp3 = "mp3",
  Mp4 = "mp4"
}

/**
 * Defines values for RecordingFormatType. \
 * {@link KnownRecordingFormatType} can be used interchangeably with RecordingFormatType,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **wav** \
 * **mp3** \
 * **mp4**
 */
export type RecordingFormatType = string;

/** Known values of {@link CallRecordingState} that the service accepts. */
export const enum KnownCallRecordingState {
  Active = "active",
  Inactive = "inactive"
}

/**
 * Defines values for CallRecordingState. \
 * {@link KnownCallRecordingState} can be used interchangeably with CallRecordingState,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **active** \
 * **inactive**
 */
export type CallRecordingState = string;

/** Known values of {@link CallRejectReason} that the service accepts. */
export const enum KnownCallRejectReason {
  None = "none",
  Busy = "busy",
  Forbidden = "forbidden"
}

/**
 * Defines values for CallRejectReason. \
 * {@link KnownCallRejectReason} can be used interchangeably with CallRejectReason,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **none** \
 * **busy** \
 * **forbidden**
 */
export type CallRejectReason = string;

/** Known values of {@link ToneValue} that the service accepts. */
export const enum KnownToneValue {
  Tone0 = "tone0",
  Tone1 = "tone1",
  Tone2 = "tone2",
  Tone3 = "tone3",
  Tone4 = "tone4",
  Tone5 = "tone5",
  Tone6 = "tone6",
  Tone7 = "tone7",
  Tone8 = "tone8",
  Tone9 = "tone9",
  Star = "star",
  Pound = "pound",
  A = "a",
  B = "b",
  C = "c",
  D = "d",
  Flash = "flash"
}

/**
 * Defines values for ToneValue. \
 * {@link KnownToneValue} can be used interchangeably with ToneValue,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **tone0** \
 * **tone1** \
 * **tone2** \
 * **tone3** \
 * **tone4** \
 * **tone5** \
 * **tone6** \
 * **tone7** \
 * **tone8** \
 * **tone9** \
 * **star** \
 * **pound** \
 * **a** \
 * **b** \
 * **c** \
 * **d** \
 * **flash**
 */
export type ToneValue = string;

/** Contains response data for the getAudioRoutingGroups operation. */
export type CallConnectionsGetAudioRoutingGroupsResponse = AudioRoutingGroupResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: AudioRoutingGroupResult;
  };
};

/** Contains response data for the createCall operation. */
export type CallConnectionsCreateCallResponse = CreateCallResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: CreateCallResult;
  };
};

/** Contains response data for the getCall operation. */
export type CallConnectionsGetCallResponse = CallConnectionProperties & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: CallConnectionProperties;
  };
};

/** Contains response data for the playAudio operation. */
export type CallConnectionsPlayAudioResponse = PlayAudioResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: PlayAudioResult;
  };
};

/** Contains response data for the transfer operation. */
export type CallConnectionsTransferResponse = TransferCallResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: TransferCallResult;
  };
};

/** Contains response data for the createAudioRoutingGroup operation. */
export type CallConnectionsCreateAudioRoutingGroupResponse = CreateAudioRoutingGroupResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: CreateAudioRoutingGroupResult;
  };
};

/** Contains response data for the getParticipants operation. */
export type CallConnectionsGetParticipantsResponse = CallParticipant[] & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: CallParticipant[];
  };
};

/** Contains response data for the addParticipant operation. */
export type CallConnectionsAddParticipantResponse = AddParticipantResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: AddParticipantResult;
  };
};

/** Contains response data for the getParticipant operation. */
export type CallConnectionsGetParticipantResponse = CallParticipant[] & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: CallParticipant[];
  };
};

/** Contains response data for the participantPlayAudio operation. */
export type CallConnectionsParticipantPlayAudioResponse = PlayAudioResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: PlayAudioResult;
  };
};

/** Contains response data for the getParticipants operation. */
export type ServerCallsGetParticipantsResponse = CallParticipant[] & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: CallParticipant[];
  };
};

/** Contains response data for the addParticipant operation. */
export type ServerCallsAddParticipantResponse = AddParticipantResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: AddParticipantResult;
  };
};

/** Contains response data for the getParticipant operation. */
export type ServerCallsGetParticipantResponse = CallParticipant[] & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: CallParticipant[];
  };
};

/** Contains response data for the participantPlayAudio operation. */
export type ServerCallsParticipantPlayAudioResponse = PlayAudioResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: PlayAudioResult;
  };
};

/** Contains response data for the startRecording operation. */
export type ServerCallsStartRecordingResponse = StartCallRecordingResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: StartCallRecordingResult;
  };
};

/** Contains response data for the getRecordingProperties operation. */
export type ServerCallsGetRecordingPropertiesResponse = CallRecordingProperties & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: CallRecordingProperties;
  };
};

/** Contains response data for the joinCall operation. */
export type ServerCallsJoinCallResponse = JoinCallResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: JoinCallResult;
  };
};

/** Contains response data for the playAudio operation. */
export type ServerCallsPlayAudioResponse = PlayAudioResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: PlayAudioResult;
  };
};

/** Contains response data for the answerCall operation. */
export type ServerCallsAnswerCallResponse = AnswerCallResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: AnswerCallResult;
  };
};

/** Optional parameters. */
export interface CallingServerApiClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
