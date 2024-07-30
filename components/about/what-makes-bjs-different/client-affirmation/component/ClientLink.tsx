import styled from "styled-components";
import { Styleable, WithChildren } from "@bjsdistribution/components";
import { Client, getUrl } from "components/util/getClientLogo";

interface Props extends Styleable, WithChildren {
  client: Client;
}

function ClientLink({ client, className, children }: Props) {
  const link = getUrl(client);
  return <Link className={className} href={link} target="_blank">{children}</Link>;
}

const Link = styled.a``;
export default ClientLink;
