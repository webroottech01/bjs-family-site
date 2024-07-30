import { useRouter } from "next/router";

import useListingItem from 'components/careers/listing/item/useListingItem';

import { useSetScrollTo } from "../../../item/store";

function useCancel() {
  const setScrollTo = useSetScrollTo();
  const listingItem = useListingItem();
  const router = useRouter();

  const cancel = () => {
    setScrollTo(listingItem?.title);
    router.push(router.asPath.replace("/apply", ""), undefined, {
      shallow: true,
      scroll: false,
    });
  };
  return cancel;
}

export default useCancel;
