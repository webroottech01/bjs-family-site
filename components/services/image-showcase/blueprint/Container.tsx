import styled from "styled-components";
import { up, down } from "styled-breakpoints";
import Image from "next/image";
interface Props {
  src: string | StaticImageData;
}

const EntryContainer = styled.div`
  position: relative;
  height: 310px;
  width: 310px;

  @media only screen and (min-width: 1921px) {
    height: 461px;
    width: 461px;
  }

  ${down("sm")} {
    height: 205px;
    width: 205px;
  }
`;

function Entry({ src }: Props) {
  return (
    <EntryContainer>
      <Image src={src} layout="fill" />
    </EntryContainer>
  );
}

const LargeContainer = styled.div`
  position: relative;
  min-height: 633px;
  min-width: 633px;

  @media only screen and (min-width: 1921px) {
    min-height: 840px;
    min-width: 840px;
  }

  ${down("sm")} {
    min-height: 428px;
    min-width: 428px;
  }
`;

function Large({ src }: Props) {
  return (
    <LargeContainer>
      <Image src={src} layout="fill" />
    </LargeContainer>
  );
}

const Container = styled.div`
  display: flex;
  > :not(:last-child) {
    margin-right: 11px;
  }
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Double = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 2fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "a c d f"
    "b c e f";
`;

export { Entry, Large, Double };
export default Container;
