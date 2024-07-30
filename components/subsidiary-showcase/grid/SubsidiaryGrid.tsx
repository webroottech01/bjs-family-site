import { Styleable } from "@bjsdistribution/components";
import { up, down, only } from "styled-breakpoints";

import Image from "next/image";
import styled from "styled-components";
import { AnimateSharedLayout } from "framer-motion";

import Container from "./SubsidiaryGridContainer";
import SubsidiaryElement from "./SubsidiaryElement";

import Subsidiary from "components/subsidiary-showcase/Subsidiary";
import { Optional as OptionalSelectedSubsidiary } from "./SelectedSubsidiaryProps";

function SubsidiaryGrid(props: Styleable) {
  return (
    <AnimateSharedLayout>
      <Container className={props.className}>
        <HomeDelivery />
        <BjsExtra />
        <BjsHaulage />
        <ConstructIT />
      </Container>
    </AnimateSharedLayout>
  );
}

function HomeDelivery(props: Styleable) {
  return (
    <SubsidiaryElement name="home delivery" className={props.className}>
      <HomeDeliveryContainer alt="BJS Home Delivery logo" src={"/images/logos/homedelivery.svg"} />
    </SubsidiaryElement>
  );
}

const HomeDeliveryContainer = styled.img`
  position: relative;

  height: 50px;
`;

function BjsExtra(props: Styleable) {
  return (
    <SubsidiaryElement name="extra" className={props.className}>
      <ExtraContainer>
        <Image src="/images/logos/extra.svg" alt="BJS Extra logo" layout="fill" />
      </ExtraContainer>
    </SubsidiaryElement>
  );
}

const ExtraContainer = styled.div`
  position: relative;
  width: 100%;
  height: 52px;
`;

function BjsHaulage(props: Styleable) {
  return (
    <SubsidiaryElement name="haulage" className={props.className}>
      <HaulageContainer>
        <Logo src="/images/logos/haulage.svg" alt="BJS Haulage logo" layout="fill" />
      </HaulageContainer>
    </SubsidiaryElement>
  );
}

const HaulageContainer = styled.div`
  position: relative;

  height: 48px;
  width: 70px;
`;

function ConstructIT(props: Styleable) {
  return (
    <SubsidiaryElement name="constructit" className={props.className}>
      <Logo src="/images/logos/constructit.svg" alt="ConstructIT logo" height={40} width={140} />
    </SubsidiaryElement>
  );
}

const Logo = styled(Image)`
  image-rendering: -moz-crisp-edges; /* Firefox */
  image-rendering: -o-crisp-edges; /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor;
`;

export default styled(SubsidiaryGrid)``;
