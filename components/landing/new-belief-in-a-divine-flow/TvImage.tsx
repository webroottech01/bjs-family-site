import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import Image from "next/image";

import manHoldingTv from "public/images/landing/man-holding-tv.png";

function TvImage(props: Styleable) {
  return (
    <Container className={props.className}>
      <Image src={manHoldingTv} layout="responsive" />
    </Container>
  );
}

const Container = styled.div`
  //height: 363px;
`;
export default styled(TvImage)``;
