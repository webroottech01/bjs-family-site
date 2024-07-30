import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { useAgreedState } from "./store";
import { privacyPolicyUrl } from "/components/footer/useClickInformation";
import Checkbox from 'components/util/Checkbox';
import { down } from "styled-breakpoints";

function AgreeToPolicy(props: Styleable) {
  const [agreed, setAgreed] = useAgreedState();
  const toggle = () => setAgreed(!agreed);

  return (
    <Container className={props.className}>
      <Checkbox checked={agreed} onClick={toggle} />
      <Text>
        I agree to the{" "}
        <b>
          <Link href={privacyPolicyUrl} target="_blank">BJS Privacy Policy</Link>
        </b>
      </Text>
    </Container>
  );
}

const Text = styled.span`
  color: white;
  ${down("md")}{
    color: ${colours.black};
  }
`;

const Link = styled.a`
  color: white;
  ${down("md")}{
    color: ${colours.black};
  }
`
const Container = styled.div`
  display: flex;
  > :not(:last-child) {
    margin-right: 20px;
  }
  align-items: center;

  ${Checkbox} {
    background: white;
  }
  ${down("md")}{
    height: 120px;
    width: 100%;
    justify-content: flex-start;
    padding-left: 60px;
    background: linear-gradient(360deg, #F5F0EA,#E2E0DD)
  }
  ${down("sm")} {
    padding-left: 20px;
  }
`;
export default AgreeToPolicy;
