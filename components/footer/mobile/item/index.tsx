import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import { Styleable } from "@bjsdistribution/components";

import { SitemapEntry } from "components/footer/Sitemap";

import SitemapItemHeader from "./SitemapItem";
import ExpandedSitemapItem from "./ExpandedSitemapItem";

type Props = {
  item: SitemapEntry;
};

function SitemapItemRoot({ className, item }: Props & Styleable) {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen((old) => !old);
  return (
    <Container className={className} layout>
      <SitemapItemHeader title={item.title} onClick={toggle} />
      {isOpen && (
        <ExpandedContainer layout>
          {item.entries.map((expanded) => (
            <ExpandedSitemapItem
              key={expanded}
              section={item.title}
              title={expanded}
              close={() => setOpen(false)}
            />
          ))}
        </ExpandedContainer>
      )}
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const ExpandedContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

export default styled(SitemapItemRoot)``;
