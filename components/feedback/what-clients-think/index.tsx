import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

import {
  Container as NativeContainer,
  Header,
  Title,
  DoubleArrow,
} from "components/feedback/what-customers-think/WhatCustomersThink";
import Image from "next/image";
import getClientLogo from "components/util/getClientLogo";

import ClientTestimonial from "./ClientTestimonial";

function WhatClientsThink(props: Styleable) {
  return (
    <Container className={props.className}>
      <Header>
        <Title>What our clients think</Title>
      </Header>
      <WienerBergerLogo
        src={getClientLogo("wienerberger")}
        layout="fixed"
        width={254}
        height={82}
      />
      <ClientTestimonial
        testimony="We are pleased to announce our partnership with Construct IT. Whilst only in their infancy as a mechanical off-load supplier, they have shown themselves to be a reliable service provider and we believe they will be a great asset to our haulier network. We look forward to growing together in the future."
        testifier="Gavin Atkins, Head of Logistics at Wienerberger"
      />
    </Container>
  );
}

const WienerBergerLogo = styled(Image)``;

const Container = styled(NativeContainer)`
  ${ClientTestimonial} {
    margin-top: 80px;
  }

  ${Title} {
      margin-bottom: 30px; //For now whilst there are no double arrows
  }
`;

export default styled(WhatClientsThink)``;
