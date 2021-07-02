import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  SharedGalleryImage,
  SharedGalleryImagesListOptionalParams,
  SharedGalleryImagesGetOptionalParams,
  SharedGalleryImagesGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SharedGalleryImages. */
export interface SharedGalleryImages {
  /**
   * List shared gallery images by subscription id or tenant id.
   * @param location Resource location.
   * @param galleryUniqueName The unique name of the Shared Gallery.
   * @param options The options parameters.
   */
  list(
    location: string,
    galleryUniqueName: string,
    options?: SharedGalleryImagesListOptionalParams
  ): PagedAsyncIterableIterator<SharedGalleryImage>;
  /**
   * Get a shared gallery image by subscription id or tenant id.
   * @param location Resource location.
   * @param galleryUniqueName The unique name of the Shared Gallery.
   * @param galleryImageName The name of the Shared Gallery Image Definition from which the Image
   *                         Versions are to be listed.
   * @param options The options parameters.
   */
  get(
    location: string,
    galleryUniqueName: string,
    galleryImageName: string,
    options?: SharedGalleryImagesGetOptionalParams
  ): Promise<SharedGalleryImagesGetResponse>;
}
