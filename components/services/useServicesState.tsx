import { useRouter } from "next/router";
import Subsidiary from "components/subsidiary-showcase/Subsidiary";
import { SetNewSubsidiary } from "components/subsidiary-showcase/grid/SubsidiaryContext";

const subsidiaryNames: { [key: string]: Subsidiary } = {
  "home-delivery": "home delivery",
  extra: "extra",
  haulage: "haulage",
  "construct-it": "constructit",
};

function getNameFromSubsidiary(input: Subsidiary): string | undefined {
  return Object.entries(subsidiaryNames).find(
    (entry) => entry[1] === input
  )?.[0];
}

function useSelectedFromRouter(): Subsidiary | undefined {
  const router = useRouter();
  const rawName = router.query.subsidiary;
  const name = getFirstOrAny(rawName);
  if (name) {
    return subsidiaryNames[name];
  }
  return undefined;
}

function getFirstOrAny(
  input: string | string[] | undefined
): string | undefined {
  if (Array.isArray(input)) {
    return input[0];
  }
  return input;
}

function useNavigateTo() {
  const router = useRouter();
  const navigateTo = (input: Subsidiary) => {
    const name = getNameFromSubsidiary(input);
    router.push(`/services/${name}`, undefined, { scroll: true });
  };
  return navigateTo;
}

function useSelected(): Subsidiary {
  const fromRouter = useSelectedFromRouter();
  return fromRouter ?? "home delivery";
}

function useSelectedState(): [Subsidiary, any] {
  const state = useSelected();
  const setSelected = useSetSelected();
  return [state, setSelected];
}

function useSetSelected() {
  const router = useRouter();

  const setSelected = (input: Subsidiary): Subsidiary => {
    const subsidiaryName = getNameFromSubsidiary(input);
    router.push(`/services/${subsidiaryName}`);
    return input;
  };

  return setSelected;
}

export { useSelected, useSetSelected, useNavigateTo };
export default useSelectedState;
