import { useRouter } from "next/router";

const orderTrackingUri = process.env.NEXT_PUBLIC_ORDER_TRACKING_ENDPOINT;
if (!orderTrackingUri) {
  throw new Error(`Cannot find order tracking URI`);
}

function useNavigateToTracker() {
  const router = useRouter();
  const navigateToTracker = () => router.push(orderTrackingUri!);
  return navigateToTracker;
}

export { orderTrackingUri };
export default useNavigateToTracker;
