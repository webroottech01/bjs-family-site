import styled from "styled-components";
import { motion } from "framer-motion";
import { up, down } from "styled-breakpoints";
import { Styleable, colours } from "@bjsdistribution/components";

import IntroductionPiece from "./content/introduction-piece";

import MainBody from "./content/main-body";

import CloseFooter from "./close-footer";

import ImageBanner from "components/careers/listing/item/low-level/content/image-banner";

type Props = {
  close: () => void;
  apply: () => void;
} & Styleable;

function ExpandedItem(props: Props) {
  return (
    <Container className={props.className} layout>
      <ImageBanner />
      <IntroductionPiece />
      <MainBody />
      <CloseFooter close={props.close} apply={props.apply} />
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;

  ${CloseFooter} {
    position: sticky;
    bottom: 0;
  }
`;

export default ExpandedItem;
