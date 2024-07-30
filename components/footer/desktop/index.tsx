import styled from "styled-components";
import { up, down, only } from "styled-breakpoints";

import Contact from "./Contact";
import Sitemap from "./Sitemap";
import SocialIcons from "../SocialIcons";
import FooterProps from "../FooterProps";
import useIsTabletOrSmaller from "components/util/useIsTabletOrSmaller";

import Image from "next/image";
import footerImage from "public/images/footer/footer-full-width.jpg";

function Footer(props: FooterProps) {
  const isTablet = useIsTabletOrSmaller();
  const isDesktop = !isTablet;

  return (
    <Root className={props.className}>
      <Container>
        <Sitemap {...props} />
        {isDesktop && <SocialIcons />}
        {isDesktop && <Contact {...props.contact} />}
        <FooterMapContainer>
          <FooterImageContainer>
            <Image src={footerImage} layout="fill" />
          </FooterImageContainer>
        </FooterMapContainer>
      </Container>
      <CopyrightNotice>{process.env.NEXT_PUBLIC_FOOTER_TEXT}</CopyrightNotice>
    </Root>
  );
}

const FooterImageContainer = styled.div`
  position: relative;
  width: 1920px; //Base image, means the pointer will remain at the same location
  height: 100%;
`;

const FooterMapContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;
`;

const CopyrightNotice = styled.div`
  font-size: 11px;
  color: #9c9a97;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
`;

const Container = styled.div`
  display: flex;
  background: #fafafa;
  justify-content: space-between;
  padding: 60px;
  position: relative;
  overflow: hidden;

  ${only("md")} {
    padding: 60px 40px 117px 40px;
    margin-bottom: 20px;
  }



  @media only screen and (max-width: 1780px) {
    overflow: visible;
  }

  ${SocialIcons} {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);

    @media only screen and (max-width: 1780px) {
      // position: static;
    }

    @media only screen and (max-width: 1780px) {
      position: absolute;
      left: 150px;
      bottom: -20px;
    }

    @media (orientation: landscape) {
      @media only screen and (max-width: 1024px) {
        bottom: 50px;
        left: 370px;
      }
    }

    ${only("md")} {
      left: 0;
      transform: none;
    }
  }
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;

  ${CopyrightNotice} {
    // margin-top: 60px;
  }
`;

export default Footer;
