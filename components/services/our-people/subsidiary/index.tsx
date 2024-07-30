import SubsidiaryComponentProps from "components/services/SubsidiaryComponentProps";

import HomeDelivery from "./home-delivery";
import Haulage from "./haulage";
import ConstructIT from "./construct-it";

function OurPeopleSubsidiary({subsidiary, className}: SubsidiaryComponentProps) {
  if (subsidiary === "haulage") {
    return <Haulage className={className} />
  } else if (subsidiary === "constructit") {
    return <ConstructIT className={className}/>
  }
  return <HomeDelivery />;
}

export default OurPeopleSubsidiary;
