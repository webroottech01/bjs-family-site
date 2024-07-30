import styled from "styled-components";

import BoxProps from "./BoxProps";
import { Icon } from "./Shared.styled";

const Title = styled.h2`
  font-size: 16px;
  font-family: "Eveleth";
  text-align: center;
  margin:0px;
`;
const Description = styled.span`
  font-size: 14px;
  text-align: center;

  white-space: pre-line;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 30px;
  background: white;
  box-shadow: 0px 3px 10px #0000000d;
  border-radius: 12px;
  z-index: 6;

  ${Icon} {
    margin-bottom: 28px;
  }
  ${Title} {
    margin-bottom: 20px;
  }

  ${Description} {
      width: 65ch;
    }

  @media only screen and (max-width: 1600px) {
    padding: 30px 30px 60px 30px;

    ${Description} {
      width: 60ch;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding-bottom: 40px;
    ${Description} {
      width: 35ch;
    }
  }

  @media only screen and (max-width: 1200px) {
    z-index: 1;
  }

  
`;
function Box(props: BoxProps) {
  //  const tabletOrSmaller = useIsTabletOrSmaller();
 
  return (
    <Container className={props.className}>
      <Icon icon={props.icon} />
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </Container>
  );
}

export default styled(Box)``;
