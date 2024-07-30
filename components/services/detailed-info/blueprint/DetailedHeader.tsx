import styled from "styled-components";
import { down } from "styled-breakpoints";

import { Styleable } from "@bjsdistribution/components";

interface Props extends Styleable {
  logo: string;
  title: string;
  year: number;
}

function DetailedHeader(props: Props) {
  return (
    <Container className={props.className}>
      <Logo src={props.logo} />
      <Info>
        <Title>{props.title}</Title>
        <Year>Est. {props.year}</Year>
      </Info>
    </Container>
  );
}

const Logo = styled.img``;

const Title = styled.h1`
  font-family: "Eveleth";
  font-size: 36px;
  margin:0px;
  /* white-space: nowrap; */

  ${down("md")} {
    font-size: 26px;
    white-space: initial;
  }

  ${down("sm")} {
    font-size: 20px;
  }
`;

const Year = styled.span`
  font-size: 18px;
  text-transform: uppercase;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  > :not(:last-child) {
    margin-bottom: 25px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center !important;
  @media only screen and (max-width: 305px) {
    flex-wrap: wrap;
  }

  > :not(:last-child) {
    margin-right: 50px;
  }

  ${down("md")} {
    > :not(:last-child) {
      margin-right: 30px;
    }
  }

  img {
    object-fit: cover;
    image-rendering: -moz-crisp-edges; /* Firefox */
    image-rendering: -o-crisp-edges; /* Opera */
    image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor;
  }
`;

export { Title, Year, Info, Logo };
export default styled(DetailedHeader)``;
