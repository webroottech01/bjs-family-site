import styled from "styled-components";
import {down} from "styled-breakpoints";
import { Styleable, Button } from "@bjsdistribution/components";
import AgreeToTerms from "./AgreeToTerms";
import { useAgreedValue } from "./agree-store";
import useSubmitState from './submitting-store';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/pro-regular-svg-icons';

function SubmissionContainer(props: Styleable) {
  const isAgreed = useAgreedValue();
  const [isSubmitting] = useSubmitState();

  return (
    <Container className={props.className}>
      <AgreeToTerms />
      <Button type="submit" disabled={!isAgreed || isSubmitting} icon={isSubmitting ? <FontAwesomeIcon icon={faSpinner} spin/> : undefined}>
        Submit
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${Button.PlainButton} {
    height: 56px;
    width: 200px;
  }

  ${down("sm")} {
    flex-direction: column;

    ${AgreeToTerms} {
      margin-bottom: 15px;
      text-align: center;
    }

    ${Button.PlainButton} {
      width: 100%;
    }
  }

`;
export default styled(SubmissionContainer)``;
