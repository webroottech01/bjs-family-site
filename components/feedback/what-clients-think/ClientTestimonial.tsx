import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

import LargeQuote, {
  Text as LargeQuoteText,
  QuoteMark,
} from "/components/services/case-study/blueprint/LargeQuote";

interface Props {
    testimony: string;
    testifier: string;
}

function ClientTestimonial({ testimony, testifier, className }: Props & Styleable) {
  return (
    <Container className={className}>
      <LargeQuote text={testimony} />
      <Testifier>{testifier}</Testifier>
    </Container>
  );
}

const Testifier = styled.span`
    font-weight: 500;
    font-size: 16px;
    color: rgba(58, 54, 48, 0.65);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${QuoteMark} {
    ::before {
      color: #8d8b87;
      top: -85px;
    }
  }
  ${LargeQuoteText} {
    font-size: 16px;
    font-style: italic;
  }

  ${LargeQuote} {
      margin-bottom: 30px;
  }
`;

export default styled(ClientTestimonial)``;
