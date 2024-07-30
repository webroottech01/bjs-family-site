import styled from "styled-components";

import { Styleable } from "@bjsdistribution/components";
import Subsidiary from "components/subsidiary-showcase/Subsidiary";

import HomeDeliveryFeaturedImage from "./HomeDeliveryFeaturedImage";
import HaulageFeaturedImage from "./HaulageFeaturedImage";
import ExtraFeaturedImage from "./ExtraFeaturedImage";
import ConstructITFeaturedImage from "./ConstructITFeaturedImage";

interface Props extends Styleable {
  subsidiary: Subsidiary;
}

function FeaturedImage(props: Props) {
  const subsidiary = props.subsidiary;
  if (subsidiary === "haulage") {
    return <HaulageFeaturedImage className={props.className} />;
  } else if (subsidiary === "extra") {
    return <ExtraFeaturedImage className={props.className} />;
  } else if (subsidiary === "constructit") {
    return <ConstructITFeaturedImage className={props.className} />;
  }
  return <HomeDeliveryFeaturedImage className={props.className} />;
}

export default styled(FeaturedImage)``;
