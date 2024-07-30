import styled from "styled-components";
import { Styleable, Button } from "@bjsdistribution/components";

import {
  useExpandedSlugState,
  useIsApplied,
  useSetApplied,
} from "components/careers/store";

import useListingItem from "components/careers/listing/item/useListingItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/pro-regular-svg-icons";

import useIsMobile from "components/util/useIsMobile";
import useCancel from "../../form/component/submission/useCancel";
import { down } from "styled-breakpoints";
function HighLevelNavigation(props: Styleable) {
  const listing = useListingItem();
  const [expandedSlug, setExpandedSlug] = useExpandedSlugState();
  const isApplied = useIsApplied();
  const setApplied = useSetApplied();
  const isMobile = useIsMobile();
  const cancel = useCancel();

  if (!listing) {
    return null;
  }

  const isExpanded = expandedSlug === listing.title;

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const expand = () => {
    if (isMobile) {
      scrollToTop();
    }
    setExpandedSlug(listing.title);
  };
  const apply = () => {
    if (isMobile) {
      scrollToTop();
    }
    setApplied(listing.title);
  };


  return (
    <Container className={props.className}>
      {!isExpanded && (
        <MoreInfo id="item-go-to-more-info" wide shape="rounded" colors="alternate" onClick={expand}>
          <span>More info</span>
          <MoreInfoArrow icon={faChevronRight} />
        </MoreInfo>
      )}
      {!isApplied(listing.title) && <Button id="item-go-to-apply" onClick={apply}>Apply</Button>}
      {isApplied(listing.title) && <CancelButton id="item-go-to-cancel-application" onClick={cancel} wide>Cancel application</CancelButton>}
    </Container>
  );
}

const CancelButton = styled(Button)`
  font-family: "Gotham SSm A", "Gotham SSm B";
  text-transform: capitalize;
  font-size: 14px;
  
`;

const MoreInfoArrow = styled(FontAwesomeIcon)`
  font-size: 16px !important;
`;

const MoreInfo = styled(Button.PlainButton)`
  border: 1px solid black;
  background: white;
  color: black;
  display: flex;
  > :not(:last-child) {
    margin-right: 24px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > :not(:last-child) {
    margin-right: 20px;
  }

  @media only screen and (max-width: 390px) {
    > :not(:last-child) {
      margin-bottom: 20px;
      margin-right: 0px;
    }
    ${Button.PlainButton} {
      width: 100%;
    }
  }
  ${down("xs")} {
    > :not(:last-child) {
      margin-bottom: 20px;
      margin-right: 0px;
    }
    ${Button.PlainButton} {
      width: 100%;
    }
  }
`;

export default HighLevelNavigation;
