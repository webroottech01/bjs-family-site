import { colours } from "@bjsdistribution/components";
import styled from "styled-components";
import { up, down, only } from "styled-breakpoints";
import Page from "components/services/case-study/blueprint";

import { Header, ExplanativeQuote } from "../../blueprint";

import bigFurnitureLogo from "public/images/services/case-study/big-furniture-warehouse/logo.png";
import man from "public/images/services/case-study/big-furniture-warehouse/man-sweating.png";

import Image from "next/image";
import ReadMore from "../../blueprint/ReadMore";
import IntroductionPiece from "../../blueprint/IntroductionPiece";
import LargeQuote from "../../blueprint/LargeQuote";
function ExtraCaseStudy() {
  return (
    <Container>
      <BigFurnitureHeader>
        <IntroductionPiece>
          <LogoContainer>
            <Image
              src={bigFurnitureLogo}
              layout="fixed"
              width={247}
              height={138}
            />
          </LogoContainer>
          <ExplanativeQuote
            description="Our previous delivery partner stopped trading during the first lock down, we had been using them for about 12 months but due to COVID they ceased their home delivery service. We had been looking for a new partner for a few months when a supplier recommended BJS Extra"
            author="Will Norcross, Marketing Executive at Big Furniture Warehouse"
          />
          <Right>
            We got in touch with BJS Extra and were delighted to hear that they
            could offer us exactly the two-man service we wanted for our premium
            products. They understood our service aspirations and we have now
            been working with them since December 2020.
          </Right>
        </IntroductionPiece>
      </BigFurnitureHeader>
      <ReadMore>
        <BottomRow>
          <ImageContainer>
            <Image src={man} layout="fill" />
          </ImageContainer>
          <BottomBody>
            <LargeQuote
              text="We have been really impressed with the big-company service BJS
                Extra has delivered for us and our 10-15 deliveries a week."
            />
            <Benefit>
              A real benefit to our business has been the way the BJS Customer
              Care team book the deliveries directly with our customers, it adds
              convenience and saves time for all parties and is an efficient
              joined up service.
            </Benefit>
            <Link href="https://www.bigfurniturewarehouse.com" target="_blank">
              www.bigfurniturewarehouse.com
            </Link>
          </BottomBody>
        </BottomRow>
      </ReadMore>
    </Container>
  );
}

const Link = styled.a``;
const Benefit = styled.span``;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  > :not(:last-child) {
    margin-right: 100px;
  }

  ${down("md")} {
    flex-direction: column;
    > :not(:last-child) {
      margin-right: 0px;
      margin-bottom: 40px;
    }
  }
`;

const BottomBody = styled.div`
  display: flex;
  flex-direction: column;

  ${LargeQuote} {
    margin-bottom: 35px;
  }
  ${Benefit} {
    margin-bottom: 75px;
  }
`;

const ImageContainer = styled.div`
  min-height: 400px;
  min-width: 700px;
  position: relative;

  @media only screen and (max-width: 1125px) {
    min-width: 530px;
    height: 400px;
  }

  ${down("md")} {
    min-width: 100%;
    max-width: 100%;
  }

  ${down("sm")} {
    min-height: 210px;
    height: 210px;
  }
`;

const LogoContainer = styled.div`
  min-width: 247px;
  min-height: 138px;
  position: relative;
  ${down("sm")} {
    margin-left: auto;
    margin-right: auto;
  }
`;

const Right = styled.div``;

const BigFurnitureHeader = styled(Header)`
  ${down("md")} {
    ${LogoContainer} {
      margin-bottom: 30px;
    }

    flex-direction: column;
  }
  > :not(:last-child) {
    margin-right: 100px;
  }

  ${down("sm")} {
    > :not(:last-child) {
      margin-right: 0px;
      margin-bottom: 0px;
    }

    ${ExplanativeQuote} {
      padding-right: 32px;
      margin-bottom: 40px;
    }
    ${Right} {
      padding-right: 32px;
      margin-bottom: 35px;
    }

    ${ReadMore} {
      margin-top: 40px;
    }
  }
`;

const Container = styled(Page)`
  ${only("md")} {
    > :not(:last-child) {
      margin-bottom: 60px;
    }
  }

  ${BigFurnitureHeader} {
    margin-bottom: 80px;

    ${down("sm")} {
      margin-bottom: 20px;
    }
  }
`;

export default ExtraCaseStudy;
