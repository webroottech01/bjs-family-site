import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToolbox } from "@fortawesome/pro-regular-svg-icons";

function Icon(props: Styleable) {
  return <Container className={props.className}>
      <IconElement icon={faToolbox}/>
  </Container>;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background: #dad6d2;
`;

const IconElement = styled(FontAwesomeIcon)`
  font-size: 60px !important;
`;
export default styled(Icon)``;
