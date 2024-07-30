import styled from "styled-components";
import Timeline from "components/about/timeline";
import Introduction from "components/about/timeline/Introduction";

function TimelineSection() {
  return (
    <Container>
      <Introduction />
      <Timeline />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
export default TimelineSection;
