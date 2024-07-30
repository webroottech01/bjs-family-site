import { useState } from "react";
import styled from "styled-components";
import { Styleable, WithChildren, Button } from "@bjsdistribution/components";

import useIsTabletOrSmaller, { useIsDesktop } from "components/util/useIsTabletOrSmaller";
import useIsMobile from "components/util/useIsMobile";

import NonDesktopExpandedListing from "./expanded-item";

import {
  useExpandedSlugState,
  useIsApplied,
  useSetApplied,
} from "components/careers/store";

import Listing from "../Listing";
import DesktopListingItem from "./desktop";
import TabletListingItem from "./tablet";
import MobileHighLevel from "./mobile/";
import HighLevelNavigation from "./HighLevelNavigation";

interface Props extends Styleable {
  listing: Listing;
}

function ListingItem(props: Styleable & WithChildren) {
  const isDesktop = useIsDesktop();
  const isMobile = useIsMobile();

  if (isDesktop) {
    return <DesktopListingItem {...props}>{props.children}</DesktopListingItem>;
  }
  if (isMobile) {
    return <MobileHighLevel {...props}>{props.children}</MobileHighLevel>;
  }
  return <TabletListingItem {...props}>{props.children} </TabletListingItem>;
}

function HighLevelIndex(props: Props) {
  const listing = props.listing;
  const isTabletOrSmaller = useIsTabletOrSmaller();
  const [expandedSlug, setExpandedSlug] = useExpandedSlugState();

  const isExpanded = expandedSlug === listing.title;

  if (isTabletOrSmaller && isExpanded) {
    //Expanded tablet design has a special high level explanation
    return <NonDesktopExpandedListing className={props.className}/>;
  }

  return (
    <ListingItem {...listing} className={props.className}>
      <HighLevelNavigation/>
    </ListingItem>
  );
}

export default styled(HighLevelIndex)``;
