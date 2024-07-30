import { Styleable } from "@bjsdistribution/components";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import { NavigationEntries } from "components/navigation/navigation-entry";
import MobileNavigationEntry from "./entry";

import useIsOpen from "./mobile-navigation-state";
interface Props extends Styleable {
  entries: NavigationEntries;
}

function MobileNavigationEntries(props: Props) {
  const open = useIsOpen();

  return (
    <AnimatePresence>
      {open && (
        <Container
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
       //   transition={{ duration: 0.8 }}
          key="mobile navigation entries"
          layout
        >
          {props.entries.map((entry) => (
            <MobileNavigationEntry key={entry.title} entry={entry} />
          ))}
        </Container>
      )}
    </AnimatePresence>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

export default styled(MobileNavigationEntries)``;
