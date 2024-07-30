import { Styleable, Button } from "@bjsdistribution/components";
import styled from "styled-components";
import { useRouter } from "next/router";

import NavigationEntry from "./navigation-item/NavigationItem";

import ServicesDropdown from "./navigation-item/services-dropdown";
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";
import AboutNavigationItem from "./AboutNavigationItem";

function NavigationEntries(props: Styleable) {
  const router = useRouter();

  const toNews = () => router.push("/news");
  const toCareers = () => router.push("/careers");


  return (
    <AnimateSharedLayout>
      <AnimatePresence>
        <Container className={props.className} layout>
          <NavigationEntry
            text="our services"
            key="our services"
            overlay={{
              component: <ServicesDropdown />,
              placement: "bottomLeft",
            }}
          />
          <AboutNavigationItem />
          <NavigationEntry text="news" key="news" onClick={toNews} />
          <NavigationEntry text="careers" key="careers" onClick={toCareers} />
        </Container>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

const Container = styled(motion.div)`
  display: flex;

  > :not(:last-child) {
    margin-right: 30px;
  }
`;

export default styled(NavigationEntries)``;
