import styled from "styled-components";
import { Styleable, Button, colours } from "@bjsdistribution/components";
import { useGivenConsent } from "/components/cookies-consent/useShowNotification";

function AcceptButton(props: Styleable) {
  const onClick = useGivenConsent();
  return <Container
          id="notification-go-to-cookies-accept"
          className={props.className}
          onClick={onClick}
          >
            Accept
          </Container>;
}

const Container = styled(Button)`
  font-size: 14px;
  background: transparent linear-gradient(112deg, #b6dc69 0%, #57db7a 100%) 0%
    0% no-repeat padding-box;
  color: ${colours.black};
  min-height: 47px;
  max-height: 47px;
  border: none;
  :hover {
    border: none;
  }
`;

export default styled(AcceptButton)``;
