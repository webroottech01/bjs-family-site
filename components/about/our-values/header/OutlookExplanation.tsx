import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";
import { down } from "styled-breakpoints";

function OutlookExplanation(props: Styleable) {
  return (
    <Container className={props.className}>
      <Originated>
        Based in Punjab, India, BJS was the founder of a trust that runs
        projects for the welfare of humanity; provision of health care
        facilities, higher medical education and to show ‘the path of spiritual
        righteousness’, to ‘foster human values and welfare with esteemed
        devotion indeed’.
      </Originated>
      <Section>
        While not an obvious fit to most western business values this outlook
        has proven beneficial.
      </Section>
    </Container>
  );
}

const Section = styled.span`
  font-size: 16px;
  ${down("sm")} {
    font-size: 14px;
  }
`;

const Originated = styled(Section)`
  ${down("md")} {
    max-width: 400px;
  }
  ${down("sm")} {
    max-width: unset;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 60px;

  ${down("md")} {
    gap: 40px;
  }
  ${down("sm")} {
    flex-direction: column;
  }
`;

export default styled(OutlookExplanation)``;
