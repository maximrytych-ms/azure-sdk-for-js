import {
  VirtualMachineExtensionImagesGetOptionalParams,
  VirtualMachineExtensionImagesGetResponse,
  VirtualMachineExtensionImagesListTypesOptionalParams,
  VirtualMachineExtensionImagesListTypesResponse,
  VirtualMachineExtensionImagesListVersionsOptionalParams,
  VirtualMachineExtensionImagesListVersionsResponse
} from "../models";

/** Interface representing a VirtualMachineExtensionImages. */
export interface VirtualMachineExtensionImages {
  /**
   * Gets a virtual machine extension image.
   * @param location The name of a supported Azure region.
   * @param publisherName
   * @param version
   * @param typeParam
   * @param options The options parameters.
   */
  get(
    location: string,
    publisherName: string,
    version: string,
    typeParam: string,
    options?: VirtualMachineExtensionImagesGetOptionalParams
  ): Promise<VirtualMachineExtensionImagesGetResponse>;
  /**
   * Gets a list of virtual machine extension image types.
   * @param location The name of a supported Azure region.
   * @param publisherName
   * @param options The options parameters.
   */
  listTypes(
    location: string,
    publisherName: string,
    options?: VirtualMachineExtensionImagesListTypesOptionalParams
  ): Promise<VirtualMachineExtensionImagesListTypesResponse>;
  /**
   * Gets a list of virtual machine extension image versions.
   * @param location The name of a supported Azure region.
   * @param publisherName
   * @param typeParam
   * @param options The options parameters.
   */
  listVersions(
    location: string,
    publisherName: string,
    typeParam: string,
    options?: VirtualMachineExtensionImagesListVersionsOptionalParams
  ): Promise<VirtualMachineExtensionImagesListVersionsResponse>;
}
