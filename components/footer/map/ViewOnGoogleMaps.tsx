import styled from "styled-components";
import { Styleable, Button } from "@bjsdistribution/components";

import Image from "next/image";

import googleMapsLogo from "public/images/footer/google_maps_icon.png";

function ViewOnGoogleMaps(props: Styleable) {
  return (
    <CustomButton className={props.className}>
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=52.558147,-2.043908"
        target="_blank"
        style={{ zIndex: 2, height: 21 }}
      >
        <GoogleMapsLogo />
        View on Google Maps
      </a>
    </CustomButton>
  );
}

function GoogleMapsLogoUnstyled(props: Styleable) {
  return <Image className={props.className} src={googleMapsLogo} width={14} height={21} layout="fixed" />;
}

export const GoogleMapsLogo = styled(GoogleMapsLogoUnstyled)``;

const CustomButton = styled(Button)`
  font-size: 12px;
  text-transform: initial;
  padding: 8px 20px;
  max-height: 36px;
  display: flex;
  align-items: center;

  :hover {
    background: #888075;
    border: 1px solid #888075;
  }
  a {
    text-decoration: none;
    color: white;
    font-size: 12px;
    font-weight: 500;
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;
export default styled(ViewOnGoogleMaps)``;
