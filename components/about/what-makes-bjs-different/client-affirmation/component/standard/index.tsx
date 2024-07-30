import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";
import { down, up } from "styled-breakpoints";
import ClientAffirmation from "components/about/what-makes-bjs-different/client-affirmation/ClientAffirmation";

import ClientLink from "components/about/what-makes-bjs-different/client-affirmation/component/ClientLink";
import ImageAvatar from "../ImageAvatar";
import LargeQuote from "components/services/case-study/blueprint/LargeQuote";
import From from "../From";
import getClientLogo from "components/util/getClientLogo";

function StandardClientAffirmation(props: ClientAffirmation & Styleable) {
  return (
    <Container className={props.className}>
      <Header>
        <ImageAvatar image={props.image} />
        <LargeQuote text={props.quote} />
      </Header>
      <Description>{props.description}</Description>
      <Footer>
        <From info={props.author} />
        <ClientLink client={props.client}>
          <ClientLogo src={getClientLogo(props.client)} client={props.client} />
        </ClientLink>
      </Footer>
    </Container>
  );
}

const ClientLogo = styled.img<{ client: string }>`
  height: 60px;
  ${(props) => props.client === "julianBowen" && "height: 26px"};
`;

const Description = styled.span`
  font-size: 16px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Header = styled(Flex)`
  > :not(:last-child) {
    margin-right: 40px;
  }

  ${up("lg")} {
    ${ImageAvatar} {
      max-height: 200px;
      max-width: 200px;
      min-height: 200px;
      min-width: 200px;
    }
  }
  ${down("sm")} {
    ${ImageAvatar} {
      max-height: 130px;
      max-width: 130px;
      min-height: 130px;
      min-width: 130px;
    }
  }

  ${LargeQuote}{
    font-style: italic;
  }
`;

const Footer = styled(Flex)`
  width: 100%;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1650px) {
    justify-content: space-between;
    height: 548px;
  }

  ${Header} {
    margin-bottom: 32px;
  }
  ${Description} {
    margin-bottom: 40px;
  }
`;

export default StandardClientAffirmation;
