import styled from "styled-components";
import JobInformation, { Props as JobInformationProps } from "./JobInformation";
import VanSplash from "./VanSplash";
import Description from "./Description";
import FeaturedImage from "./FeaturedImage";
import { down } from "styled-breakpoints";

type Props = {
  description: string[];
  image: StaticImageData;
  background: StaticImageData;
} & JobInformationProps;

function KeyWorkerItem(props: Props) {
  return (
    <Container>
      <VanSplash image={props.background} />
      <FeaturedImage image={props.image}/>
      <JobInformation title={props.title} service={props.service} />
      <Description description={props.description} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  height: 100%;
  flex: 1;
  position: relative;
  ${down("md")}{
    max-width: unset;
  }
  ${FeaturedImage} {
    position: absolute;
    top: 85px;
    left: 10px;
  }
`;

export default styled(KeyWorkerItem)``;
