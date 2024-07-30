import formatFileSize from "pretty-bytes";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faFilePdf } from "@fortawesome/pro-solid-svg-icons";

const getFileType = (mimeType: string): string => {
  mimeType = mimeType.toLowerCase();
  if (mimeType === "application/pdf") {
    return "PDF";
  }
  return "Unknown";
};

const getIcon = (input: string): IconProp => {
  return faFilePdf;
};
export { getFileType, formatFileSize, getIcon };
