import Subsidiary from "components/subsidiary-showcase/Subsidiary";

import HomeDeliveryDetailedInfo from "./HomeDeliveryDetailedInfo";
import HaulageDetailedInfo from "./haulage";
import ExtraDetailedInfo from "./ExtraDetailedInfo";
import ConstructITInfo from "./construct-it";

type Props = {
  subsidiary: Subsidiary;
};

function SubsidiaryDetailedInfo({ subsidiary }: Props) {
  if (subsidiary === "haulage") {
    return <HaulageDetailedInfo />;
  } else if (subsidiary === "home delivery") {
    return <HomeDeliveryDetailedInfo />;
  } else if (subsidiary === "extra") {
    return <ExtraDetailedInfo />;
  } else if (subsidiary === "constructit") {
    return <ConstructITInfo />;
  }
  return <HomeDeliveryDetailedInfo />;
}

export default SubsidiaryDetailedInfo;
