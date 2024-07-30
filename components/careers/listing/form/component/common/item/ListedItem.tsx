import styled from "styled-components";
import { motion } from "framer-motion";

import { Styleable, Button, WithChildren } from "@bjsdistribution/components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronUp,
  faChevronDown,
  faToolbox,
} from "@fortawesome/pro-solid-svg-icons";
import Metadata from "./ItemMetadata";
import ItemDuration from "./ItemDuration";
import ItemAction from "./ItemAction";

interface Props {
  item: Metadata;
  edit: () => void;
  delete: () => void;
}

function ListedItem(props: Props & Styleable & WithChildren) {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded((old) => !old);


  return (
    <Container className={props.className} layout>
      <Header layout>
        <HeaderIcon icon={faToolbox} />
        <Body>
          <Title>{props.item.title}</Title>
          <Subtitle>{props.item.subtitle}</Subtitle>
          {props.children}
          <ItemDuration start={props.item.from} end={props.item.to} />
        </Body>
        <Button
          id="item-go-to-toggle"
          shape="rounded"
          icon={
            <FontAwesomeIcon icon={expanded ? faChevronUp : faChevronDown} />
          }
          onClick={toggle}
        />
      </Header>
      {expanded && <ItemAction edit={props.edit} delete={props.delete} />}
    </Container>
  );
}

const HeaderIcon = styled(FontAwesomeIcon)`
  font-size: 26px !important;
`;

const Title = styled.span`
  font-weight: medium;
  max-width: 200px;
`;

const Subtitle = styled.div`
  color: rgba(58, 54, 48, 0.7);
  font-style: italic;
  max-width: 100%;
  overflow: hidden;
`;

const Header = styled(motion.div)`
  display: flex;
  > :not(:last-child) {
    margin-right: 17px;
  }
  max-width: 420px;

  ${Button.PlainButton} {
    margin-left: auto;
    max-height: 46px;
    max-width: 46px;
    padding: 10px 15px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  gap: 18px;
  white-space: nowrap;
  max-width: 260px;
`;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 24px;
  background: #f3f1f0 0% 0% no-repeat padding-box;
  box-shadow: 0px 6px 20px #00000008;
  padding: 20px 20px 30px 20px;
  height: min-content;
  min-width: 420px;
  max-width: 420px;
`;

export default ListedItem;
