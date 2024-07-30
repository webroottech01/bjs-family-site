import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight } from "@fortawesome/pro-regular-svg-icons";
import { down } from "styled-breakpoints";

const steps = [
  "We get your order",
  "We book in your products",
  "We route your orders",
  "We deliver your order",
];

function OrderJourney(props: Styleable) {
  return (
    <Container className={props.className}>
      {steps.map((step, index) => (
        <>
          <Step>{step}</Step>
          {index < steps.length - 1 && <Arrow />}
        </>
      ))}
    </Container>
  );
}

function Arrow() {
  return <Icon icon={faLongArrowRight} />;
}

const Icon = styled(FontAwesomeIcon)`
  font-size: 34px !important;
  color: rgba(58, 54, 48, 0.1);
`;

const Step = styled.span`
  color: #888075;
  font-size: 14px;
  white-space: nowrap;
  font-weight: bold;
  ${down("md")} {
    font-size: 13px;
  }
  ${down("sm")} {
    font-size: 16px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 80px;
  background: transparent linear-gradient(360deg, #f5f0ea 0%, #e2e0dd 100%) 0%
    0% no-repeat padding-box;
  border-radius: 66px;
  ${down("md")} {
    padding: 30px 30px;
    max-width: 760px;
    align-self: center;
  }
  ${Step} {
    margin-right: 20px;
    ${down("md")} {
      margin-right: 5px;
    }
  };
  ${Icon} {
    margin-right: 20px;
    ${down("md")} {
      margin-right: 5px;
      font-size: 14px !important;
    }
    ${down("sm")} {
      transform: rotate(90deg);
      font-size: 30px !important;
      margin : 10px 0px;
    }
  }
`;
export default styled(OrderJourney)``;
