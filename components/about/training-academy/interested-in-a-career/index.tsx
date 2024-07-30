import styled, { css } from "styled-components";
import { Styleable, colours, Button } from "@bjsdistribution/components";
import { up, down, only } from "styled-breakpoints";

import { useRouter } from "next/router";
function InterestedInACareer(props: Styleable) {
  const router = useRouter();
  const goToCareers = () => router.push("/careers");
  return (
    <Container className={props.className}>
      <Question>Interested in a career with BJS?</Question>
      <Button id="training-academy-go-to-career-with-bjs" wide colors="secondary" onClick={goToCareers}>
        Careers
      </Button>
    </Container>
  );
}

const Question = styled.span`
  color: white;

  ${up("sm")} {
    white-space: nowrap;
  }
`;

const DesktopStyle = css`
  padding: 28px 40px;
  border-radius: 66px;
`;

const SmallStyle = css`
  padding: 42px 50px;
  border-radius: 12px;
  flex-direction: column;
`;

const Container = styled.div`
  background: #695f50;
  display: flex;
  > :not(:last-child) {
    margin-right: 30px;
  }
  align-items: center;
  font-size: 16px;
  width: fit-content;

  ${Button.PlainButton} {
    width: min-content;
  }

  ${up("lg")} {
    ${DesktopStyle};
  }
  ${down("md")} {
    padding: 42px 50px;
    border-radius: 12px;
    flex-direction: column;
    > :not(:last-child) {
      margin-bottom: 30px;
      margin-right: 0px;
    }
  }

  ${down("xs")} {
    padding: 42px 0px;
    width: 100%;
  }
`;

export default InterestedInACareer;
