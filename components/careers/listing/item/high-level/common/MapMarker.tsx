import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

import { faMapMarkerAlt } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  location: string;
} & Styleable;

function MapMarker(props: Props) {
  return (
    <Container className={props.className}>
      <FontAwesomeIcon icon={faMapMarkerAlt} />
      <Text>{props.location}</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 8px;
  }
  color: ${colours.black};
  font-size: 16px;
`;

const Text = styled.span`
  text-transform: capitalize !important;
`;

export default styled(MapMarker)``;
