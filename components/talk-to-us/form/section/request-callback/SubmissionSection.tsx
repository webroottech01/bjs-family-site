import styled from "styled-components";
import { Styleable, Form, colours, Button } from "@bjsdistribution/components";

import { privacyPolicyUrl } from "/components/footer/useClickInformation";

function SubmissionSection(props: Styleable) {
  return (
    <Container className={props.className}>
      <AgreementContainer>
        <input type="checkbox" />
        <Text>
          I agree to the BJS <u>Terms & Conditions</u> and{" "}
          <a href={privacyPolicyUrl} target="_blank">
            Privacy Policy
          </a>
        </Text>
      </AgreementContainer>
      <Button colors="dark">Submit</Button>
    </Container>
  );
}

const Text = styled.span`
  color: #9c9a97;
  font-size: 14px;
`;

const AgreementContainer = styled.div`
  display: flex;
  align-items: inherit;
    > :not(:last-child) {
      margin-right: 10px;
    }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  ${Button.PlainButton} {
    padding: 17px 66px;
  }
`;

export default SubmissionSection;
