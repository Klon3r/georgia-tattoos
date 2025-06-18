export const storeValue = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >,
) => {
  if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
    localStorage.setItem(e.target.id, e.target.checked ? "true" : "false");
  } else {
    localStorage.setItem(e.target.id, e.target.value);
  }
};

export const checkAvailability = (availability: Record<string, boolean>) => {
  return Object.values(availability).some(Boolean);
};

export const checkFiles = (files: FileList) => {
  let totalSize = 0;

  for (let i = 0; i < files.length; i++) {
    let sizeToMb = files[i].size / 1048576; // Convert from byte to Megabyte
    totalSize += sizeToMb;
  }

  const roundedSize = Math.round(totalSize * 100) / 100;

  // 25MB is the limit for Gmail attachments
  return roundedSize;
};
