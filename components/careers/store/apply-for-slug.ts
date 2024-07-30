import { useMemo } from "react";
import { useRouter } from "next/router";

function useIsApplied() {
  const router = useRouter();

  const isApplied = (slug: string): boolean => {
    const query = router.query.slug;
    if (!query) {
      return false;
    }
    if (query.length < 2) {
      return false;
    }
    return query[0] === slug && query[1].toLowerCase() === "apply";
  };

  return isApplied;
}

function useIsApplying() {
  const router = useRouter();

  const isApplying = useMemo(() => {
    const query = router.query.slug;
    if (!query) {
      return false;
    }
    if (query.length < 2) {
      return false;
    }
    return query[1].toLowerCase() === "apply";
  }, [router.asPath, router.query]);

  return isApplying;
}

function useSetApplied() {
  const router = useRouter();

  const setApplied = (slug: string | undefined) => {
    router.push(`/careers/${slug}/apply`, undefined, { scroll: false });
  };
  return setApplied;
}
export { useIsApplied, useSetApplied, useIsApplying };
