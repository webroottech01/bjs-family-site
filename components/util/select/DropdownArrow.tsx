import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/pro-solid-svg-icons";
import { Styleable, WithChildren } from "@bjsdistribution/components";

const Container = styled.div`
  position: relative;
`;

const Arrow = styled(FontAwesomeIcon)`
  font-size: 16px;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

function DropdownArrow({ className, children }: Styleable & WithChildren) {
  return (
    <Container className={className}>
      {children}
      <Arrow icon={faChevronDown} />
    </Container>
  );
}

/*
const DropdownArrow = styled.div`
  position: relative;
  ::after {
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    right: 20px;
    font-size: 16px;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    font-family: "Font Awesome 5 Pro";
    font-weight: 400;
    content: "\f078";
  }
`;*/

export default DropdownArrow;
