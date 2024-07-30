import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import getClientLogo, {
  Client,
  richerSoundsWide,
} from "components/util/getClientLogo";
import { up, down } from "styled-breakpoints";

interface Props {
  clients: Client[];
}

function PartnerShowcase({ className, clients }: Props & Styleable) {
  const isEven = clients.length % 2 === 0;
  if (isEven) {
    throw new Error("Amount of clients must be odd!");
  }

  const maxWidth = Math.max.apply(
    Math,
    clients.map(getDimensions).map((dimensions) => dimensions[0])
  );
  return (
    <Container className={className}>
      {clients.map((client) => {
        const [width, height] = getDimensions(client);
        const src = getLogo(client);
        return (
          <LogoContainer width={maxWidth} key={client}>
            <Logo src={src} width={width} height={height} />
          </LogoContainer>
        );
      })}
    </Container>
  );
}

const getOppositeIndex = (ourIndex: number, clients: Client[]): number => {
  const half = clients.length / 2;
  const lowerBoundHalf = half - 0.5;
  if (ourIndex === lowerBoundHalf) {
    console.log("Middle identified as " + ourIndex);
    return -1;
  }
  const isLower = ourIndex < lowerBoundHalf;
  if (isLower) {
    return clients.length - ourIndex;
  }
  const differenceToHalf = Math.abs(half - ourIndex - 1);
  const upperDiff = half - differenceToHalf;
  return upperDiff;
};

const LogoContainer = styled.div<{ width: number }>`
  ${up("lg")} {
    width: ${(props) => props.width}px;
  }
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const getLogo = (client: Client): string => {
  if (client == "richer sounds") {
    return richerSoundsWide;
  }
  return getClientLogo(client);
};

const getDimensions = (input: Client): [number, number?] => {
  switch (input) {
    case "MADE":
      return [100, 24];
    case "richer sounds":
      return [199, 30];
    case "wayfair":
      return [207, 45];
    case "timeforsleep":
      return [218, 55];
    case "cotswold":
      return [175, 65];
    default:
      return [200, 200];
  }
};

const TestLogo = styled.div`
  width: 100px;
  height: 100;
  border: 1px solid blue;
`;

const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding: 20px 10px;
  ${down("md")} {
    > :nth-child(n+5) {
      display: none;
    }


    grid-template-columns: repeat(4, auto);
    overflow: hidden;
  }
  ${down("sm")} {
    > :nth-child(n+4) {
      display: none;
    }
    grid-template-columns: repeat(3, auto);
    overflow: hidden;
    align-items: center;
  }

  @media only screen and (max-width: 380px) {
    > :nth-child(n+3) {
      display: none;
    }
    grid-template-columns: repeat(2, auto);
  }
`;
const Logo = styled.img<{ height?: number; key?: string }>`
  width: auto;
  height: ${(props) => props.height ?? 50}px;
  max-width: 180px;
  margin: 0 auto;
  ${down("md")} {
    max-width: 150px;
  }
  ${down("sm")} {
    max-width: 115px;
    height: ${(props) => (props.height == 17 ? 18 : 24)}px;
    width: auto;
    object-fit: contain;
  }
`;
export default PartnerShowcase;
