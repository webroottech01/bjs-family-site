import { Styleable, colours } from "@bjsdistribution/components";
import styled from "styled-components";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/pro-light-svg-icons";

interface Props {
  title: string;
  onClick: () => void;
}

function SitemapItem({ className, title, onClick }: Props & Styleable) {
  return (
    <Container className={className} layout onClick={onClick}>
      <Name>{title}</Name>
      <Icon icon={faPlus} />
    </Container>
  );
}

const Name = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: ${colours.black};
  text-transform: capitalize;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 26px !important;
  color: rgba(58, 54, 48, 0.5);
  cursor: pointer;
`;

const Container = styled(motion.div)`
  color: #615e59;
  display: flex;
  padding: 24px 30px;
  align-items: center;
  justify-content: space-between; ;
`;

export default styled(SitemapItem)``;
