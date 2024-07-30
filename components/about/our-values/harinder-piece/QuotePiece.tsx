import styled from "styled-components";
import { up, down } from "styled-breakpoints";
import { Styleable, colours } from "@bjsdistribution/components";
import LargeQuote, {
  Text,
} from "components/services/case-study/blueprint/LargeQuote";

import Person from "components/landing/belief-in-a-divine-flow/quote/Person";

function QuotePiece(props: Styleable) {
  return (
    <Container className={props.className}>
      <LargeQuote
        text="I believe in a divine flow and I believe in our team."
        inline
      />
      <Person />
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  ${up("lg")} {
    ${LargeQuote} {
      padding: 0px 10px;
    }
    flex-direction: column;
    align-items: flex-start;

    > :not(:last-child) {
      margin-bottom: 58px;
    }
  }

  ${down("md")} {
    padding: 60px 40px 0px 40px;
    flex-direction: row;
    align-items: center;

    > :not(:last-child) {
      margin-bottom: 0px;
      margin-right: 40px;
    }
  }
  ${down("sm")} {
    flex-direction: column;
    align-items: flex-start;
    padding: 40px 20px;

    > :not(:last-child) {
      margin-right: 0px;
    }

    ${Text} {
      font-size: 22px;
      font-weight: 500;
      font-style: italic;
    }
  }

  color: white;
`;
export default styled(QuotePiece)``;
