import { useSetSearchQuery } from "components/careers/search-bar/store";
import { useResetSearch } from "components/careers/store";

function usePerformSearch() {
  const setLiveQuery = useSetSearchQuery();
  const reset = useResetSearch();

  const perform = (input: string) => {
    reset(["department"]);
    setLiveQuery(input);
  };

  return perform;
}

export default usePerformSearch;
