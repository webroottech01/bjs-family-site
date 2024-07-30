import { useResetPagination } from "./pagination";
import { useSetListings } from "./listing";
import {
  useSetSearchQuery,
  useResetDepartment,
} from "components/careers/search-bar/store";

export * from "./expanded-slug";
export * from "./listing";
export * from "./apply-for-slug";
export * from "./pagination";

type ResetType = "department" | "query";

function useResetSearch() {
  const setListings = useSetListings();
  const resetPagination = useResetPagination();
  const setLiveQuery = useSetSearchQuery();
  const resetDepartment = useResetDepartment();

  const reset = (resetTypes: ResetType[] = []) => {
    setListings([]); //Invalidates cache
    resetPagination();

    for (const type of resetTypes) {
      if (type === "department") {
        resetDepartment();
      } else {
        setLiveQuery("");
      }
    }
  };

  return reset;
}

export { useResetSearch };
