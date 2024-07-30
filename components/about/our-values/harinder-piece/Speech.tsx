import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import {down} from "styled-breakpoints";

function Speech(props: Styleable) {
  return (
    <Container className={props.className}>
      <p>
        Who we are as people, our values and emotional needs, shouldn’t be
        ignored within the world of work. There is no division in our hearts
        before you start work and after you sit at your desk or the cab of a
        truck or van.
      </p>
      <p>
        By respecting our team and treating them with compassion and kindness
        they are better able to continue that conduct to the benefit of everyone
        they encounter, including my customers. It is what has set us apart as a
        business.
      </p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 22px;
  font-style: italic;
  color: white;
  justify-content: space-between;

  ${down("md")} {
    padding: 40px;
  }
  ${down("sm")} {
    padding: 0px 20px;
    font-size: 14px;
    margin-bottom: 40px;
  }
`;
export default Speech;
