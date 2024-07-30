import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
  useResetRecoilState,
} from "recoil";
import Listing from "components/careers/listing/item/Listing";

const listingState = atom<Listing[]>({
  key: "career_listing",
  default: [],
});

function useListingState() {
  return useRecoilState(listingState);
}

function useClearListings() {
  return useResetRecoilState(listingState);
}

function useListings() {
  return useRecoilValue(listingState);
}

function useSetListings() {
  return useSetRecoilState(listingState);
}

export { useListings, useSetListings, useListingState, useClearListings };
