import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import Image from "next/image";

import prideVan from "public/images/about/charity-and-community/pride-truck.jpg";
import { down } from "styled-breakpoints";

function EducateOutPrejudice(props: Styleable) {
  return (
    <Container className={props.className}>
      <TitleContainer>
        <TitleEdu>Educate</TitleEdu>
        <TitleOUT>&nbsp;out<OutBar /></TitleOUT>
        <Title>&nbsp;prejudice</Title>
      </TitleContainer>
      <Subtitle>
        BJS Haulage are also proud to show their support for PRIDE, creating a
        bespoke rainbow truck to help educate out prejudice and make LGBT+
        people, in all their rich diversity, visible.
      </Subtitle>
      <ImageContainer>
          <Image src={prideVan} layout="responsive" quality={100}/>
      </ImageContainer>
    </Container>
  );
}

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  ${down("sm")} {
    flex-direction: column;
  }
`;
const ImageContainer = styled.div`
    width: 100%;
    position: relative;
    max-width: 1000px;
`;

const Title = styled.span`
  font-family: "Eveleth";
  font-size: 80px;
  text-align: center;
  ${down("sm")} {
    font-size: 50px;
  }
  ${down("md")} {
    font-size: 48px;
  }
`;
const TitleEdu = styled(Title)`
  ${down("sm")} {
    font-size: 64px;
  }
`;
const OutBar = styled.div`
  background: transparent linear-gradient(90deg, #CF69E9 0%, #FC95FE 100%) 0% 0% no-repeat padding-box;
  height: 10px;
  position: absolute;
  width: 85%;
  margin-top: 7.5px;
  ${down("sm")} {
    width: 59%;
    margin-left: 5px;
    background: transparent linear-gradient(90deg, #7383DF 0%, #A257DB 13%, #C761E5 29%, #EC85F7 47%, #F891FD 53%, #FD97F1 59%, #FD9BD4 67%, #FEA39D 78%, #FEA67D 86%, #FEA657 94%, #FD9E58 100%) 0% 0% no-repeat padding-box;
  }
`
const TitleOUT = styled(Title)`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  ${down("sm")} {
    font-size: 90px;
    line-height: 0.75;
  }
`

const Subtitle = styled.span`
  font-size: 20px;
  text-align: center;
  max-width: 105ch;
  ${down("sm")} {
    font-size: 16px;
  }
`;

const Container = styled.div`
  color: white;
  background: transparent
    linear-gradient(
      89deg,
      #ffcf0d 0%,
      #21d4e9 17%,
      #af4ad9 35%,
      #fc95ff 53%,
      #ffac58 70%,
      #f55555 87%,
      #ff4444 100%
    )
    0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 75px 40px 90px 40px;
  ${down("sm")} {
    padding: 10px;
  }

  ${Title} {
    margin-bottom: 10px;
  }
  ${Subtitle} {
      margin-bottom: 65px;
  }
`;
export default EducateOutPrejudice;
