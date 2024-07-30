import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/pro-solid-svg-icons";
import fivestarIcon from "public/images/feedback/trustpilot-ratings-5star.png";

// type Props = { stars: number };

function FeedbackStars(props: Styleable) {
  return (
    <Container className={props.className}>
      {/* {Array.from(Array(props.stars).keys()).map((value) => (
        <Star key={value} icon={faStar} />
      ))} */}
      <Image src={fivestarIcon.src} alt="star" height={50} />
    </Container>
  );
}

const Image = styled.img`
  max-width: 100%;
  margin-bottom: 22px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;
`;

const Star = styled(FontAwesomeIcon)`
  font-size: 26px !important;
  color: ${colours.yellow};

  @media only screen and (max-width: 1600px) {
    font-size: 30px !important;
  }
`;

export default styled(FeedbackStars)``;
