import styled from "styled-components";
import { up, down } from "styled-breakpoints";
import { Styleable, colours } from "@bjsdistribution/components";
import QuotePiece from "./QuotePiece";
import Speech from "./Speech";

function HarinderPiece(props: Styleable) {
  return (
    <Container className={props.className}>
      <QuotePiece />
      <Speech />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(66, 61, 55);

  mix-blend-mode: color;

  @media not all and (min-resolution: 0.001dpcm) {
    //Mix blend mode is not supported on iOS/Safari, special query to unset if we're on safari
    mix-blend-mode: unset;
  }

  ${up("lg")} {
    padding: 125px 187px;

    > :not(:last-child) {
      margin-right: 100px;
    }
  }

  ${down("md")} {
    flex-direction: column;

    > :not(:last-child) {
      margin-right: 0px;
      margin-bottom: 100px;
    }
  }

  ${down("sm")} {
    ${QuotePiece} {
      margin-bottom: 0px;
    }
  }
`;

export default styled(HarinderPiece)``;
