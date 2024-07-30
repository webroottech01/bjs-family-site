import { Styleable } from "@bjsdistribution/components";

interface UploadedFileItem extends Styleable {
  title: string;
  fileType: string;
  fileSize: number;
  onDelete: () => void;
}

export default UploadedFileItem;
