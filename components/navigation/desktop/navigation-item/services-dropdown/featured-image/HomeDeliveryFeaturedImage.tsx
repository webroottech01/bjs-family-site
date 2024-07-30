import { Styleable } from "@bjsdistribution/components";
import styled from "styled-components";

import GeneralContainer from "./GeneralContainer";

import Image from "next/image";
const Container = styled(GeneralContainer)`

  background: linear-gradient(#E2E0DD, #F5F0EA);
  gap: 20px;
`;

function HomeDeliveryFeaturedImage(props: Styleable) {
  return (
    <Container className={props.className}>
      <img src="/images/logos/homedelivery.svg" height={129} />
      <Image src="/images/showcase/menholdingsofa.png" height={280} width={290} layout="fixed"/>
    </Container>
  );
}

export default styled(HomeDeliveryFeaturedImage)``;
