import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import styled from "styled-components";

import SubsidiaryBar from "./SubsidiaryBar";
import SubsidiaryDetailedInfo from "./detailed-info/subsidiary";
import { useSelectedSubsidiary } from "./grid/SubsidiaryContext";

function SubsidiaryShowcase() {
  return (
    <Container>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          <SelectedDetailedInfo />
        </AnimatePresence>
      </AnimateSharedLayout>
      <SubsidiaryBar right="track order" />
    </Container>
  );
}

function SelectedDetailedInfo() {
  const selected = useSelectedSubsidiary();
  return <SubsidiaryDetailedInfo subsidiary={selected} />;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

 // box-shadow: -10px 20px 20px #00000059;
`;
export default SubsidiaryShowcase;
