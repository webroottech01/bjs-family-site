import styled from "styled-components";
import { up, down } from "styled-breakpoints";
import { Button, WithChildren } from "@bjsdistribution/components";

interface Props extends WithChildren {
  onAddAnother: () => void;
}

function ExistingItems(props: Props) {
  return (
    <Container>
      <ItemContainer>{props.children}</ItemContainer>
      <Button id="form-go-to-add-another" onClick={props.onAddAnother}>Add another</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  ${Button.PlainButton} {
    height: min-content;

    ${up("lg")} {
      width: 340px;
    }
    ${down("md")} {
      width: 250px;
    }
  }
`;

const ItemContainer = styled.div`
  display: grid;
  
  gap: 50px;

  ${up("lg")} {
    grid-template-columns: repeat(3, auto-fit);
  }
  ${down("md")} {
    grid-template-columns: repeat(2, auto-fit);
  }
`;

export default ExistingItems;
