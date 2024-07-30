import styled from "styled-components";
import { motion } from "framer-motion";
import { Styleable, WithChildren } from "@bjsdistribution/components";
import { up, down } from "styled-breakpoints";

import List, {
  ListItem,
} from "/components/subsidiary-showcase/detailed-info/blueprint/points/List";

type Props = {
  title: string;
  points: string[];
};

function FeaturedSkillsItem(props: Props & Styleable & WithChildren) {
  return (
    <Container className={props.className} layout>
      <Title>{props.title}</Title>
      <List>
        {props.points.map((point) => {
          return <ListItem key={point}>{point}</ListItem>;
        })}
      </List>
      {props.children}
    </Container>
  );
}

const Title = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
const Container = styled(motion.div)`
  list-style-position: inside;
  display: flex;
  flex-direction: column;

  ${up("lg")} {
    gap: 50px;
  }

  ${down("md")} {
    gap: 40px;
  }

  ${List} {
    ${up("lg")} {
      gap: 30px;
    }
    ${down("md")} {
      gap: 20px;
    }

    ${ListItem} {
      ::before {
        margin-right: 18px;
      }

      ${down("md")} {
        font-size: 16px;

        ::after {
          height: 8px;
          width: 8px;
        }
      }
    }
  }
`;

export default FeaturedSkillsItem;
