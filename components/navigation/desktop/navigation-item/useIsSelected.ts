import { useRouter } from "next/router";

function useIsSelected(text: string) {
  const router = useRouter();
  const route = router.route;
  text = getName(text);
  return route.toLowerCase().includes(text);
}

export function getName(input: string) {
  const text = input.toLowerCase();
  if (text === "about bjs") {
    return "about";
  } else if (text === "our services") {
    return "services";
  }
  return text;
}

export default useIsSelected;
