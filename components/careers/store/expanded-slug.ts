import { useRouter } from "next/router";

function useExpandedSlugState(): [
  string | undefined,
  (newSlug: string | undefined) => void
] {
  const expanded = useExpandedSlug();
  const setExpanded: (slug: string | undefined) => void = useSetExpanded();
  return [expanded, setExpanded];
}

function useExpandedSlug(): string | undefined {
  const router = useRouter();
  const query = router.query.slug;
  if (Array.isArray(query)) {
    return query[0];
  }
  return undefined;
}

function useSetExpanded() {
  const router = useRouter();
  const set = (slug: string | undefined) => {
    if (slug === undefined) {
      router.push(`/careers/`, undefined, { scroll: false });
    } else {
      router.push(`/careers/${slug}`, undefined, { scroll: false });
    }
  };
  return set;
}

function useResetExpanded() {
  const router = useRouter();
  const reset = () => router.push("/careers");
  return reset;
}

export { useExpandedSlug, useExpandedSlugState, useResetExpanded };
