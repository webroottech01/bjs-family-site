import { useState } from "react";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import MobileNavigationEntry from "./MobileNavigationEntry";

import Props from "./Props";

import ExpandedMenu from "components/navigation/mobile/expanded/ExpandedMenu";

import { useRouter } from "next/router";
import { useSetOpen } from "../mobile-navigation-state";

function MobileNavigationEntryContainer(props: Props) {
  const router = useRouter();
  const setNavigationOpened = useSetOpen();
  const [isOpened, setOpened] = useState(false);

  const toggle = () => setOpened((old) => !old);
  const onClick = () => {
    const title = props.entry.title.toLowerCase();
    if (props.entry.entries.length === 0) {
      router.push(`/${title}`);
      setNavigationOpened(false);
    } else {
      toggle();
    }
  };

  return (
    <Container
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      onClick={onClick}
      isOpened={isOpened}
      layout
    >
      <MobileNavigationEntry {...props} isOpened={isOpened} />
      {isOpened && (
        <ExpandedMenu
          dropdownName={
            props.entry.title.toLowerCase() === "about us"
              ? "about"
              : "services"
          }
        />
      )}
    </Container>
  );
}

const Container = styled(motion.div)<{ isOpened: boolean }>`
  display: flex;
  flex-direction: column;

  ${(props) => props.isOpened && OpenedStyling};
  ${(props) => !props.isOpened && ClosedStyling};

  ${MobileNavigationEntry} {
    ${(props) => !props.isOpened && SeperatorStyling};
  }
`;

const OpenedStyling = css`
  background: transparent
    linear-gradient(
      180deg,
      rgba(58, 54, 48, 0.1) 0%,
      rgba(255, 255, 255, 0.1) 100%
    )
    0% 0% no-repeat padding-box;
`;

const ClosedStyling = css`
  background: transparent linear-gradient(180deg, #f9f9f9 0%, #ffffff 100%) 0%
    0% no-repeat padding-box;
`;

const SeperatorStyling = css`
  border-bottom: 1px solid #f4efe9;
`;

export default styled(MobileNavigationEntryContainer)``;
