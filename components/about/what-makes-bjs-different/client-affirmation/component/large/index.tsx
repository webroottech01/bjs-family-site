import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { down } from "styled-breakpoints";

import ImageAvatar from "../ImageAvatar";
import ClientAffirmation from "components/about/what-makes-bjs-different/client-affirmation/ClientAffirmation";
import LargeQuote from "components/services/case-study/blueprint/LargeQuote";
import From from "components/about/what-makes-bjs-different/client-affirmation/component/From";
import ClientLink from "components/about/what-makes-bjs-different/client-affirmation/component/ClientLink";
import getClientLogo from "components/util/getClientLogo";

function LargeAffirmation(props: ClientAffirmation & Styleable) {
  return (
    <Container className={props.className}>
      <ImageryContainer>
        <ImageAvatar image={props.image} />
        <ClientLink client={props.client}>
          <ClientLogo url={getClientLogo(props.client)}></ClientLogo>
        </ClientLink>
      </ImageryContainer>
      <Body>
        <LargeQuote text={props.quote} inline />
        <Description>{props.description}</Description>
        <From info={props.author} />
      </Body>
    </Container>
  );
}

const ClientLogo = styled.div<{ url: string }>`
  background: url("${({ url }) => url}");
`;
const Description = styled.span`
  font-size: 16px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1650px) {
    justify-content: space-between;
  }
`;

const ImageryContainer = styled(Column)`
  > :not(:last-child) {
    margin-bottom: 40px;
  }
  align-items: center;
  ${down("sm")} {
    align-items: flex-start;
    position: relative;
  }
`;

const Body = styled(Column)`
  > :not(:last-child) {
    margin-bottom: 60px;
  }

  ${down("md")} {
    > :not(:last-child) {
      margin-right: 45px;
    }
  }

  ${LargeQuote} {
    padding-top: 0px;
    font-size: 26px;

    font-style: italic;
    font-weight: medium;
  }
`;

const Container = styled.div`
  display: flex;
  > :not(:last-child) {
    margin-right: 50px;
  }

  ${down("md")} {
    > :not(:last-child) {
      margin-right: 40px;
    }
    ${ImageAvatar} {
      max-height: 250px;
      max-width: 250px;
      min-height: 250px;
      min-width: 250px;
    }
  }
  ${down("sm")} {
    > :not(:last-child) {
      margin-right: 0px;
      margin-bottom: 40px;
    }

    flex-direction: column;
  }
`;

export { ClientLogo };
export default LargeAffirmation;
