import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  VirtualMachineScaleSetVM,
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
  VirtualMachineScaleSetVMsRunCommandResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a VirtualMachineScaleSetVMs. */
export interface VirtualMachineScaleSetVMs {
  /**
   * Gets a list of all virtual machines in a VM scale sets.
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    virtualMachineScaleSetName: string,
    options?: VirtualMachineScaleSetVMsListOptionalParams
  ): PagedAsyncIterableIterator<VirtualMachineScaleSetVM>;
  /**
   * Reimages (upgrade the operating system) a specific virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  beginReimage(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsReimageOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Reimages (upgrade the operating system) a specific virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  beginReimageAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsReimageOptionalParams
  ): Promise<void>;
  /**
   * Allows you to re-image all the disks ( including data disks ) in the a VM scale set instance. This
   * operation is only supported for managed disks.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  beginReimageAll(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsReimageAllOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Allows you to re-image all the disks ( including data disks ) in the a VM scale set instance. This
   * operation is only supported for managed disks.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  beginReimageAllAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsReimageAllOptionalParams
  ): Promise<void>;
  /**
   * Deallocates a specific virtual machine in a VM scale set. Shuts down the virtual machine and
   * releases the compute resources it uses. You are not billed for the compute resources of this virtual
   * machine once it is deallocated.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  beginDeallocate(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsDeallocateOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deallocates a specific virtual machine in a VM scale set. Shuts down the virtual machine and
   * releases the compute resources it uses. You are not billed for the compute resources of this virtual
   * machine once it is deallocated.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  beginDeallocateAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsDeallocateOptionalParams
  ): Promise<void>;
  /**
   * Updates a virtual machine of a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set where the extension should be create or updated.
   * @param instanceId The instance ID of the virtual machine.
   * @param parameters Parameters supplied to the Update Virtual Machine Scale Sets VM operation.
   * @param options The options parameters.
   */
  beginUpdate(
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
  >;
  /**
   * Updates a virtual machine of a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set where the extension should be create or updated.
   * @param instanceId The instance ID of the virtual machine.
   * @param parameters Parameters supplied to the Update Virtual Machine Scale Sets VM operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    parameters: VirtualMachineScaleSetVM,
    options?: VirtualMachineScaleSetVMsUpdateOptionalParams
  ): Promise<VirtualMachineScaleSetVMsUpdateResponse>;
  /**
   * Deletes a virtual machine from a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a virtual machine from a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsDeleteOptionalParams
  ): Promise<void>;
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
  ): Promise<VirtualMachineScaleSetVMsGetResponse>;
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
  ): Promise<VirtualMachineScaleSetVMsGetInstanceViewResponse>;
  /**
   * Power off (stop) a virtual machine in a VM scale set. Note that resources are still attached and you
   * are getting charged for the resources. Instead, use deallocate to release resources and avoid
   * charges.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  beginPowerOff(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsPowerOffOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Power off (stop) a virtual machine in a VM scale set. Note that resources are still attached and you
   * are getting charged for the resources. Instead, use deallocate to release resources and avoid
   * charges.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  beginPowerOffAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsPowerOffOptionalParams
  ): Promise<void>;
  /**
   * Restarts a virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  beginRestart(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsRestartOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Restarts a virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  beginRestartAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsRestartOptionalParams
  ): Promise<void>;
  /**
   * Starts a virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  beginStart(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsStartOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Starts a virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  beginStartAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsStartOptionalParams
  ): Promise<void>;
  /**
   * Shuts down the virtual machine in the virtual machine scale set, moves it to a new node, and powers
   * it back on.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  beginRedeploy(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsRedeployOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Shuts down the virtual machine in the virtual machine scale set, moves it to a new node, and powers
   * it back on.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  beginRedeployAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsRedeployOptionalParams
  ): Promise<void>;
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
  ): Promise<VirtualMachineScaleSetVMsRetrieveBootDiagnosticsDataResponse>;
  /**
   * Performs maintenance on a virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  beginPerformMaintenance(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsPerformMaintenanceOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Performs maintenance on a virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  beginPerformMaintenanceAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMsPerformMaintenanceOptionalParams
  ): Promise<void>;
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
  ): Promise<void>;
  /**
   * Run command on a virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param parameters Parameters supplied to the Run command operation.
   * @param options The options parameters.
   */
  beginRunCommand(
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
  >;
  /**
   * Run command on a virtual machine in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param parameters Parameters supplied to the Run command operation.
   * @param options The options parameters.
   */
  beginRunCommandAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    parameters: RunCommandInput,
    options?: VirtualMachineScaleSetVMsRunCommandOptionalParams
  ): Promise<VirtualMachineScaleSetVMsRunCommandResponse>;
}
