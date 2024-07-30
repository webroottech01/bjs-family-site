import { Styleable } from "@bjsdistribution/components";
import styled from "styled-components";

import Subsidiary from "components/subsidiary-showcase/Subsidiary";

import HomeDeliveryExpectancy from "./home-delivery";
import HaulageExpectancy from "./haulage";
import ConstructITExpectancy from "./construct-it";
import ExtraExpectancy from "./extra";

type Props = {
  subsidiary: Subsidiary;
} & Styleable;

function SubsidiaryExpectancy({ className, subsidiary }: Props) {
  if (subsidiary === "home delivery") {
    return <HomeDeliveryExpectancy className={className} />;
  } else if (subsidiary === "haulage") {
    return <HaulageExpectancy className={className} />;
  } else if (subsidiary === "constructit") {
    return <ConstructITExpectancy className={className}/>
  } else if (subsidiary === "extra") {
    return <ExtraExpectancy className={className}/>
  }
  return <div>Cannot find expectancy {subsidiary}</div>
}

export default styled(SubsidiaryExpectancy)``;