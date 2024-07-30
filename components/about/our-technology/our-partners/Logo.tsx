import Image from "next/image";
import styled from "styled-components";

interface Props {
  height: number;
  width: number;
  image: StaticImageData;
}

function Logo(props: Props) {
  return (
    <Container {...props}>
      <Image src={props.image} layout="fill" />
    </Container>
  );
}

const Container = styled.div<{ height: number; width: number }>`
  position: relative;
  min-height: ${(props) => props.height}px;
  min-width: ${(props) => props.width}px;
  mix-blend-mode: darken;
`;

export default Logo;
