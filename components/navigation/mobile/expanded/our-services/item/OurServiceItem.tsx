import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import Props from "./Props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/pro-regular-svg-icons";
import Subsidiary from "components/subsidiary-showcase/Subsidiary";

import Image from "next/image";

import homeDelivery from "public/images/header/mobile/services/home-delivery.jpg";
import extra from "public/images/header/mobile/services/extra.jpg";
import haulage from "public/images/header/mobile/services/haulage.jpg";
import constructIT from "public/images/header/mobile/services/construct-it.jpg";

type ItemProps = {
  onClick: () => void;
} & Props &
  Styleable;

function OurServiceItem(props: ItemProps) {
  return (
    <Container className={props.className} onClick={props.onClick}>
      <ImageContainer>
        <CircleImage
          src={getImage(props.subsidiary)}
          layout="fixed"
          width={60}
          height={60}
        />
      </ImageContainer>
      <Body>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </Body>
      <Icon icon={faChevronRight} />
    </Container>
  );
}

const ImageContainer = styled.div`
  position: relative;

  min-height: 60px;
  min-width: 60px;
`;
const CircleImage = styled(Image)`
  border-radius: 50%;
`;

const getImage = (input: Subsidiary): StaticImageData => {
  switch (input) {
    case "home delivery":
      return homeDelivery;
    case "extra":
      return extra;
    case "haulage":
      return haulage;
    case "constructit":
      return constructIT;
  }
};

const Icon = styled(FontAwesomeIcon)`
  margin-left: auto;
`;

const Circle = styled.div`
  min-height: 60px;
  min-width: 60px;
  max-height: 60px;
  border: 1px solid black;
  border-radius: 50%;
`;

const Title = styled.span`
  font-family: "Eveleth";
  font-size: 13px;
`;

const Description = styled.span`
  font-size: 14px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  > :not(:last-child) {
    margin-bottom: 15px;
  }

  color: #57534e;
`;

const Container = styled.div`
  display: flex;
  > :not(:last-child) {
    margin-right: 20px;
  }
  width: 100%;
`;

export default OurServiceItem;
