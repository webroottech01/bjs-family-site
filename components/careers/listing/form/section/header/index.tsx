import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";

import Title, { Props as TitleProps } from "./Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/pro-solid-svg-icons";
import useIsMobile from "components/util/useIsMobile";

type Props = {
  title: TitleProps;
  optional: boolean;
  expanded: boolean;
  onToggle: () => void;
};

function FormHeader(props: Props & Styleable) {
  const isMobile = useIsMobile();
  const isLargerThanMobile = useMemo(() => !isMobile, [isMobile]);

  const indicatorText = props.optional ? "Optional" : "Required";

  const icon = useMemo(() => {
    if (props.expanded) {
      return faChevronUp;
    }
    return faChevronDown;
  }, [props.expanded]);

  return (
    <AnimatePresence>
      <Container className={props.className} layout>
        <Title {...props.title} />
        {isLargerThanMobile && (
          <>
            <Indicator>{indicatorText}</Indicator>
            <ToggleIcon icon={icon} onClick={props.onToggle} />
          </>
        )}
      </Container>
    </AnimatePresence>
  );
}

const ToggleIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  :hover {
    color: ${colours.yellow};
  }
`;

const Indicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  padding: 15px 20px;
  background: #8e867b;
  color: white;
`;

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > :not(:last-child) {
    margin-right: 40px;
  }

  ${Indicator} {
    margin-left: auto;
  }
`;

export default FormHeader;
