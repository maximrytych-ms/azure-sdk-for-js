import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  RunCommandDocumentBase,
  VirtualMachineRunCommandsListOptionalParams,
  VirtualMachineRunCommand,
  VirtualMachineRunCommandsListByVirtualMachineOptionalParams,
  VirtualMachineRunCommandsGetOptionalParams,
  VirtualMachineRunCommandsGetResponse,
  VirtualMachineRunCommandsCreateOrUpdateOptionalParams,
  VirtualMachineRunCommandsCreateOrUpdateResponse,
  VirtualMachineRunCommandUpdate,
  VirtualMachineRunCommandsUpdateOptionalParams,
  VirtualMachineRunCommandsUpdateResponse,
  VirtualMachineRunCommandsDeleteOptionalParams,
  VirtualMachineRunCommandsGetByVirtualMachineOptionalParams,
  VirtualMachineRunCommandsGetByVirtualMachineResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a VirtualMachineRunCommands. */
export interface VirtualMachineRunCommands {
  /**
   * Lists all available run commands for a subscription in a location.
   * @param location The location upon which run commands is queried.
   * @param options The options parameters.
   */
  list(
    location: string,
    options?: VirtualMachineRunCommandsListOptionalParams
  ): PagedAsyncIterableIterator<RunCommandDocumentBase>;
  /**
   * The operation to get all run commands of a Virtual Machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine containing the run command.
   * @param options The options parameters.
   */
  listByVirtualMachine(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachineRunCommandsListByVirtualMachineOptionalParams
  ): PagedAsyncIterableIterator<VirtualMachineRunCommand>;
  /**
   * Gets specific run command for a subscription in a location.
   * @param location The location upon which run commands is queried.
   * @param commandId The command id.
   * @param options The options parameters.
   */
  get(
    location: string,
    commandId: string,
    options?: VirtualMachineRunCommandsGetOptionalParams
  ): Promise<VirtualMachineRunCommandsGetResponse>;
  /**
   * The operation to create or update the run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the run command should be created or updated.
   * @param runCommandName The name of the virtual machine run command.
   * @param runCommand Parameters supplied to the Create Virtual Machine RunCommand operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    vmName: string,
    runCommandName: string,
    runCommand: VirtualMachineRunCommand,
    options?: VirtualMachineRunCommandsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualMachineRunCommandsCreateOrUpdateResponse>,
      VirtualMachineRunCommandsCreateOrUpdateResponse
    >
  >;
  /**
   * The operation to create or update the run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the run command should be created or updated.
   * @param runCommandName The name of the virtual machine run command.
   * @param runCommand Parameters supplied to the Create Virtual Machine RunCommand operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    vmName: string,
    runCommandName: string,
    runCommand: VirtualMachineRunCommand,
    options?: VirtualMachineRunCommandsCreateOrUpdateOptionalParams
  ): Promise<VirtualMachineRunCommandsCreateOrUpdateResponse>;
  /**
   * The operation to update the run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the run command should be updated.
   * @param runCommandName The name of the virtual machine run command.
   * @param runCommand Parameters supplied to the Update Virtual Machine RunCommand operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    vmName: string,
    runCommandName: string,
    runCommand: VirtualMachineRunCommandUpdate,
    options?: VirtualMachineRunCommandsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualMachineRunCommandsUpdateResponse>,
      VirtualMachineRunCommandsUpdateResponse
    >
  >;
  /**
   * The operation to update the run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the run command should be updated.
   * @param runCommandName The name of the virtual machine run command.
   * @param runCommand Parameters supplied to the Update Virtual Machine RunCommand operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    vmName: string,
    runCommandName: string,
    runCommand: VirtualMachineRunCommandUpdate,
    options?: VirtualMachineRunCommandsUpdateOptionalParams
  ): Promise<VirtualMachineRunCommandsUpdateResponse>;
  /**
   * The operation to delete the run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the run command should be deleted.
   * @param runCommandName The name of the virtual machine run command.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    vmName: string,
    runCommandName: string,
    options?: VirtualMachineRunCommandsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * The operation to delete the run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the run command should be deleted.
   * @param runCommandName The name of the virtual machine run command.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    vmName: string,
    runCommandName: string,
    options?: VirtualMachineRunCommandsDeleteOptionalParams
  ): Promise<void>;
  /**
   * The operation to get the run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine containing the run command.
   * @param runCommandName The name of the virtual machine run command.
   * @param options The options parameters.
   */
  getByVirtualMachine(
    resourceGroupName: string,
    vmName: string,
    runCommandName: string,
    options?: VirtualMachineRunCommandsGetByVirtualMachineOptionalParams
  ): Promise<VirtualMachineRunCommandsGetByVirtualMachineResponse>;
}
