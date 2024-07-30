import Container, {
  Double,
  Large,
  Entry,
} from "components/services/image-showcase/blueprint/Container";
import styled from "styled-components";

import getPath from "./getPath";
import { Styleable } from "@bjsdistribution/components";

const basePath = getPath("constructit");

function ConstructITImageShowcase(props: Styleable) {
  return (
    <Container className={props.className}>
      <Double>
        <Entry src={`${basePath}/logo-walking.jpg`} />
        <Entry src={`${basePath}/working-van.jpg`} />
      </Double>
      <Large src={`${basePath}/van.jpg`} />
      <Double>
        <Entry src={`${basePath}/loading-van.jpg`} />
        <Entry src={`${basePath}/side-view.jpg`} />
      </Double>
      <Large src={`${basePath}/looking-at-van.jpg`} />
    </Container>
  );
}

export default styled(ConstructITImageShowcase)``;
