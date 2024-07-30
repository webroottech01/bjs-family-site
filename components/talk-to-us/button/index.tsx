import { Button, Styleable, colours } from "@bjsdistribution/components";
import styled from "styled-components";
import useIsTabletOrSmaller from "components/util/useIsTabletOrSmaller";

import TalkToUsIcon from "./TalkToUsIcon";
import useIsOpen, {
  useSetSelectedSubsidiary,
} from "components/talk-to-us/store";
import { useRouter } from "next/router";
import Subsidiary from "components/subsidiary-showcase/Subsidiary";

interface Props extends Styleable {
  desktop?: boolean;
}

function TalkToUsButton(props: Props) {
  const isTabletOrSmaller = useIsTabletOrSmaller();
  const setSelectedSubsidiary = useSetSelectedSubsidiary();
  const forceDesktop = props.desktop ?? false;
  const router = useRouter();
  const [open, setOpen] = useIsOpen();

  const navigateTo = () => {
    const path = router.pathname;
    if (path.startsWith("/services")) {
      //If we're on the services page
      const query = router.query?.subsidiary ?? [];
      if (query.length === 0) {
        return;
      }
      const rawSubsidiary = query[0];
      const subsidiary = getSubsidiaryForRawQuery(rawSubsidiary);
      setSelectedSubsidiary(subsidiary);
    }

    setOpen(true);
  };

  if (isTabletOrSmaller && !forceDesktop) {
    return <TalkToUsIcon className={props.className} onClick={navigateTo} />;
  }

  return (
    <MyButton colors="dark" onClick={navigateTo} className={props.className} id="talk-to-us-go-to-talk-to-us">
      <TalkToUsIcon />
      <span>Talk to us</span>
    </MyButton>
  );
}

export const getSubsidiaryForRawQuery = (input: string): Subsidiary => {
  switch (input.toLowerCase()) {
    case "construct-it":
      return "constructit";
    case "haulage":
      return "haulage";
    case "extra":
      return "extra";
    case "home-delivery":
    default:
      return "home delivery";
  }
};

const MyButton = styled(Button)`
  padding: 13px 27px;
  align-items: center;
  background: ${colours.yellow};
  border: 1px solid ${colours.yellow};
  span {
    font-family: "Eveleth";
  }
  color: #5f5d5b;
  font-size: 14px;
  transition: color 0.3s;

  > :not(:last-child) {
    margin-right: 8px;
  }

  :hover {
    background: black;
    border: 1px solid black;
    svg path {
      :nth-of-type(2) {
        fill: white;
      }
    }
  }
`;

export default styled(TalkToUsButton)``;
