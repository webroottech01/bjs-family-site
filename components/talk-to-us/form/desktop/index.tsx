import styled from "styled-components";
import { Styleable, Form } from "@bjsdistribution/components";
import TalkToUs from "../section/talk-to-us";

import CurrentBookingQuote from "../section/booking-quote";

import Exit from "components/talk-to-us/form/Exit";

function DesktopTalkToUs(props: Styleable) {
  return (
    <Container className={props.className}>
      <Left>
        <Title>Talk to us</Title>
        <TalkToUs />
      </Left>
      <Right>
        <CurrentBookingQuote />

      <Exit/>
      </Right>
    </Container>
  );
}

const Title = styled.span`
  font-family: "Eveleth";
  font-size: 26px;
`;

const Container = styled.div`
  display: flex;
  //box-shadow: 0px 3px 20px #0000001a;
  border-radius: 12px;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
  background: white;
  max-width: 1720px;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  ${Title} {
    margin-bottom: 25px;
  }
`;

const Right = styled(Section)`
  background: white;
  padding: 65px 140px 0px 100px;
  border-radius: 12px;

  @media only screen and (max-width: 1400px) {
    padding-left: 30px;
    padding-right: 30px;
  }
position: relative;
  ${Exit} {
    position: absolute;
    right: 40px;
    top: 40px;
  }

  ${CurrentBookingQuote} {

    ${Form.Inputs.Label.Section} {
      label {
        font-size: 11px;
        color: #888075;
      }
    }
  }
  
`;

const Left = styled(Section)`
  background: transparent linear-gradient(360deg, #f5f0ea 0%, #e2e0dd 100%) 0%
    0% no-repeat padding-box;
  padding: 60px 40px;
  border-radius: 12px 0px 0px 12px;
  max-width: 500px;
`;

export default styled(DesktopTalkToUs)``;
