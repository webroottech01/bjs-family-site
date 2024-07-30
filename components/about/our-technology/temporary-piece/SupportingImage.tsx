import { Styleable } from "@bjsdistribution/components";
import styled from "styled-components";

import Image from "next/image";
import image from "public/images/about/our-technology/tracker_mockup.png";

function SupportingImage(props: Styleable) {
  return (
    <Container className={props.className}>
      <Image src={image} width={326} height={593} layout="fixed" />
    </Container>
  );
}

const Container = styled.div`
`;

export default styled(SupportingImage)``;
