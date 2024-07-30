import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import IconPair from "./IconPair";
import { faMapMarker } from "@fortawesome/pro-solid-svg-icons";
import SubsidiaryProps from "components/subsidiary-showcase/SubsidiaryProps";
import Subsidiary from "components/subsidiary-showcase/Subsidiary";
import { GoogleMapsLogo } from "/components/footer/map/ViewOnGoogleMaps";

function AddressSection({
  className,
  subsidiary,
}: SubsidiaryProps & Styleable) {
  const address = getAddress(subsidiary);
  return (
    <Container icon={faMapMarker} className={className}>
      <Content>
        {address.map((detail) => (
          <div>{detail}</div>
        ))}
        <GoogleMapLink href={getGoogleAddressLink(subsidiary)} target="_blank">
          <GoogleMapsLogo />
          <span>View on Google Maps</span>
        </GoogleMapLink>
      </Content>
    </Container>
  );
}


const GoogleMapLink = styled.a`
  text-decoration: underline;
  display: flex;
  align-items: center;
  span {
    margin-left: 8px;
  }
`;

const getGoogleAddressLink = (input: Subsidiary) => {
  switch (input) {
    case "home delivery":
    case "extra":
      return "https://goo.gl/maps/wNk9KocP4Q3baBuC8";

    case "haulage":
    case "constructit":
      return "https://goo.gl/maps/AaeWVJd96Nq7iJTh7";
  }
};

const getAddress = (input: Subsidiary): [string, string, string, string] => {
  switch (input) {
    case "home delivery":
    case "extra":
      return [
        "BJS House, Unit 2, Bull Lane,",
        "Western Way,",
        "Wednesbury",
        "WS10 8RR",
      ];
    case "haulage":
    case "constructit":
      return ["Boxworks, Unit 7", "Western Way", "Wednesbury", "WS10 7BW"];
  }
};

const Container = styled(IconPair)`
  align-items: flex-start;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  ${GoogleMapLink} {
    margin-top: 20px;
  }
`;

export default styled(AddressSection)``;
