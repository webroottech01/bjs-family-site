import styled from "styled-components";
import {motion} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronUp, faChevronDown, faChevronRight } from "@fortawesome/pro-solid-svg-icons";
import Props from "./Props";

type ExtendedProps = {
  isOpened: boolean;
} & Props;

const getIcon = (props: ExtendedProps) => {
  const title = props.entry.title.toLowerCase();
  if(title === "news" || title === "careers") {
    return faChevronRight;
  }
  if (props.isOpened) {
    return faChevronUp;
  }
  return faChevronDown;
}

function MobileNavigationEntry(props: ExtendedProps) {
  return (
    <Container className={props.className} layout>
      <Name>{props.entry.title}</Name>
      <Icon icon={getIcon(props)} />
    </Container>
  );
}

const Name = styled.span`
  font-family: "Eveleth";
  font-size: 18px;
`;
const Icon = styled(FontAwesomeIcon)`
  height: 22px;
`;

const Container = styled(motion.div)`
  display: flex;
  padding: 30px;
  align-items: center;
  justify-content: space-between;
`;

export default styled(MobileNavigationEntry)``;
