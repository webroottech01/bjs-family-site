import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/pro-light-svg-icons";
import { faCookieBite } from "@fortawesome/pro-solid-svg-icons";
import { useClose } from "./store";
function MoreInfoHeader(props: Styleable) {
  const close = useClose();

  return (
    <Container className={props.className}>
      <TitleContainer>
        <CookieIcon icon={faCookieBite} />
        <Title>Our cookies</Title>
      </TitleContainer>
      <CloseIcon icon={faTimes} onClick={close} />
    </Container>
  );
}

const CookieIcon = styled(FontAwesomeIcon)`
  font-size: 22px !important;
  color: ${colours.yellow};
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  ${CookieIcon} {
    margin-right: 12px;
  }
`;

const CloseIcon = styled(FontAwesomeIcon)`
  font-size: 48px !important;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;

  :hover {
    color: ${colours.yellow};
  }
`;

const Title = styled.span`
  font-size: 20px;
  font-family: "Eveleth";
  color: white;
`;

const Container = styled.div`
  background: transparent
    linear-gradient(95deg, #758588 0%, #677578 21%, #30373a 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 3px 10px #00000029;
  padding: 16px 40px;

  display: flex;
  align-items: center;
  ${CloseIcon} {
    margin-left: auto;
  }
`;

export default styled(MoreInfoHeader)``;
