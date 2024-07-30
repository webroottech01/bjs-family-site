import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

import Entry, {
  Props as EntryProps,
} from "components/services/expectancy/entry/ImageTitleDescription";

import Image from "next/image";

interface Props extends EntryProps {
  img: StaticImageData;
}

function ServiceEntry(props: Props & Styleable) {
  return (
    <Container className={props.className} title={props.title} description={props.description}>
      <Circle>
        <Image src={props.img} layout="fill" />
      </Circle>
    </Container>
  );
}

const Circle = styled.div`
  min-height: 75px;
  min-width: 75px;
  border-radius: 50%;
  border: 1px solid green;
  background: ${colours.black};
  position: relative;
`;

const Container = styled(Entry)``;
export default styled(ServiceEntry)``;
