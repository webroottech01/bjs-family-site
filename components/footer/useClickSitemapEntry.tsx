import { useRouter } from "next/router";
import Subsidiary from "components/subsidiary-showcase/Subsidiary";
import { useNavigateTo as useNavigateToService } from "components/services/useServicesState";
import useClickInformation from './useClickInformation';

function useClickSitemapEntry(title: string) {
  const router = useRouter();
  const navigateToService = useNavigateToService();
  const clickInformation = useClickInformation();

  title = title.toLowerCase();

  const onClick = (entry: string) => {
    entry = entry.toLowerCase();
    if (title === "about bjs") {
      const subpath = entry.replaceAll(" ", "-");
      router.push(`/about/${subpath}`);
    } else if (title === "our services") {
      const subsidiary = getSubsidiaryFromName(entry);
      navigateToService(subsidiary);
    } else if (title === "information") {
      clickInformation(entry);
    }
  };
  return onClick;
}

const getSubsidiaryFromName = (input: string): Subsidiary => {
  switch (input) {
    case "two-man home delivery":
      return "home delivery";
    case "bjs extra":
      return "extra";
    case "haulage":
      return "haulage";
    case "specialist construction haulage":
      return "constructit";
    default:
      return "home delivery";
  }
};

export default useClickSitemapEntry;
