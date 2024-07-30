import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { motion } from "framer-motion";

import { faChevronRight } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ExpandedEntryProps from "./menu-item-props";
import Image from "next/image";

function AboutUsItem(props: ExpandedEntryProps & Styleable) {
  return (
    <Container className={props.className} onClick={props.onClick} layout="position">
      <ImageContainer>
        <CircleImage
          className={props.className}
          width={60}
          height={60}
          layout="fixed"
          src={props.image.src}
        />
      </ImageContainer>
      <Title>{props.name}</Title>
      <Icon icon={faChevronRight} />
    </Container>
  );
}

const Icon = styled(FontAwesomeIcon)`
  font-size: 18px;
  margin-left: auto;
`;

const Title = styled.span`
  color: #57534e;
  text-transform: capitalize;
`;

const ImageContainer = styled.div``;
const CircleImage = styled(Image)`
  border-radius: 50%;
`;

const Circle = styled.div`
  min-height: 60px;
  min-width: 60px;
  border-radius: 50%;
  border: 1px solid black;
`;

const Container = styled(motion.div)`
  display: flex;
  align-items: center;

  ${ImageContainer} {
    margin-right: 20px;
  }
`;

export default AboutUsItem;
