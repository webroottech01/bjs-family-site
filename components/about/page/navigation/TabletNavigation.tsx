import styled from "styled-components";
import Props from "./Props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/pro-regular-svg-icons";
import { useNavigateTo } from "components/about/page/AboutPage";
import useIsMobile from 'components/util/useIsMobile';
import { down } from "styled-breakpoints";
import { getSiblings } from './pages';

function TabletNavigation(props: Props) {
  const navigateTo = useNavigateTo();
  const isMobile = useIsMobile();
  const [left, right] = getSiblings(props.page);

  return (
    <Container>
      {!left && <div />}
      {left && (
        <Entry onClick={() => navigateTo(left!)}>
          <Icon icon={faChevronLeft} />
          <Text>{isMobile ? "Back" : left}</Text>
        </Entry>
      )}
      {!right && <div />}

      {right && (
        <RightEntry onClick={() => navigateTo(right!)}>
          <Text>{right}</Text>
          <Icon icon={faChevronRight} />
        </RightEntry>
      )}
    </Container>
  );
}

const Text = styled.span`
  text-transform: capitalize;
`;
const Container = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  z-index: 500;

  background: #edecea 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 20px #00000029;
  padding: 17px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${down("sm")} {
    padding: 15px 10px;
  }
`;

const Entry = styled.div`
  display: flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 15px;
  }

  font-size: 16px;
`;

const RightEntry = styled(Entry)`
  font-weight: bold;
`;
const Icon = styled(FontAwesomeIcon)``;

export default TabletNavigation;
