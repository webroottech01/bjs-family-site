import { useRouter } from "next/router";

function useGoToHome() {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };

  return goToHome;
}

export default useGoToHome;