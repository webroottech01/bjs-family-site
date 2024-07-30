import { getSubsidiaryForRawQuery } from "/components/talk-to-us/button";
import useIsOpen, { useSetSelectedSubsidiary } from "components/talk-to-us/store";
import { useRouter } from "next/router";

function useNavigateToQuote() {
  const setSelectedSubsidiary = useSetSelectedSubsidiary();
  const router = useRouter();
  const [, setOpen] = useIsOpen();
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
  return navigateTo;
}

export default useNavigateToQuote;