import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";
import TimelineEntry, {
  SupportingMedia,
} from "components/about/timeline/entry";
import path from "components/about/timeline/path";

function Beginning(props: Styleable) {
  return (
    <TimelineEntry className={props.className} year={2009} image={<Image />}>
      <p>
        We began with a clear vision — to provide the best two-man delivery
        service in the UK, based upon our great people skills and reliable
        service that is second-to-none.
      </p>
    </TimelineEntry>
  );
}

function Image() {
  return (
    <ImageContainer>
      <OriginalLogo src={`${path}/original-logo.png`} />
    </ImageContainer>
  );
}

const OriginalLogo = styled.img`
  object-fit: scale-down;
`

const ImageContainer = styled(SupportingMedia)`
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 1450px) {
    min-width: 350px !important;
    height: 250px;
  }
`;

export default styled(Beginning)``;
