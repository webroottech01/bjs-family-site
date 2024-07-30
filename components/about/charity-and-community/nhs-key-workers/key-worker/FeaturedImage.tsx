import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

interface Props extends Styleable {
  image: StaticImageData;
}

function FeaturedImage({ image, className }: Props) {
  return <Image src={image.src} className={className} />;
}

const Image = styled.img`
  height: 125px;
  width: 125px;
  border-radius: 50%;
  border: 2px solid #005eb8;
`;

export default styled(FeaturedImage)``;
