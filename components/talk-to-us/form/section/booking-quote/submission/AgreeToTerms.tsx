import styled from "styled-components";
import { Styleable, Form, colours } from "@bjsdistribution/components";

import { useAgreeState } from "./agree-store";

import { privacyPolicyUrl } from "/components/footer/useClickInformation";
import Checkbox from "/components/util/Checkbox";

function AgreeToTerms(props: Styleable) {
  const [agree, setAgree] = useAgreeState();
  const toggle = () => setAgree(!agree);

  return (
    <Container className={props.className}>
      <Checkbox checked={agree} onClick={toggle} />
      <span>
        I agree to the BJS{" "}
        <a href={privacyPolicyUrl} target="_blank">
          Privacy Policy
        </a>
      </span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;

  > :not(:last-child) {
    margin-right: 10px;
  }
  cursor: pointer;

  span {
    color: #9c9a97;

    :hover {
      //color: ${colours.yellow};
    }
  }
`;

export default styled(AgreeToTerms)``;
