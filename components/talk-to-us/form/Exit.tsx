import styled from "styled-components";

import { Styleable, colours } from "@bjsdistribution/components";
import { faTimes } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSetOpen } from "components/talk-to-us/store";
import { useRouter } from "next/router";

function Exit(props: Styleable) {
  const setOpen = useSetOpen();
  const router = useRouter();
  const onClick = () => {
    setOpen(false);
    const path = router.asPath;
    if (path === "/talk-to-us") { //Move from talk-to-us to index
      router.push("/", undefined, { shallow: true });
    }
  };
  return <Icon className={props.className} icon={faTimes} onClick={onClick} />;
}

const Icon = styled(FontAwesomeIcon)`
  font-size: 60px !important;
  cursor: pointer;
  color: rgba(58, 54, 48, 0.3);

  :hover {
    color: ${colours.yellow};
  }
`;

export default styled(Exit)``;
