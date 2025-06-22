import imageCompression from "browser-image-compression";

/**
 * Loads all key-value pairs from the browser's localStorage into an object.
 *
 * @returns {Record<string, string | number>} An object containing all localStorage entries,
 *   where each key is the localStorage key and each value is the corresponding value (as a string or number).
 */
export const loadLocalStorage = (): Record<string, string | number> => {
  const data: Record<string, string | number> = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key) {
      data[key] = localStorage.getItem(key) ?? "";
    }
  }
  return data;
};

/**
 * Compresses an image file using the specified options.
 *
 * @param {File} imageFile - The image file to compress.
 * @returns {Promise<Blob>} A promise that resolves to the compressed image as a Blob.
 */
export const compressImage = async (imageFile: File) => {
  const options = {
    maxSizeMB: 0.5,
    maxWidthOrHeight: 1024,
    useWebWorker: true,
  };

  const compressedImage = await imageCompression(imageFile, options);
  return compressedImage;
};

/**
 * Compresses all files in a FileList and returns an array of new compressed File objects.
 *
 * @param {FileList} inputFiles - The list of files to compress.
 * @returns {Promise<File[]>} A promise that resolves to an array of compressed File objects.
 */
export const compressFiles = async (inputFiles: FileList) => {
  const compressedFiles = await Promise.all(
    Array.from(inputFiles).map(async (originalFile) => {
      const compressedBlob = await compressImage(originalFile);
      return new File([compressedBlob], originalFile.name, {
        type: compressedBlob.type,
      });
    }),
  );

  return compressedFiles;
};

/**
 * Uploads an array of files to the server using the /api/upload endpoint and returns their blob URLs.
 *
 * @param {File[]} files - The array of files to upload.
 * @returns {Promise<string[]>} A promise that resolves to an array of URLs for the uploaded blobs.
 */
export const uploadFile = async (
  files: File[],
  firstName: FormDataEntryValue,
  lastName: FormDataEntryValue,
) => {
  let fileUrls: string[] = [];
  const fullName = `${firstName}-${lastName}`;
  const uploadApi = "/api/upload";

  fileUrls = await Promise.all(
    files.map(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("fullName", fullName);

      const response = await fetch(uploadApi, {
        method: "PUT",
        body: formData,
      });

      const blob = await response.json();
      return blob.url;
    }),
  );
  return fileUrls;
};
