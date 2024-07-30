import styled from "styled-components";

import haulageBackground from "public/images/about/charity-and-community/haulage.jpg";
import Image from "next/image";

function HaulageBackground() {
  return <OptimizedImage/>;
}

const BaseImage = styled(Image)`
 // filter: brightness(50%);
`;

function OptimizedImage() {
  return (
    <BaseImage
      src={haulageBackground}
      layout="fill"
      width={1920}
      quality={100}
      priority
    />
  );
}

function PlainImage() {
  return (
    <img
      src={haulageBackground.src}
      width={"100%"}
      style={{
        position: "absolute",
      }}
    />
  );
}

export default HaulageBackground;
