import styled from "styled-components";
import { Styleable, Button, colours } from "@bjsdistribution/components";
import { useOpen } from "/components/cookies-consent/more-info/store";

function LearnMoreButton(props: Styleable) {
  const open = useOpen();
  return <Container 
            id="notification-go-to-cookies-learn-more"
            className={props.className} 
            onClick={open}
          >
            Learn more
          </Container>;
}

const Container = styled(Button)`
  font-size: 14px;
  background: transparent;
  color: #cccccc;
  border: 1px solid #8f8e8e;
  font-family: "Gotham SSm A", "Gotham SSm B";
  text-transform: unset;
  padding: 16px 20px;
  min-height: 47px;
  max-height: 47px;
`;

export default styled(LearnMoreButton)``;
