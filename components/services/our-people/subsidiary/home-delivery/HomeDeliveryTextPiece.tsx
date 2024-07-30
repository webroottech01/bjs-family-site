import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { down } from "styled-breakpoints";

function HomeDeliveryTextPiece(props: Styleable) {
  return (
    <Container className={props.className}>
      <FirstPiece />
      <SecondPiece />
    </Container>
  );
}

function FirstPiece() {
  return (
    <First>
      <p>
        We value the <b>whole customer experience</b>, and we aim to meet the
        highest standards across a wide variety of tasks. That’s why we’ve
        created our own dedicated training academy – ensuring that our delivery
        teams have all the skills required to provide the very best service
        experience for your customers.
      </p>
      <p>
        Our people are our product, so the whole team undertake a tailored
        training programme to provide the very best delivery service standards.
      </p>
    </First>
  );
}

function SecondPiece() {
  return (
    <Second>
      <p>
        Our training includes furniture handling, furniture building, exacting
        Health & Safety standards as well as all the little things that make a
        big difference for your customers.
      </p>
      <p>
        All in all, we're constantly looking for staff who are genuinely
        people-centric, or in other words... really, really nice.
      </p>
    </Second>
  );
}
const Container = styled.div`
  display: flex;
  gap: 100px;

  @media only screen and (max-width: 1895px) {
    gap: 40px;
  }

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    gap: 0px;
  }
`;

const Piece = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 500px;

  @media only screen and (max-width: 1850px) {
    max-width: 30%;
  }

  @media only screen and (max-width: 1720px) {
    max-width: 28%;
  }

  @media only screen and (max-width: 1450px) {
    max-width: 25%;
  }

  @media only screen and (max-width: 1315px) {
    max-width: 20%;
  }

  @media only screen and (max-width: 1200px) {
    max-width: 47%;
  }

  @media only screen and (max-width: 1090px) {
    max-width: 40%;
  }

  ${down("md")} {
      max-width: 100%;
  }

  p {
    margin-bottom: 20px;
  }


`;
const First = styled(Piece)``;
const Second = styled(Piece)``;

export default HomeDeliveryTextPiece;
