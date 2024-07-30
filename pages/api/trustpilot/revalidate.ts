import type { NextApiRequest, NextApiResponse } from "next";
import useCallSlackApi from "/components/util/useCallSlackApi";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== "999og9pSIj") {
    console.log(req.query, "req.query");
    return res.status(401).json({ message: "Invalid token" });
  }
  const callSlackApi = useCallSlackApi();

  const pathsToRevalidate = [
    "/",
    "/services/home-delivery",
    "/services/haulage",
    "/services/extra",
  ];

  try {
    for (const path of pathsToRevalidate) {
      await res.unstable_revalidate(`${path}`);
      console.log(path, "pathtorevalidate...");
    }
    callSlackApi(`new trustpilot review added`);
    return res.json({ revalidated: true });
  } catch (err) {
    // Note: Next.js will continue showing the last successfully generated page
    callSlackApi(`${err} while revalidating`);
    return res.status(500).json({ message: "Error revalidating" });
  }
}
