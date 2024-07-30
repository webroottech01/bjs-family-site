import { useRouter } from "next/router";

const RESOURCE_URL = process.env['NEXT_PUBLIC_CONTENT_RESOURCE'];

function useClickInformation() {
  const router = useRouter();
  const click = (input: string) => {
    const url = getUrl(input);
    window.open(url, "_blank");
  };
  return click;
}

const getUrl = (input: string): string => {
  switch (input.toLowerCase()) {
    case "careers":
      return "/careers";
    case "privacy policy":
      return privacyPolicyUrl;
    case "cctv policy":
      return `${RESOURCE_URL}/CCTV+Policy.pdf`;
    default:
      throw new Error(`Cannot find ${input}`);
  }
};

export const privacyPolicyUrl = `${RESOURCE_URL}/privacy+policy.pdf`;;


export default useClickInformation;
