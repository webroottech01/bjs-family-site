import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Styleable } from "@bjsdistribution/components";

export default interface BoxProps extends Styleable {
  title: string;
  icon: IconProp;
  description: string;
}
