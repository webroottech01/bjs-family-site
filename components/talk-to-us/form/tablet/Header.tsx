import styled, { css } from "styled-components";
import { up, down } from "styled-breakpoints";
import { Styleable } from "@bjsdistribution/components";
import Exit from "components/talk-to-us/form/Exit";
import useIsMobile from "components/util/useIsMobile";
import useSelected from "./selected-header-store";
function Header(props: Styleable) {
  const [selected, setSelected] = useSelected();
  return (
    <Container className={props.className}>
      <Entry
        isSelected={selected === "talk to us"}
        onClick={() => setSelected("talk to us")}
      >
        Talk to us
      </Entry>
      {selected === "request quote" && <RequestQuote />}
      <Exit />
    </Container>
  );
}

function RequestQuote() {
  const isMobile = useIsMobile();
  const [selected, setSelected] = useSelected();
  const isSelected = selected === "request quote";
  const onClick = () => setSelected("request quote");
  const text = "Request quote";
  return (
    <Entry isSelected={isSelected} onClick={onClick}>
      {text}
    </Entry>
  );
}

const Entry = styled.span<{ isSelected: boolean }>`
  font-size: 20px;
  font-family: "Eveleth";
  ${(props) => !props.isSelected && "color: rgba(0,0,0,0.4);"}

  ${down("sm")} {
    white-space: nowrap;
  }
`;

const Container = styled.div`
  ${Exit} {
    margin-left: auto;
  }
  display: flex;
  align-items: flex-end;
  gap: 40px;

  ${down("sm")} {
    gap: 35px;

    ${Exit} {
      position: absolute;
      font-size: 40px !important;
      right: 20px;
    }
  }
`;

export default styled(Header)``;
