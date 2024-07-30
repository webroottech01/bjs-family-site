import styled from "styled-components";
import { up, down } from "styled-breakpoints";
import { Styleable, colours } from "@bjsdistribution/components";
import TextPiece from "./text-piece";
import InterestedInACareer from "../interested-in-a-career/index";
import TrainingAcademyMan from "../TrainingAcademyMan";

function PracticeAndDedicated(props: Styleable) {
  return (
    <Container className={props.className}>
      <TextPiece />
      <Body>
        <p>
          Our delivery service teams are brand ambassadors, customer service
          agents, and experts at moving your products. We aim to provide the
          very best in training and support for our teams.
        </p>
        <p>
          Our life size training academy, based at a top secret location (just
          off J9 M6), is a unique way for our teams to hone their home delivery
          skills.
        </p>
        <p>
          Practice does indeed make perfect so when it comes to crossing
          thresholds for our customers, our teams are confident at tight corners
          and awkward spaces.
        </p>
      </Body>
      <Heading>
        Making it look so easy takes a lot of hard work from our dedicated
        teams.
      </Heading>
      <InterestedInACareer />
    </Container>
  );
}
const Heading = styled.span`
  font-size: 26px;
  width: unset;
  ${down("md")} {
    width: 61%;
  }
  ${down("sm")} {
    width: 100%;
  }
`;

const Body = styled.span`
  font-size: 16px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  ${TextPiece} {
    margin-bottom: 22px;

    ${down("md")} {
      margin-left: auto;
      margin-right: auto;
    }

    ${down("sm")} {
      margin-bottom: 155px; //Greater margin when man moves next to text piece
      margin-left: unset;
      margin-right: unset;
    }
  }

  ${Body} {
    margin-bottom: 70px;
  }

  ${Heading} {
    margin-bottom: 60px;
  }

  ${up("lg")} {
    width: 48%;
  }
  ${down("md")} {
    width: initial;
  }
`;

export default PracticeAndDedicated;
