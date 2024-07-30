import { useRouter } from "next/router";

type AboutPage =
  | "our story"
  | "our values"
  | "What makes BJS different"
  | "Our technology"
  | "Charity and community"
  | "Training academy";

const allPages: AboutPage[] = [
  "our values",
  "Our technology",
  "What makes BJS different",
  "Training academy",
  "Charity and community",
  "our story",
];

function useNavigateTo() {
  const router = useRouter();

  const navigateTo = (input: AboutPage) => {
    const name = input.replaceAll(" ", "-").replace("&", "and").toLowerCase();
    router.push(`/about/${name}`);
  };
  return navigateTo;
}

export { allPages, useNavigateTo };
export default AboutPage;
