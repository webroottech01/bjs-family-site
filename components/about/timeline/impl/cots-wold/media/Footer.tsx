import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";
import { down } from "styled-breakpoints";

import { borderRadius } from "components/about/timeline/entry/SupportingMedia";

import path from "components/about/timeline/path";
import getClientLogo from "components/util/getClientLogo";

function Footer(props: Styleable) {
  return (
    <Container className={props.className}>
      <img src={`${path}/next-day.svg`} />
      <img src={getClientLogo("cotswold")} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (min-width: 1450px) {
    flex-direction: row;
  }
  flex-direction: column;
  padding: 22px 25px;

  border-bottom-left-radius: ${borderRadius};
  border-bottom-right-radius: ${borderRadius};

  ${down("md")} {
    align-items: center;
    width: 60%;
    flex-direction: row;
  }
  img {
    @media only screen and (min-width: 1450px) {
      width: 50%;
    }
    padding: 0px !important;
    object-fit: scale-down;
  }
`;

export default styled(Footer)``;
