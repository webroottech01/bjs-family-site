import styled from "styled-components";
import { motion } from "framer-motion";
import { Styleable, Button } from "@bjsdistribution/components";

interface Props {
  edit: () => void;
  delete: () => void;
}

function ItemAction(props: Props & Styleable) {
  return (
    <Container className={props.className} layout>
      <Button id="form-go-to-edit" onClick={props.edit}>Edit</Button>
      <Button id="form-go-to-delete" colors="delete" onClick={props.delete}>
        Delete
      </Button>
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  gap: 30px;

  ${Button.PlainButton} {
    flex: 1;
  }
`;

export default ItemAction;
