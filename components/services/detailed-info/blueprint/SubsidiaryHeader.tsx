import styled from "styled-components";

import Subsidiary from "components/subsidiary-showcase/Subsidiary";
import { Styleable } from "@bjsdistribution/components";

import { logoWhiteUrl as haulageLogoWhite } from "subsidiary-config/haulage-config";
import { logoWhiteUrl as constructITLogoWhite } from "subsidiary-config/construct-it-config";
import { logoWhiteUrl as extraLogoWhite } from "subsidiary-config/extra-config";

import DetailedHeader, { Title } from "./DetailedHeader";

import getConfig from "subsidiary-config";

interface Props {
  subsidiary: Subsidiary;
}

function SubsidiaryHeader(props: Props & Styleable) {
  const { subsidiary } = props;

  let { title, established, logoUrl } = getConfig(subsidiary);

  if (subsidiary === "haulage") {
    logoUrl = haulageLogoWhite;
  } else if (subsidiary === "constructit") {
    logoUrl = constructITLogoWhite;
  } else if (subsidiary === "extra") {
    logoUrl = extraLogoWhite;
  }

  return (
    <DetailedHeader
      className={props.className}
      title={title}
      year={established}
      logo={logoUrl}
    />
  );
}

export { Title };
export default styled(SubsidiaryHeader)``;
