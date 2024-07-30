import styled from "styled-components";
import { down } from "styled-breakpoints";
import { Styleable } from "@bjsdistribution/components";

import { faEnvelope } from "@fortawesome/pro-solid-svg-icons";

import IconPair from "./IconPair";
import SubsidiaryProps from "components/subsidiary-showcase/SubsidiaryProps";
import Subsidiary from "components/subsidiary-showcase/Subsidiary";

function EmailSection({ subsidiary, className }: SubsidiaryProps) {
  const email = getEmail(subsidiary);
  return (
    <IconPair icon={faEnvelope} className={className}>
      <Email href={`mailto:${email}`}>Send us an email</Email>
    </IconPair>
  );
}

const Email = styled.a`
  font-size: 16px;
  text-decoration: underline;
  white-space: nowrap;
`;

export const getEmail = (input: Subsidiary): string | undefined => {
  switch (input) {
    case "extra":
      return process.env.NEXT_PUBLIC_CONTACT_EMAIL_EXTRA;
    case "haulage":
      return process.env.NEXT_PUBLIC_CONTACT_EMAIL_HAULAGE;
    case "constructit":
      return process.env.NEXT_PUBLIC_CONTACT_EMAIL_CONSTRUCT_IT;
    case "home delivery":
      return process.env.NEXT_PUBLIC_CONTACT_EMAIL_HOME_DELIVERY;
    default:
      return process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  }
};

export default styled(EmailSection)``;
