import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import outsideImage from "/public/images/about/charity-and-community/x-men.jpg";
import mirrorImage from "/public/images/about/charity-and-community/people-in-mirrors.jpg";

import loadsOfPeople from "/public/images/about/charity-and-community/loads-of-people.jpg";
import { down } from "styled-breakpoints";

function ImageCollage(props: Styleable) {
  return (
    <Container className={props.className}>
      <OutsideImageContainer>
        <Image src={outsideImage.src} height={294} width={439} />
      </OutsideImageContainer>
      <MirrorImageContainer>
        <Image src={mirrorImage.src} height={355} width={534} />
      </MirrorImageContainer>
      <GroupImageContainer>
        <Image
          src={loadsOfPeople.src}
          height={355}
          width={534}
        />
      </GroupImageContainer>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 753px;
  width: 55%;
  display: flex;
  align-items: flex-end;
  max-width: 780px;
  ${down("md")} {
    width: 100%;
    max-height: 550px;
  }
  ${down("sm")} {
    overflow: hidden;
    margin-top: 50px;
  }
`;
const Image = styled.img`
`

const ImageContainer = styled.div`
  position: absolute;
`;

const OutsideImageContainer = styled(ImageContainer)`
  top: 31px;
  left: 0px;
  ${Image} {
    height: 250px;
    width: auto;
  }
`;

const MirrorImageContainer = styled(ImageContainer)`
  right: 0px;
  top: 0px;
  z-index: 3;
  ${Image} {
    height: 270px;
    width: auto;
  }
`;

const GroupImageContainer = styled(ImageContainer)`
  top: 251px;
  left: 50%;
  transform: translate(-50%, 0);
  ${Image} {
    height: 300px;
    width: auto;
  }
`;

export default ImageCollage;
