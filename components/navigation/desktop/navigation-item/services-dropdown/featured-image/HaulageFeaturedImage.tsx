import { Styleable, colours } from "@bjsdistribution/components";
import styled from "styled-components";
import GeneralContainer from "./GeneralContainer";

import { logoWhiteUrl } from "subsidiary-config/haulage-config";

const Container = styled(GeneralContainer)`
  background: black no-repeat url("/images/services/haulage/navigation.jpg");

  background-position: bottom;
  position: relative;
  justify-content: flex-start;

  img {
    margin-top: 70px;
  }
`;

function HaulageFeaturedImage(props: Styleable) {
  return (
    <Container className={props.className}>
      <img src={logoWhiteUrl} height={100} />
    </Container>
  );
}

export default styled(HaulageFeaturedImage)``;
