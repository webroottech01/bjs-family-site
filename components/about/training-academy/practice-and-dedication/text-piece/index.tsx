import styled from "styled-components";
import { up, down, only } from "styled-breakpoints";
import { Styleable, colours } from "@bjsdistribution/components";

function TextPiece(props: Styleable) {
  return (
    <Container className={props.className}>
      <Title>practice</Title>
      <Dedicated>Dedication</Dedicated>
      <And />
    </Container>
  );
}

const And = styled.span`
  ::after {
    position: absolute;
    content: "&";
    color: rgba(58, 54, 48, 0.25);
    font-size: 180px;
    top: 100px;
    left: 50px;

    ${down("md")} {
      left: 38px;
      font-size: 141px;
    }
    ${down("sm")} {
      left: 38px;
      font-size: 100px;
      top: 50px;
    }
  }
`;

const Title = styled.span`
  font-size: 36px;
  text-transform: lowercase;
  color: #3A3630;

  ${up("lg")} {
    font-size: 70px;
  }

  ${down("md")} {
    font-size: 53px;
  }
  ${down("sm")} {
    font-size: 38px;
  }
`;

const Dedicated = styled.span`
  text-transform: uppercase;
  font-size: 61px;
  font-family: "Eveleth";
  color: #3A3630;

  ${up("lg")} {
    font-size: 110px;
  }

  ${down("md")} {
    font-size: 84px;
  }
  ${down("sm")} {
    font-size: 40px;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export default styled(TextPiece)``;
