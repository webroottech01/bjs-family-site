import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";
import { down } from "styled-breakpoints";

import { borderRadius } from "components/about/timeline/entry/SupportingMedia";

import path from "components/about/timeline/path";
import getClientLogo from "components/util/getClientLogo";

function Footer(props: Styleable) {
  return (
    <Container className={props.className}>
      <System src={`${path}/IT-system.svg`} height={100} />
      <Logos />
    </Container>
  );
}

function Logos() {
  return (
    <LogosContainer>
      <img src={getClientLogo("MADE")} />
      <img src={getClientLogo("one call furniture")} />
    </LogosContainer>
  );
}

const System = styled.img`
  width: 60% !important;
  padding: 0px !important;
  margin-right: auto;
  ${down("lg")} {
    width: 50% !important;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 22px 20px;
  flex-direction: column;
  

  border-bottom-left-radius: ${borderRadius};
  border-bottom-right-radius: ${borderRadius};

  @media only screen and (min-width: 1300px) {
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  ${down("lg")} {
    gap: 10px;
    align-items: center;
    flex-direction: row;
  }
`;

const LogosContainer = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  gap: 20px;
  img {
    padding: 0px !important;
  }
`;

export default styled(Footer)``;
