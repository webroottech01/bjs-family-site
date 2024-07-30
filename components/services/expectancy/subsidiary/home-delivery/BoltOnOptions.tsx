import styled from "styled-components";
import { Abstract } from "components/services/expectancy/entry";
import BoltOnImage from "./BoltOnImage";

import roomOfChoice from "public/images/services/homedelivery/bolt-on-options/room-of-choice.png";
import wellBuilt from "public/images/services/homedelivery/bolt-on-options/well-built.png";
import packagingRemoval from "public/images/services/homedelivery/bolt-on-options/packaging-removal.png";

import oldFurniture from "public/images/services/homedelivery/bolt-on-options/old-furniture.png";

function BoltOnOptions() {
  return (
    <Abstract title="bolt-on options">
      Above and beyond our standard 'delivery to the door' service at a
      convenient time, we offer several 'bolt-on' options to provide additional
      help for your customers - all to ensure their delivery experience matches
      your own high standards, again and again.
      <ImageContainer>
        <BoltOnImage
          title="room of choice"
          description={
            "Delivering to a room of choice, carefully, safely and without damage or fuss."
          }
          image={roomOfChoice}
        />
        <BoltOnImage
          title="well built & installed"
          description={
            "Our trained delivery team can correctly build and install furniture and electrical items."
          }
          image={wellBuilt}
        />
        <BoltOnImage
          title="packaging removal"
          description={
            "Our teams can also dispose of all product packaging with our own recycling facility."
          }
          image={packagingRemoval}
        />
        <BoltOnImage
          title="old furniture removal"
          image={oldFurniture}
          description={
            "Finally, we not only deliver hard-to-handle items but can take them away too."
          }
        />
      </ImageContainer>
    </Abstract>
  );
}

const ImageContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  > :not(:last-child) {
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 1200px) {
    margin-top: 40px;
  }
`;

export default BoltOnOptions;
