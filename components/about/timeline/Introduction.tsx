import styled from "styled-components";
import { up } from "styled-breakpoints";

function Introduction() {
  return (
    <Container>
      <Intro>
        <p>
          BJS is a family run distribution and logistics business based in the
          Midlands. We provide the very best customer service at every stage so
          that your products, reputation, clients and peace of mind really are
          safe in our hands.
        </p>
        <p>
          Whether we are loading orders onto vans to deliver to homes, routing
          trucks to distribution centres or moving bricks to building sites - we
          pay attention to the small details however large the load.
        </p>
      </Intro>
    </Container>
  );
}

const Intro = styled.span`
  text-align: center;

  ${up("lg")} {
    width: 50%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
`;

export default Introduction;
