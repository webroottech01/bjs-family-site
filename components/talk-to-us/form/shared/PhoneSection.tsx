import styled from "styled-components";
import { faPhone } from "@fortawesome/pro-solid-svg-icons";

import IconPair from "./IconPair";

import SubsidiaryProps from "components/subsidiary-showcase/SubsidiaryProps";
import Subsidiary from "components/subsidiary-showcase/Subsidiary";

function PhoneSection({ subsidiary, className }: SubsidiaryProps) {
  const number = getNumber(subsidiary);
  return (
    <IconPair icon={faPhone} rotation={90} className={className}>
      <PhoneNumber href={`tel:${number}`}>{number}</PhoneNumber>
    </IconPair>
  );
}

export const getNumber = (input: Subsidiary): string | undefined => {
  switch (input) {
    case "extra":
      return process.env.NEXT_PUBLIC_CONTACT_NUMBER_EXTRA;
    case "haulage":
      return process.env.NEXT_PUBLIC_CONTACT_NUMBER_HAULAGE;
    case "constructit":
      return process.env.NEXT_PUBLIC_CONTACT_NUMBER_CONSTRUCT_IT;
    case "home delivery":
    default:
      return process.env.NEXT_PUBLIC_SALE_NUMBER
      ;
  }
};

export const PhoneNumber = styled.a`
  font-size: 16px;
  text-decoration: underline;
  white-space: nowrap;
`;

export default styled(PhoneSection)``;
