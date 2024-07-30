import { Styleable, colours } from "@bjsdistribution/components";
import styled from "styled-components";
import GeneralContainer from "./GeneralContainer";

import config, { logoWhiteUrl } from "subsidiary-config/extra-config";

const Container = styled(GeneralContainer)`
  background: ${config.primaryColour};
  position: relative;

  gap: 30px;
`;

function ExtraFeaturedImage(props: Styleable) {
  return (
    <Container className={props.className}>
      <img src={logoWhiteUrl} height={150} />
      <Van src="/images/services/extra/van.png" />
    </Container>
  );
}

const Van = styled.img`
  image-rendering: -moz-crisp-edges; /* Firefox */
  image-rendering: -o-crisp-edges; /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor;
  width: 90%;
 // height: auto;
`;
export default styled(ExtraFeaturedImage)``;
