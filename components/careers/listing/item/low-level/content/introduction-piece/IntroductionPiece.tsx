import styled from "styled-components";
import { Styleable, WithChildren } from "@bjsdistribution/components";
import {up, down} from "styled-breakpoints";
import { motion } from "framer-motion";

type Props = {
  title: string;
} & WithChildren &
  Styleable;

function InformationPiece(props: Props) {
  return (
    <>
      <Title>{props.title}</Title>
      <ChildrenContainer>{props.children}</ChildrenContainer>
    </>
  );
}

const Title = styled.span`
  font-family: "Eveleth";
  font-size: 20px;
`;

const ChildrenContainer = styled.div`
  ${down("md")} {
    font-size: 16px;
  }
`;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export default InformationPiece;
