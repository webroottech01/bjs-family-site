import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";

import QuoteExplanation from "components/landing/belief-in-a-divine-flow/quote/QuoteExplanation";
import Person from "components/landing/belief-in-a-divine-flow/quote/Person";
import HarinderQuote from "components/landing/belief-in-a-divine-flow/quote/HarinderQuote";
import { QuoteMark } from "components/services/case-study/blueprint/LargeQuote";

function TabletBody(props: Styleable) {
  return (
    <Container className={props.className}>
      <Header>
        <QuoteExplanation />
        <Person />
      </Header>
      <HarinderQuote />
    </Container>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${HarinderQuote} {
    position: relative;
    top: -50px;
    font-size: inherit;
    ${QuoteMark} {
      ::before {
        top: -70px;
      }
    }
  }
`;

export default styled(TabletBody)``;
