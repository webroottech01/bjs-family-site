import Container, {
  Double,
  Large,
  Entry,
} from "components/services/image-showcase/blueprint/Container";
import styled from "styled-components";

import getPath from "./getPath";
import { Styleable } from '@bjsdistribution/components';

const basePath = getPath("haulage");

function HaulageImageShowcase(props: Styleable) {
  return (
    <Container className={props.className}>
      <Double>
        <Entry src={`${basePath}/haulage-services.jpg`} />
        <Entry src={`${basePath}/newspaper.jpg`} />
      </Double>
      <Large src={`${basePath}/truck-rear-quarter.jpg`} />
      <Double>
        <Entry src={`${basePath}/truck-models.jpg`} />
        <Entry src={`${basePath}/hgv-van.jpg`} />
      </Double>
      <Large src={`${basePath}/extra-smile.jpg`} />
    </Container>
  );
}

export default styled(HaulageImageShowcase)``;
