import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";

type Props = {
  image: StaticImageData;
} & Styleable;

function ImageAvatar(props: Props) {
  return (
    <Container className={props.className} src={props.image.src} />
  );
}

const Container = styled.img`
  min-height: 300px;
  max-height: 300px;
  min-width: 300px;
  max-width: 300px;
  border-radius: 50%;
`;


export default styled(ImageAvatar)``