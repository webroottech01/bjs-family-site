import { Styleable } from "@bjsdistribution/components";
import {colours} from "@bjsdistribution/components";
import styled from "styled-components";
import FooterProps from "../FooterProps";
import Contact from "./Contact";
import useIsTabletOrSmaller from "components/util/useIsTabletOrSmaller";
import SocialIcons from "components/footer/SocialIcons";
import useClickSitemapEntry from "../useClickSitemapEntry";

function Sitemap(props: FooterProps) {
  const entries = props.sitemap;
  const isTabletOrSmaller = useIsTabletOrSmaller();

  return (
    <Container>
      {entries.map((entry, index) => {
        const row = (
          <Row key={entry.title} title={entry.title} entries={entry.entries} />
        );

        if (isTabletOrSmaller) {
          const lastIndex = index === entries.length - 1;
          const firstIndex = index === 0;
          if (firstIndex) {
            return (
              <FirstTabletRow>
                {row}
                <SocialIcons />
              </FirstTabletRow>
            );
          } else if (lastIndex) {
            return (
              <FinalTabletRow>
                {row}
                <Contact {...props.contact} />
              </FinalTabletRow>
            );
          }
        }
        return row;
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  z-index: 3;
  > :not(:last-child) {
    margin-right: 60px;
  }
`;

interface RowProps extends Styleable {
  title: string;
  entries: string[];
}

function Row(props: RowProps) {
  const onClick = useClickSitemapEntry(props.title);
  return (
    <RowContainer>
      <Title>{props.title}</Title>
      <EntryContainer>
        {props.entries.map((entry) => (
          <Entry key={entry} onClick={() => onClick(entry)}>
            {entry}
          </Entry>
        ))}
      </EntryContainer>
    </RowContainer>
  );
}

const FirstTabletRow = styled.div`
  display: flex;
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: 90px;
  }

  ${SocialIcons} {
    position: relative !important;
  }
`;
const FinalTabletRow = styled.div`
  display: flex;
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: 36px;
  }

  ${Contact} {
    align-items: flex-start;
    text-align: left;
  }
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: 23px;
  }
  font-size: 14px;
`;

const Title = styled.span`
  font-weight: bold;
  text-transform: uppercase;
  color: #6A6763;
`;

const EntryContainer = styled.div`
  display: flex;
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: 15px;
  }
  white-space: nowrap;
`;

const Entry = styled.span`
  text-transform: capitalize;
  white-space: normal;
  cursor: pointer;
  color: #6A6763;

  :hover {
    color: ${colours.yellow};
  }

`;

export default Sitemap;
