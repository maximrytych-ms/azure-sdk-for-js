import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { VirtualMachineScaleSetVMs } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  VirtualMachineScaleSetVM,
  VirtualMachineScaleSetVMsListNextOptionalParams,
  VirtualMachineScaleSetVMsListOptionalParams,
  VirtualMachineScaleSetVMsReimageOptionalParams,
  VirtualMachineScaleSetVMsReimageAllOptionalParams,
  VirtualMachineScaleSetVMsDeallocateOptionalParams,
  VirtualMachineScaleSetVMsUpdateOptionalParams,
  VirtualMachineScaleSetVMsUpdateResponse,
  VirtualMachineScaleSetVMsDeleteOptionalParams,
  VirtualMachineScaleSetVMsGetOptionalParams,
  VirtualMachineScaleSetVMsGetResponse,
  VirtualMachineScaleSetVMsGetInstanceViewOptionalParams,
  VirtualMachineScaleSetVMsGetInstanceViewResponse,
  VirtualMachineScaleSetVMsListResponse,
  VirtualMachineScaleSetVMsPowerOffOptionalParams,
  VirtualMachineScaleSetVMsRestartOptionalParams,
  VirtualMachineScaleSetVMsStartOptionalParams,
  VirtualMachineScaleSetVMsRedeployOptionalParams,
  VirtualMachineScaleSetVMsRetrieveBootDiagnosticsDataOptionalParams,
  VirtualMachineScaleSetVMsRetrieveBootDiagnosticsDataResponse,
  VirtualMachineScaleSetVMsPerformMaintenanceOptionalParams,
  VirtualMachineScaleSetVMsSimulateEvictionOptionalParams,
  RunCommandInput,
  VirtualMachineScaleSetVMsRunCommandOptionalParams,
  VirtualMachineScaleSetVMsRunCommandResponse,
  VirtualMachineScaleSetVMsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a VirtualMachineScaleSetVMs. */
export class VirtualMachineScaleSetVMsImpl
  implements VirtualMachineScaleSetVMs {
  private readonly client: ComputeManagementClientContext;

  /**
   * Initialize a new instance of the class VirtualMachineScaleSetVMs class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of all virtual machines in a VM scale sets.
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    virtualMachineScaleSetName: string,
    options?: VirtualMachineScaleSetVMsListOptionalParams
  ): PagedAsyncIterableIterator<VirtualMachineScaleSetVM> {
    const iter = this.listPagingAll(
      resourceGroupName,
      virtualMachineScaleSetName,
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
          virtualMachineScaleSetName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    virtualMachineScaleSetName: string,
    options?: VirtualMachineScaleSetVMsListOptionalParams
  ): AsyncIterableIterator<VirtualMachineScaleSetVM[]> {
    let result = await this._list(
      resourceGroupName,
      virtualMachineScaleSetName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        virtualMachineScaleSetName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    virtualMachineScaleSetName: string,
    options?: VirtualMachineScaleSetVMsListOptionalParams
  ): AsyncIterableIterator<VirtualMachineScaleSetVM> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      virtualMachineScaleSetName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Reimages (upgrade the operating system) a specific virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  async beginReimage(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsReimageOptionalParams
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
      { resourceGroupName, vmScaleSetName, instanceId, options },
      reimageOperationSpec,
      sendOperation
    );
  }

  /**
   * Reimages (upgrade the operating system) a specific virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  async beginReimageAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsReimageOptionalParams
  ): Promise<void> {
    const poller = await this.beginReimage(
      resourceGroupName,
      vmScaleSetName,
      instanceId,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Allows you to re-image all the disks ( including data disks ) in the a VM scale set instance. This
   * operation is only supported for managed disks.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  async beginReimageAll(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsReimageAllOptionalParams
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
      { resourceGroupName, vmScaleSetName, instanceId, options },
      reimageAllOperationSpec,
      sendOperation
    );
  }

  /**
   * Allows you to re-image all the disks ( including data disks ) in the a VM scale set instance. This
   * operation is only supported for managed disks.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  async beginReimageAllAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsReimageAllOptionalParams
  ): Promise<void> {
    const poller = await this.beginReimageAll(
      resourceGroupName,
      vmScaleSetName,
      instanceId,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deallocates a specific virtual machine in a VM scale set. Shuts down the virtual machine and
   * releases the compute resources it uses. You are not billed for the compute resources of this virtual
   * machine once it is deallocated.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  async beginDeallocate(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsDeallocateOptionalParams
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
      { resourceGroupName, vmScaleSetName, instanceId, options },
      deallocateOperationSpec,
      sendOperation
    );
  }

  /**
   * Deallocates a specific virtual machine in a VM scale set. Shuts down the virtual machine and
   * releases the compute resources it uses. You are not billed for the compute resources of this virtual
   * machine once it is deallocated.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  async beginDeallocateAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsDeallocateOptionalParams
  ): Promise<void> {
    const poller = await this.beginDeallocate(
      resourceGroupName,
      vmScaleSetName,
      instanceId,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates a virtual machine of a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set where the extension should be create or updated.
   * @param instanceId The instance ID of the virtual machine.
   * @param parameters Parameters supplied to the Update Virtual Machine Scale Sets VM operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    parameters: VirtualMachineScaleSetVM,
    options?: VirtualMachineScaleSetVMsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualMachineScaleSetVMsUpdateResponse>,
      VirtualMachineScaleSetVMsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VirtualMachineScaleSetVMsUpdateResponse> => {
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
      { resourceGroupName, vmScaleSetName, instanceId, parameters, options },
      updateOperationSpec,
      sendOperation
    );
  }

  /**
   * Updates a virtual machine of a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set where the extension should be create or updated.
   * @param instanceId The instance ID of the virtual machine.
   * @param parameters Parameters supplied to the Update Virtual Machine Scale Sets VM operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    parameters: VirtualMachineScaleSetVM,
    options?: VirtualMachineScaleSetVMsUpdateOptionalParams
  ): Promise<VirtualMachineScaleSetVMsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      vmScaleSetName,
      instanceId,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a virtual machine from a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsDeleteOptionalParams
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
      { resourceGroupName, vmScaleSetName, instanceId, options },
      deleteOperationSpec,
      sendOperation
    );
  }

  /**
   * Deletes a virtual machine from a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      vmScaleSetName,
      instanceId,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a virtual machine from a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsGetOptionalParams
  ): Promise<VirtualMachineScaleSetVMsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmScaleSetName, instanceId, options },
      getOperationSpec
    );
  }

  /**
   * Gets the status of a virtual machine from a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  getInstanceView(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsGetInstanceViewOptionalParams
  ): Promise<VirtualMachineScaleSetVMsGetInstanceViewResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmScaleSetName, instanceId, options },
      getInstanceViewOperationSpec
    );
  }

  /**
   * Gets a list of all virtual machines in a VM scale sets.
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    virtualMachineScaleSetName: string,
    options?: VirtualMachineScaleSetVMsListOptionalParams
  ): Promise<VirtualMachineScaleSetVMsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, virtualMachineScaleSetName, options },
      listOperationSpec
    );
  }

  /**
   * Power off (stop) a virtual machine in a VM scale set. Note that resources are still attached and you
   * are getting charged for the resources. Instead, use deallocate to release resources and avoid
   * charges.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  async beginPowerOff(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsPowerOffOptionalParams
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
      { resourceGroupName, vmScaleSetName, instanceId, options },
      powerOffOperationSpec,
      sendOperation
    );
  }

  /**
   * Power off (stop) a virtual machine in a VM scale set. Note that resources are still attached and you
   * are getting charged for the resources. Instead, use deallocate to release resources and avoid
   * charges.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  async beginPowerOffAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsPowerOffOptionalParams
  ): Promise<void> {
    const poller = await this.beginPowerOff(
      resourceGroupName,
      vmScaleSetName,
      instanceId,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Restarts a virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  async beginRestart(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsRestartOptionalParams
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
      { resourceGroupName, vmScaleSetName, instanceId, options },
      restartOperationSpec,
      sendOperation
    );
  }

  /**
   * Restarts a virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  async beginRestartAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsRestartOptionalParams
  ): Promise<void> {
    const poller = await this.beginRestart(
      resourceGroupName,
      vmScaleSetName,
      instanceId,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Starts a virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  async beginStart(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsStartOptionalParams
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
      { resourceGroupName, vmScaleSetName, instanceId, options },
      startOperationSpec,
      sendOperation
    );
  }

  /**
   * Starts a virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  async beginStartAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsStartOptionalParams
  ): Promise<void> {
    const poller = await this.beginStart(
      resourceGroupName,
      vmScaleSetName,
      instanceId,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Shuts down the virtual machine in the virtual machine scale set, moves it to a new node, and powers
   * it back on.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  async beginRedeploy(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsRedeployOptionalParams
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
      { resourceGroupName, vmScaleSetName, instanceId, options },
      redeployOperationSpec,
      sendOperation
    );
  }

  /**
   * Shuts down the virtual machine in the virtual machine scale set, moves it to a new node, and powers
   * it back on.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  async beginRedeployAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsRedeployOptionalParams
  ): Promise<void> {
    const poller = await this.beginRedeploy(
      resourceGroupName,
      vmScaleSetName,
      instanceId,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to retrieve SAS URIs of boot diagnostic logs for a virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  retrieveBootDiagnosticsData(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsRetrieveBootDiagnosticsDataOptionalParams
  ): Promise<VirtualMachineScaleSetVMsRetrieveBootDiagnosticsDataResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmScaleSetName, instanceId, options },
      retrieveBootDiagnosticsDataOperationSpec
    );
  }

  /**
   * Performs maintenance on a virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  async beginPerformMaintenance(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsPerformMaintenanceOptionalParams
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
      { resourceGroupName, vmScaleSetName, instanceId, options },
      performMaintenanceOperationSpec,
      sendOperation
    );
  }

  /**
   * Performs maintenance on a virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  async beginPerformMaintenanceAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsPerformMaintenanceOptionalParams
  ): Promise<void> {
    const poller = await this.beginPerformMaintenance(
      resourceGroupName,
      vmScaleSetName,
      instanceId,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to simulate the eviction of spot virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  simulateEviction(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsSimulateEvictionOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmScaleSetName, instanceId, options },
      simulateEvictionOperationSpec
    );
  }

  /**
   * Run command on a virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param parameters Parameters supplied to the Run command operation.
   * @param options The options parameters.
   */
  async beginRunCommand(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    parameters: RunCommandInput,
    options?: VirtualMachineScaleSetVMsRunCommandOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualMachineScaleSetVMsRunCommandResponse>,
      VirtualMachineScaleSetVMsRunCommandResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VirtualMachineScaleSetVMsRunCommandResponse> => {
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
      { resourceGroupName, vmScaleSetName, instanceId, parameters, options },
      runCommandOperationSpec,
      sendOperation,
      "location"
    );
  }

  /**
   * Run command on a virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param parameters Parameters supplied to the Run command operation.
   * @param options The options parameters.
   */
  async beginRunCommandAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    parameters: RunCommandInput,
    options?: VirtualMachineScaleSetVMsRunCommandOptionalParams
  ): Promise<VirtualMachineScaleSetVMsRunCommandResponse> {
    const poller = await this.beginRunCommand(
      resourceGroupName,
      vmScaleSetName,
      instanceId,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the VM scale set.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    virtualMachineScaleSetName: string,
    nextLink: string,
    options?: VirtualMachineScaleSetVMsListNextOptionalParams
  ): Promise<VirtualMachineScaleSetVMsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, virtualMachineScaleSetName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const reimageOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/reimage",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  requestBody: Parameters.vmScaleSetVMReimageInput,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName,
    Parameters.instanceId
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const reimageAllOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/reimageall",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName,
    Parameters.instanceId
  ],
  serializer
};
const deallocateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/deallocate",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName,
    Parameters.instanceId
  ],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetVM
    },
    201: {
      bodyMapper: Mappers.VirtualMachineScaleSetVM
    },
    202: {
      bodyMapper: Mappers.VirtualMachineScaleSetVM
    },
    204: {
      bodyMapper: Mappers.VirtualMachineScaleSetVM
    }
  },
  requestBody: Parameters.parameters24,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName,
    Parameters.instanceId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion, Parameters.forceDeletion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName,
    Parameters.instanceId
  ],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetVM
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName,
    Parameters.instanceId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getInstanceViewOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/instanceView",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetVMInstanceView
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName,
    Parameters.instanceId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{virtualMachineScaleSetName}/virtualMachines",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetVMListResult
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand,
    Parameters.filter,
    Parameters.select
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.virtualMachineScaleSetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const powerOffOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/poweroff",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion, Parameters.skipShutdown],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName,
    Parameters.instanceId
  ],
  serializer
};
const restartOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/restart",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName,
    Parameters.instanceId
  ],
  serializer
};
const startOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/start",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName,
    Parameters.instanceId
  ],
  serializer
};
const redeployOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/redeploy",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName,
    Parameters.instanceId
  ],
  serializer
};
const retrieveBootDiagnosticsDataOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/retrieveBootDiagnosticsData",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.RetrieveBootDiagnosticsDataResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.sasUriExpirationTimeInMinutes
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName,
    Parameters.instanceId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const performMaintenanceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/performMaintenance",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName,
    Parameters.instanceId
  ],
  serializer
};
const simulateEvictionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/simulateEviction",
  httpMethod: "POST",
  responses: { 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName,
    Parameters.instanceId
  ],
  serializer
};
const runCommandOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/runCommand",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.RunCommandResult
    },
    201: {
      bodyMapper: Mappers.RunCommandResult
    },
    202: {
      bodyMapper: Mappers.RunCommandResult
    },
    204: {
      bodyMapper: Mappers.RunCommandResult
    }
  },
  requestBody: Parameters.parameters14,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName,
    Parameters.instanceId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetVMListResult
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand,
    Parameters.filter,
    Parameters.select
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.virtualMachineScaleSetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
