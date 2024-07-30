import { Styleable } from "@bjsdistribution/components";

import HomeDeliveryDetailedInfo from "./home-delivery";
import HaulageDetailedInfo from "./haulage";
import ConstructIT from "./construct-it";
import Extra from "./extra";

import Subsidiary from "components/subsidiary-showcase/Subsidiary";

interface Props extends Styleable {
  subsidiary: Subsidiary;
}

function DetailedInfo({ subsidiary, className }: Props) {
  if (subsidiary === "home delivery") {
    return <HomeDeliveryDetailedInfo className={className} />;
  } else if (subsidiary === "haulage") {
    return <HaulageDetailedInfo className={className} />;
  } else if (subsidiary === "constructit") {
    return <ConstructIT className={className} />;
  } else if (subsidiary === "extra") {
    return <Extra className={className} />;
  }
  return <div>cannot find {subsidiary} </div>;
}

export default DetailedInfo;
