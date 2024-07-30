import { useEffect } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { colours, WithChildren, Styleable } from "@bjsdistribution/components";

import Subsidiary from "components/subsidiary-showcase/Subsidiary";
import useSubsidiary from "./SubsidiaryContext";

import constructITConfig from "subsidiary-config/construct-it-config";
interface Props extends WithChildren, Styleable {
  name: Subsidiary;
}

function SubsidiaryElement(props: Props) {
  const [selected, setSelected] = useSubsidiary();
  const isSelected = selected === props.name;
  

  const setAsSelected = () => {
    setSelected(props.name);
  };
  return (
    <Container onClick={setAsSelected} className={props.className}>
      {isSelected && (
        <SelectedIndicator
          layoutId="border"
          animate={{
            background:
              selected === "constructit"
                ? constructITConfig.primaryColour
                : "#ffc805",
          }}
        />
      )}
      {!isSelected && <Placeholder />}
      <LogoContainer className={props.className}>
        {props.children}
      </LogoContainer>
    </Container>
  );
}

const SelectedIndicator = styled(motion.div)`
  min-height: 4px;
  width: 100%;
  min-width: 100%;
  //text-alignborder-radius: 0px 0px 66px 66px;
  top: 0px !important;
  z-index: 5;

  overflow: visible;
`;

const Placeholder = styled.div`
  min-height: 4px;
  width: 100%;
  content: "";
  background: transparent;
`;

const Container = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: visible;
`;

const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export { Placeholder, SelectedIndicator };
export default styled(SubsidiaryElement)``;
