import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";
import { down } from "styled-breakpoints";

import { useIsOnlyTablet } from "components/util/useIsTabletOrSmaller";

import QuoteExplanation from "./QuoteExplanation";
import Person from "./Person";

import TabletQuoteContainer from "./tablet";
import LargeQuote, {
  Text as QuoteText,
  Content as QuoteContent,
} from "components/services/case-study/blueprint/LargeQuote";
import HarinderQuote from "./HarinderQuote";
import useSequence from "./useSequence";
import { useSetEnabled } from "./egg";
import decode from "./decode";

function QuoteContainer(props: Styleable) {
  const isTablet = useIsOnlyTablet();
  const setCompleted = useSetEnabled();

  const keyPointer = useSequence(decode("YW5pc2gxMjM="), () => {
    setCompleted(true);
  });
  if (isTablet) {
    return <TabletQuoteContainer className={props.className} />;
  }
  return (
    <Container className={props.className}>
      <QuoteExplanation />
      <Body>
        <HarinderQuote>
          <Person />
        </HarinderQuote>
      </Body>
    </Container>
  );
}

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  gap: 40px;
  position: relative;

  @media only screen and (max-width: 1350px) and (min-width: 993px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 1400px) {
    ${LargeQuote} {
      ${QuoteText} {
        max-width: 81ch;
      }
    }
  }

  ${LargeQuote} {
    font-size: 16px;
    font-style: italic;

    ${down("xs")} {
      font-size: 14px;
    }
  }

  ${down("sm")} {
    ${QuoteContent} {
      flex-direction: column;
    }
    ${QuoteText} {
      font-size: 16px;
      margin-bottom: 40px;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${Body} {
    margin-top: 40px;
    margin-bottom: 40px;

    ${down("xs")} {
      margin-top: 17px;
      margin-bottom: 36px;
    }
  }
`;

export default styled(QuoteContainer)``;
