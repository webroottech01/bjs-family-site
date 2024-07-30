import styled from "styled-components";
import { Styleable, colours, Button } from "@bjsdistribution/components";
import { down } from "styled-breakpoints";
import backgroundImg from "public/images/about/our-technology/backgrounds_Onboarding.jpg";
import TalkToUsButton from "components/talk-to-us/button";

function TalkLandscape(props: Styleable) {
  return (
    <Container className={props.className}>
      <LeftContainer>
        <TitleContainer>
          <Line />
          <Title>Onboarding with BJS</Title>
          <Line />
        </TitleContainer>
        <SubHead>couldn't be easier!</SubHead>
      </LeftContainer>
      <RightContainer>
        <Disclaimer>
          Discuss your requirements in further detail with our team...
        </Disclaimer>
        <TalkToUsButton desktop />
      </RightContainer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  padding: 27px;
  flex-direction: row;
  background-size: cover;
  background-position: right;
  border-radius: 20px;
  margin-top: 40px;
  width: 100%;
  justify-content: space-between;
  background-image: url(${backgroundImg.src});
  ${Button.PlainButton} {
    width: 182px;
    font-size: 14px;
    background-color: #feba30;
    color: #5F5D5B;
    border: none;
    :hover {
      background-color: #fff;
      color: #5F5D5B !important;
    }
  }
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1200px) {
    justify-content: center;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
const Title = styled.div`
  font-family: "Eveleth";
  font-size: 20px;
  color: #feba30;
  text-transform: uppercase;
`;
const Line = styled.div`
  width: 17px;
  height: 2px;
  background: #feba30 0% 0% no-repeat padding-box;
  border-radius: 66px;
`;
const SubHead = styled(Title)`
  background: #3a3630 0% 0% no-repeat padding-box;
  border-radius: 6px;
  color: #fff;
  font-size: 25px;
  color: #ffffff;
  margin-top: 8px;
  text-align: center;
`;
const TextContent = styled.div`
  font-size: 16px;
  color: #ffffff;
  margin-top: 20px;
`;
const Disclaimer = styled.div`
  color: rgba(255, 255, 255, 0.65);
  font-size: 14px;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    max-width: 273px;
    align-items: end;
    text-align: right;
  }
`;
export default styled(TalkLandscape)``;
