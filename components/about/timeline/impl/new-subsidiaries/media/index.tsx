import styled from "styled-components";
import { SupportingMedia } from "components/about/timeline/entry";
import path from "components/about/timeline/path";

import haulageConfig from "subsidiary-config/haulage-config";
import extraConfig from "subsidiary-config/extra-config";
import { down, up } from "styled-breakpoints";

function Media() {
  return (
    <Container>
      <LogoContainer>
        <Logo src={haulageConfig.logoUrl} />
        <Logo src={extraConfig.logoUrl} />
      </LogoContainer>
      <Wayfinder src={`${path}/wayfinder.svg`} />
    </Container>
  );
}

const Logo = styled.img`
  min-height: 100px;
  width: 60% !important;
  padding: 0px !important;
  ${down("md")} {
    width: 30% !important;
  }
  @media only screen and (min-width: 1450px) {
    width: 30% !important;
  }
`;

const Wayfinder = styled.img`
  height: 120px;
  padding: 0px !important;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${down("md")} {
    flex-direction: row;
    justify-content: space-around;
  }
  @media only screen and (min-width: 1450px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Container = styled(SupportingMedia)`
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px 20px 0px 20px;
  @media only screen and (min-width: 1450px) {
    min-width: 350px !important;
  }

  // border-bottom-left-radius: 0px;
  // border-bottom-right-radius: 0px;
`;

export default Media;
