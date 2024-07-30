import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { down } from "styled-breakpoints";

function Intro(props: Styleable) {
  return (
    <Container className={props.className}>
      <p>
        Over the last 5 years, BJS has developed and deployed its own technology
        within our warehouses and distribution centres.
      </p>
      <p>
        BJS records a digital journey of all goods coming into our care and our
        technology helps to power an efficient warehouse process allowing us to
        continue scaling and delivering the very best service we can.
      </p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width : 1000px;
  p {
    margin: 0;
  }
`;
export default styled(Intro)``;
