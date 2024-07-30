import styled from "styled-components";
import { down } from "styled-breakpoints";
import { Styleable, colours } from "@bjsdistribution/components";

import InformationPiece from "components/careers/listing/item/low-level/InformationPiece";

interface Props {
  informationPiece: InformationPiece;
}

function CmsInformationPiece(props: Props & Styleable) {
  return (
    <>
      <Title>{formatTitle(props.informationPiece.title)}</Title>
      <Body dangerouslySetInnerHTML={{ __html: props.informationPiece.body }} />
    </>
  );
}

const formatTitle = (input: string): string => {
  return input.substring(0, 1).toUpperCase() + input.substring(1);
};

const Title = styled.span`
  font-size: 16px;
  font-weight: bold;

  /*
  ${down("sm")} {
    margin-bottom: 30px;
  }*/
`;
const Body = styled.div`
  font-size: 16px;
  ul {
    list-style-position: outside;
    margin: 0;
    padding: 0;
    padding-left: 20px;

    li {
      ::marker {
        color: ${colours.yellow};
        font-size: 1.5em;
      }
    }
  }
`;

export { Title };
export default styled(CmsInformationPiece)``;
