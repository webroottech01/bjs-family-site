import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";
import getPath from './getPath';
import Container, {
  Double,
  Large,
  Entry,
} from "components/services/image-showcase/blueprint/Container";

const basePath = getPath("home delivery");


function HomeDeliveryImageShowcase(props: Styleable) {
  return (
    <Container className={props.className}>
      <Double>
        <Entry src={`${basePath}/holding-box-looking-at-van.jpg`} />
        <Entry src={`${basePath}/measuring-box.jpg`} />
      </Double>
      <Large src={`${basePath}/old-man.jpg`} />
      <Double>
        <Entry src={`${basePath}/holding-sofa.jpg`} />
        <Entry src={`${basePath}/two-box.jpg`} />
      </Double>
      <Large src={`${basePath}/man-woman.jpg`} />
    </Container>
  );
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 2fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "a c d f"
    "b c e f";
`;

export default styled(HomeDeliveryImageShowcase)``;
