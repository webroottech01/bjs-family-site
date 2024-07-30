import styled, { css } from "styled-components";
import { Button, Styleable } from "@bjsdistribution/components";

import Title from "./Title";
import History, { Belief } from "./History";
import HarinderQuote from "./quote/HarinderQuote";
import Person from "./quote/Person";
import TvImage from "./TvImage";

function BeliefInADivineFlow(props: Styleable) {
  return (
    <Container className={props.className}>
      <Title />
      <History />
      <Belief />
      <HarinderQuote />
      <Person />
      <TvImage />
    </Container>
  );
}

const GridAssignment = css`
  ${Title} {
    grid-area: title;
  }

  ${History} {
    grid-area: history;
  }
  ${Belief} {
    grid-area: belief;
  }
  ${HarinderQuote} {
    grid-area: quote;
  }

  ${TvImage} {
    grid-area: image;
  }
`;

const Container = styled.div`
  display: grid;

  padding: 60px;

  ${GridAssignment};
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, min-content);
  gap: 0px 40px;
  grid-template-areas:
    "title image"
    "history image"
    "belief image"
    "quote person";
`;
export default BeliefInADivineFlow;
