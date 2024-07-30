import styled from "styled-components";

import { down, only } from "styled-breakpoints";
import { Styleable } from "@bjsdistribution/components";

import starIcon from "public/images/feedback/trustpilot-star-white.png";
import { createStarRatingArray } from "./utils";
// import Image from "next/image";

interface StarRatingProps {
  rating: number;
}

function StarRating(props: StarRatingProps & Styleable) {
  const ratingArr = createStarRatingArray(props.rating);
  return (
    <Container className={props.className}>
      {[...Array(5).keys()].map((index) => (
        <Star key={index} rating={ratingArr[index]} />
      ))}
    </Container>
  );
}

function Star(props: StarRatingProps) {
  return (
    <BoxContainer>
      <Box style={{ width: `${props.rating * 100}%` }}>
        {/* <Image src={starIcon} layout="fixed" height={30} width={30} />
         */}
      </Box>
      <Image src={starIcon.src} alt="star" height={50} width={50} />
    </BoxContainer>
  );
}

const Image = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;

const BoxContainer = styled.div`
  height: 75px;
  width: 75px;
  position: relative;
  background: #dcdce6;
`;

const Box = styled.div`
  height: 75px;
  width: 40px;
  background: #00b67a;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  /*
  ${only("md")} {
    height: 25px;
    width: 25px;
  }
  ${down("sm")} {
    height: 40px;
  }*/
`;

const Container = styled.div`
  display: flex;
  gap: 7px;

  // > :not(:last-child) {
  //   margin-right: 10px;
  // }
`;

export default styled(StarRating)``;
