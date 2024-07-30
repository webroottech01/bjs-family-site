import { useState } from "react";

import { colours } from "@bjsdistribution/components";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import SupportingImage from "./SupportingImage";

import AboutPage, {
  allPages,
  useNavigateTo,
} from "components/about/page/AboutPage";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { hideAll } from "tippy.js";
const leftRef = atom<any>({
  key: "navigation_about_dropdown",
  default: undefined,
});

export function useLeftLayout() {
  return useRecoilValue(leftRef);
}

function AboutDropdown() {
  const [hovered, setHovered] = useState<AboutPage>("our story");
  const navigateTo = useNavigateTo();
  const setLayout = useSetRecoilState(leftRef);

  const onClick = (entry: AboutPage) => {
    navigateTo(entry);
    hideAll({ duration: 100 });
  };
  return (
    <Container
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      layout
    >
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence initial={false}>
          <Left>
            <SupportingImage entry={hovered} />
          </Left>
        </AnimatePresence>
      </AnimateSharedLayout>
      <Right ref={(instance) => setLayout(instance)}>
        {allPages.map((entry: AboutPage) => (
          <EntryName
            key={entry}
            onHoverStart={() => setHovered(entry)}
            onClick={() => onClick(entry)}
          >
            <BulletPoint />
            {entry}
          </EntryName>
        ))}
      </Right>
    </Container>
  );
}

const ContainerStyling = css`
  box-shadow: 0px 3px 30px #0000001a;
  border-radius: 12px;
`;

const Container = styled(motion.div)`
  ${ContainerStyling};
  background: white;
  display: flex;
`;

const Right = styled.div`
  ${ContainerStyling};
  padding: 60px 40px;
  display: flex;
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: 40px;
  }

  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
`;

const Left = styled.div`
  ${ContainerStyling};
  min-height: 100%;
  max-height: 100%;
  min-width: 320px;
  background: transparent linear-gradient(360deg, #f5f0ea 0%, #e2e0dd 100%) 0%
    0% no-repeat padding-box;
  content: "";
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;

  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
`;

const BulletPoint = styled.div`
  height: 8px;
  width: 8px;
  background: #acaaa7;
  border-radius: 50%;
`;
const EntryName = styled(motion.div)`
  font-family: "Eveleth";
  font-size: 14px;
  text-transform: uppercase;
  color: #57534e;
  cursor: pointer;
  display: flex;
  align-items: center;

  ${BulletPoint} {
    margin-right: 25px;
  }

  :hover {
    color: ${colours.yellow};
    ${BulletPoint} {
      background: ${colours.yellow};
    }
  }
`;

export default AboutDropdown;
