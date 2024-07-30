import styled from "styled-components";
import FooterProps from "../FooterProps";
import SitemapDropdown from "./item";
import Phone from "./Phone";
import Sale  from "./Phone";
import SocialIcons, { Icon as SocialIcon } from "../SocialIcons";
import { up, down } from "styled-breakpoints";

import Map from "../map";

const email = "hello@bjsfamily.com";

function MobileFooter(props: FooterProps) {
  return (
    <Container>
      <SitemapContainer>
        {props.sitemap.map((entry) => (
          <SitemapDropdown key={entry.title} item={entry} />
        ))}
      </SitemapContainer>
      <MapContainer>
        <Label>Sales:</Label>
        <Sale number={props.contact.saleNumber} />
        <Label>Customer Service:</Label>
        <Phone number={props.contact.phoneNumber} />
        <Email href={`mailto:${email}`}>{email}</Email>
        <Map />
      </MapContainer>
      <SocialIcons />
      <CopyrightNotice>
        {process.env.NEXT_PUBLIC_FOOTER_TEXT}
      </CopyrightNotice>
    </Container>
  );
}

const Email = styled.a`
  font-size: 16px;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
`;
const Label = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 22px;
`;

const MapContainer = styled.div`
  position: relative;
  // height: 125px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 10px;

  ${Map}, ${Phone}, ${Email} {
    // position: absolute;
    width: 100%;
  }

  ${Phone} {
    z-index: 6;
    margin-bottom: 0px !important;
    margin-top: 10px;
  }
  ${Sale} {
    z-index: 6;
    margin-top: 0px;
    margin-bottom: 0px !important;
  }

  ${Email} {
    z-index: 6;
    margin-bottom: 20px;
  }
`;

const SitemapContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fafafa;

  ${SitemapDropdown}:first-child {
    border-top: 1px solid rgb(0, 0, 0, 0.1);
  }

  ${SitemapDropdown} {
    border-bottom: 1px solid rgb(0, 0, 0, 0.1);
  }
`;

const CopyrightNotice = styled.span`
  color: rgba(58, 54, 48, 0.5);
  text-align: center;

  font-size: 12px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${Phone} {
    margin-bottom: 20px;
    justify-content: center;
  }

  ${SocialIcons} {
    justify-content: center;
    margin-bottom: 40px;
  }

  ${SocialIcon} {
    background: black;
  }

  ${down("xs")} {
    padding-bottom: 50px;
  }
`;

export default MobileFooter;
