import { Styleable, colours } from "@bjsdistribution/components";
import styled from "styled-components";
import GeneralContainer from "./GeneralContainer";

import { logoWhiteUrl } from "subsidiary-config/construct-it-config";

const Container = styled(GeneralContainer)`
  background: black no-repeat
    url("/images/services/construct-it/navigation_background.jpg");
  background-position: bottom;
  background-size: cover;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  color: white;
  img {
    margin-top: 75px;
  }
`;

function ConstructITFeaturedImage(props: Styleable) {
  return (
    <Container className={props.className}>
      <Logo src={logoWhiteUrl} height={60} />
    </Container>
  );
}

const Logo = styled.img`
  image-rendering: -moz-crisp-edges; /* Firefox */
  image-rendering: -o-crisp-edges; /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor;
`;
export default styled(ConstructITFeaturedImage)``;
