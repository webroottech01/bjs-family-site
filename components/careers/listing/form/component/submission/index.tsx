import styled from "styled-components";
import { down } from "styled-breakpoints";
import { Styleable, Button, colours, Form } from "@bjsdistribution/components";
import AgreeToPolicy from "./AgreeToPolicy";
import useIsTabletOrSmaller, { useIsDesktop } from "components/util/useIsTabletOrSmaller";
import useIsMobile from "components/util/useIsMobile";
import { useIsAgreed } from "./store";
import useCancel from "./useCancel";
import { useIsSubmitting } from "components/careers/listing/form/response/submission-store";
import { useMemo } from "react";
import WorkInUk from "./WorkInUk";

function Submission(props: Styleable) {
  const form = Form.useForm();
  const cv = form.watch("cv")?.file;
  const isMobile = useIsMobile();
  const isDesktop = useIsDesktop();
  const isAgreed = useIsAgreed();
  const useIsTabletOrSmall = useIsTabletOrSmaller();
  // const isAgreedWork = useIsAgreedWorkInUK();
  const isSubmitting = useIsSubmitting();
  const cancel = useCancel();

  const isDisabled = useMemo(() => {
    console.log(cv);
    if(!cv) {
      return true;
    }
    if (!isAgreed) {
      return true;
    }
    if (isSubmitting) {
      return true;
    }
    return false;
  }, [isSubmitting, isAgreed, cv]);


  return (
    <Container className={props.className}>
      {useIsTabletOrSmall  && <WorkInUk />}
      {useIsTabletOrSmall && <AgreeToPolicy />}
      <ButtonContainer>
        <CancelApplication id="form-go-to-cancel-application" onClick={cancel}>
          {isDesktop ? "Cancel application" : "Cancel"}
        </CancelApplication>
        {isDesktop && <WorkInUk />}
        {isDesktop && <AgreeToPolicy />}
        <Button id="form-go-to-send-application" colors="secondary" type="submit" disabled={isDisabled}>
          Send application
        </Button>
      </ButtonContainer>
    </Container>
  );
}

const CancelApplication = styled(Button)`
  border: 1px solid white;
  font-family: "Eveleth";
  font-size: 14px;
  color: white;
  text-transform: capitalize;
  border: 1px solid #7f7c78;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 22px 40px;
  ${down("sm")} {
    margin: 20px 0px;
    padding: 0px;
  }
`;

const Container = styled.div`
  display: flex;
  background: ${colours.black};
  align-items: center;
  justify-content: space-between;

  ${Button.PlainButton} {
    max-height: 56px;
  }

  ${down("md")} {
    flex-direction: column;
  }
`;

export default Submission;
