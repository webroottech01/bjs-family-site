import styled from "styled-components";
import { down } from "styled-breakpoints";
import { Button, colours } from "@bjsdistribution/components";

import { ISlideProps } from "pages/api/handler/Types";

function Slide(props: ISlideProps) {
  const { slide } = props;
  if (!slide) {
    return null;
  }
  console.log(slide);
  return (
    <Container>
      <Brand>
        <Avatar height={97} width={97} src={slide.author.url} />
        {/* <BrandImg height={28} src={slide.media_logo.url} /> */}
      </Brand>
      <SlideContent>
        <Title>{slide.excerpt}</Title>
        <Button id="util-go-to-full-story" wide>
          <a href={slide.link} target="_blank" referrerPolicy="no-referrer">
            Full story
          </a>
        </Button>
      </SlideContent>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  background: #fff;
  max-width: 480px;
  min-width: 480px;
  @media only screen and (min-width: 1500px) and (max-width: 1700px) {
    max-width: 400px;
    min-width: unset;
  }
  @media only screen and (min-width: 1300px) and (max-width: 1500px) {
    max-width: 350px;
    min-width: unset;
  }
  @media only screen and (max-width: 1300px) {
    flex: 1;
    max-width: 580px;
    min-width: unset;
  }
  ${down("md")} {
    margin-right: 0px;
    max-width: 480px;
  }
  ${down("sm")} {
    flex-direction: column;
  }
  ${Button.PlainButton} {
    max-width: 190px;
    min-width: 190px;
    z-index: 999;
    @media only screen and (min-width: 1300px) and (max-width: 1500px) {
      max-width: 190px;
      min-width: 190px;
      font-size: 14px;
    }
    ${down("sm")} {
      margin-bottom: 
      40px;
    }
  }
  animation-duration: 0.5s;
  animation-name: animate-fade;
  animation-delay: 0.2s;
  animation-fill-mode: backwards;
  @keyframes animate-fade {
    0% { opacity: 0.7; }
    100% { opacity: 1; }
  }
`;
const Brand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-right: 1px solid rgba(58, 54, 48, 0.2);
  margin: 30px 0px;
  gap: 24px;
  ${down("sm")} {
    margin: 36px 20%;
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(58, 54, 48, 0.2);
    border-right: none;
  }
  // @media only screen and (min-width: 1024px) and (max-width: 1350px) {
  //   margin: 15px 0px;
  // }
`;
const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0px 40px;
  @media only screen and (min-width: 1300px) and (max-width: 1500px) {
    padding: 0px 20px;
  }
  ${down("sm")} {
    justify-content: center;
    padding: 0px 40px;
    align-items: center;
    gap: 30px;
    text-align: center;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;
const Title = styled.div`
  font-size: 15px;
  max-width: 170px;
  min-height: 45px;
  color: ${colours.black};
  ${down("md")} {
    max-width: unset;
  }
`;
const FullStory = styled.button`
  background: ${colours.black};
  font-size: 16px;
  font-family: "Eveleth";
  font-weight: 950;
  color: white;
  text-transform: uppercase;
  height: 56px;
  border-radius: 30px;
  @media only screen and (min-width: 1024px) and (max-width: 1350px) {
    font-size: 13px;
    font-weight: 600;
  }
  ${down("sm")} {
    margin-bottom: 20px;
    width: 100%;
  }
`;
const Avatar = styled.img`
  margin: 8px 40px;
  border-radius: 50%;
  object-fit: cover;
  @media only screen and (min-width: 1500px) and (max-width: 1700px) {
    margin: 8px 20px;
  }
  @media only screen and (min-width: 1300px) and (max-width: 1500px) {
    width: 70px;
    height: 70px;
    margin: 8px 20px;
  }
`;
const BrandImg = styled.img`
  width: auto;
  object-fit: contain;
`;
export default Slide;
