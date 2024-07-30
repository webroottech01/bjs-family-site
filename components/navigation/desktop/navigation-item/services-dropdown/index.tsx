import styled, { css } from "styled-components";
import {up, down} from "styled-breakpoints";
import { motion } from "framer-motion";

import FeaturedImage from "./featured-image";
import useCurrentHovered from "./services-dropdown-store";
import SubsidiaryEntries from "./SubsidiaryEntries";

function ServicesDropdown() {
  const currentHovered = useCurrentHovered();
  return (
    <Container
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
    <Right>
      <FeaturedImage subsidiary={currentHovered} />
    </Right>
      <Left>
        <SubsidiaryEntries />
      </Left>
    </Container>
  );
}

const ContainerStyling = css`
  position: relative;
  box-shadow: 0px 3px 30px #0000001a;
  border-radius: 12px;
  z-index: 5000;
`;

const Container = styled(motion.div)`
  ${ContainerStyling};
  background: white;
  display: flex;
`;

const Left = styled.div`
  ${ContainerStyling};
  padding: 45px;
  display: flex;
  flex-direction: column;

  ${down("md")} {
    padding: 30px 15px;
  }
  

  > :not(:last-child) {
    margin-bottom: 45px;

    ${down("md")} {
      margin-bottom: 25px;
    }
  }
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
`;

const Right = styled.div`
  ${ContainerStyling};
  min-height: 100%;
  min-width: 370px;
  max-width: 370px;
  background: #57534e;
  content: "";
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;

`;

export default ServicesDropdown;
