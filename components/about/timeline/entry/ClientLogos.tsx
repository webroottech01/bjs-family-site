import styled from "styled-components";
import getClientLogo, { Client } from "components/util/getClientLogo";
import { Styleable } from "@bjsdistribution/components";

type Props = {
  clients: Client[];
};

function Logos(props: Styleable & Props) {
  return (
    <Container className={props.className}>
      {props.clients.map((client) => (
        <img key={client} src={getClientLogo(client)} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default styled(Logos)``