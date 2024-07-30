import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/pro-regular-svg-icons";

import formatDate from "date-fns/format";

interface Props {
  start: Date;
  end: Date;
}

const FORMAT = "MMM yyyy";

function ItemDuration(props: Props & Styleable) {
  return (
    <Container className={props.className}>
      <Date>{formatDate(props.start, FORMAT)}</Date>
      <SeperatorIcon icon={faArrowRight} />
      <Date>{formatDate(props.end, FORMAT)}</Date>
    </Container>
  );
}

const Date = styled.span``;

const SeperatorIcon = styled(FontAwesomeIcon)`
  color: ${colours.yellow};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
`;

export default styled(ItemDuration)``;
