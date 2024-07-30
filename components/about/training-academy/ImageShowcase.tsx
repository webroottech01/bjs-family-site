import Container, {
  Double,
  Large,
  Entry,
} from "components/services/image-showcase/blueprint/Container";
import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

const basePath = "/images/about/training-academy/image-showcase";

function ImageShowcase(props: Styleable) {
  return (
    <Container className={props.className}>
      <Double>
        <Entry src={`${basePath}/showing-paper.png`} />
        <Entry src={`${basePath}/projector.png`} />
      </Double>
      <Large src={`${basePath}/installing-bed.png`} />
      <Double>
        <Entry src={`${basePath}/outside-building.png`} />
        <Entry src={`${basePath}/holding-screws.png`} />
      </Double>
      <Large src={`${basePath}/fake-house.png`} />
    </Container>
  );
}

export default ImageShowcase;
