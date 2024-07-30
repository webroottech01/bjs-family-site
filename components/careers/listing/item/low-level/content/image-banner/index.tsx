import styled from "styled-components";
import { down } from "styled-breakpoints";
import { Styleable, colours } from "@bjsdistribution/components";
import {motion} from "framer-motion";

import useListingItem from "components/careers/listing/item/useListingItem";

const IMAGE_HEIGHT = 286;

function ImageBanner(props: Styleable) {
  const listing = useListingItem();
  if (!listing) {
    return null;
  }

  const banner = listing.banner;

  return (
    <Container className={props.className} layout>
      {banner.map((image, index) => {
        return <img src={image} height={IMAGE_HEIGHT} />;
      })}
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  gap: 9px;
  justify-content: center;
  overflow: scroll;

  position: absolute;
  top: -${IMAGE_HEIGHT / 2}px;
  left: 0;
  right: 0;

  ${down("sm")} {
    position: static;
    // display: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default styled(ImageBanner)``;
