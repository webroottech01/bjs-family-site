import styled from "styled-components";
import { up, down } from "styled-breakpoints";

import { WithChildren, Styleable } from "@bjsdistribution/components";

import ScrollableCards from "./ScrollableCards";

export const Title = styled.h4`
  font-family: "Eveleth";
  font-size: 60px;
  margin:0px;

  @media only screen and (max-width: 1600px) {
    font-size: 46px;
  }

  ${down("md")} {
    font-size: 40px;
  }


  ${down("xs")} {
    white-space: nowrap;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${ScrollableCards} {
    bottom: -31%;
    padding-left: 20px;
    padding-bottom: 50px;
    left: 0px;
    position: absolute;

    ${down("sm")} {
      bottom: -235px;
    }
  }

  p {
    margin: 0;
  }
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  position: relative;
  padding: 100px;
  padding-bottom: 300px;


  ${Title} {
    margin-bottom: 70px;
  }


  @media only screen and (max-width: 1600px) {
    padding: 80px 60px 300px 60px;
    ${Title} {
      margin-bottom: 30px;
    }
  }

  ${down("md")} {
    padding: 60px 40px; 
    padding-bottom: 285px;
    ${Title} {
      margin-bottom: 40px;
    }
  }

  ${down("sm")} {
    padding: 65px 20px;
    padding-bottom: 240px; //240px
  }

`;

const ProgressionContainer = styled.div`
  background: white;
  display: flex;
  min-height: 300px;
  min-width: 100%;

  ${down("xs")} {
    min-height: 250px;
  }
`;

type Props = {} & WithChildren & Styleable;

function OurPeople(props: Props) {
  return (
    <Container className={props.className}>
      <TopContainer>
        <Title>Our people</Title>
        {props.children}
      </TopContainer>
      <ProgressionContainer />
    </Container>
  );
}

export { TopContainer };
export default styled(OurPeople)``;
