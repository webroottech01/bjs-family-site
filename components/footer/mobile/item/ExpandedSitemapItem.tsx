import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { motion } from "framer-motion";

import useClickSitemapEntry from "components/footer/useClickSitemapEntry";

interface Props {
  section: string;
  title: string;
  close: () => void;
}

function ExpandedSitemapItem({ section, title, close, className }: Props & Styleable) {
  const navigateTo = useClickSitemapEntry(section);

  const onClick = () => {
    navigateTo(title);
    close();
  }

  return (
    <Container className={className} layout onClick={onClick}>
      <span>{title}</span>
    </Container>
  );
}

const Container = styled(motion.div)`
  padding: 10px 30px;
  text-transform: capitalize;
`;

export default ExpandedSitemapItem;
