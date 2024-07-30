import styled from "styled-components";
import { up, down } from "styled-breakpoints";
import { Styleable, colours } from "@bjsdistribution/components";
import PartnerLogos from "./PartnerLogos";

function OurPartners(props: Styleable) {
  return (
    <Container className={props.className}>
      <Header>
        <Title>Our Technology Partners</Title>
        <Seperator />
      </Header>
      <PartnerLogos/>
    </Container>
  );
}

const Title = styled.span`
  font-size: 16px;
  color: rgba(58, 54, 48, 0.6);
  text-transform: uppercase;
`;

const Seperator = styled.div`
  background: rgba(58, 54, 48, 0.25);
  min-height: 2px;
  min-width: 270px;

  ${up("lg")} {
      max-width: 40px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;

  
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: 0px -50px;

  ${Header} {
    margin-bottom: 25px;
  }

  ${down("md")} {
    margin-right: -40px;
  }

  ${down("sm")} {
    margin-right: -20px;
  }
`;

export default styled(OurPartners)``;
