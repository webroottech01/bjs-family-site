import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/pro-solid-svg-icons";
import { Styleable } from "@bjsdistribution/components";
import ContactInfo from "../ContactInfo";
import Map from "../map";

const addressData: string[] = [
  "BJS house, unit 2, bull lane",
  "western way",
  "wednesbury",
  "WS10 8RR",
];

function Contact(props: ContactInfo & Styleable) {
  return (
    <Container className={props.className}>
      <PhoneContainer>
        <Label>Sales:</Label>
        <Icon icon={faPhone} rotation={90} />
        <PhoneNumber href={`tel:${props.saleNumber}`}>{props.saleNumber}</PhoneNumber>
      </PhoneContainer>
      <PhoneContainer>
        <Label>Customer Service:</Label>
        <Icon icon={faPhone} rotation={90} />
        <PhoneNumber href={`tel:${props.phoneNumber}`}>{props.phoneNumber}</PhoneNumber>
      </PhoneContainer>
      <Email href={`mailto:${props.email}`}>{props.email}</Email>
      <Map />
    </Container>
  );
}

function OldAddress() {
  return (
    <AddressContainer>
      {addressData.map((address) => (
        <Info key={address}>{address}</Info>
      ))}
    </AddressContainer>
  );
}
const Icon = styled(FontAwesomeIcon)`
  font-size: 18px !important;
`;
const Label = styled.div`
  font-size: 20px;
`;
const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: 15px;
  }
  text-transform: capitalize;
`;

const Info = styled.span``;

const PhoneContainer = styled.div`
  display: flex;
  z-index: 3;
  align-items: center;

  > :not(:last-child) {
    margin-right: 12px;
  }
`;

const PhoneNumber = styled.a`
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  text-decoration: none;
  line-height: 0.7;
`;

const Email = styled.a`
  text-decoration: underline;
  font-size: 18px;
  z-index: 3;
  align-self: flex-end;
  text-align: right;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;

  ${PhoneContainer} {
    margin-bottom: 15px;
  }

  ${Email} {
    margin-bottom: 8px;
  }

  position: relative;
  ${Map} {
    position: absolute;
    right: -50px;
    top: 30px;
  }
`;

export default styled(Contact)``;
