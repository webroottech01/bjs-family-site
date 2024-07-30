export type Client =
  | "cotswold"
  | "MADE"
  | "julian bowen"
  | "nectar sleep"
  | "oliver bonas"
  | "one call furniture"
  | "richer sounds"
  | "tarmac"
  | "wienerberger"
  | "happy beds"
  | "wayfair"
  | "timeforsleep"
  | "tv bed store"
  | "julianBowen"
  | "richerSounds";

const basePath = `/images/logos/clients`;
const logoBasePath = `${process.env["NEXT_PUBLIC_CONTENT_RESOURCE"]}/bjs-family/partner_logos/home_delivery/partnerLogos_`;

const paths: Record<Client, string> = {
  cotswold: "cotswold.svg",
  MADE: "made.svg",
  "julian bowen": "julian-bowen.svg",
  "nectar sleep": "nectar-sleep.png",
  "oliver bonas": "oliver-bonas.png",
  "one call furniture": "one-call-furniture.png",
  "richer sounds": "richer-sounds.png",
  tarmac: "tarmac.png",
  wienerberger: "wienerberger.png",
  "happy beds": "happyBeds.png",
  "tv bed store": "tvBedStore.png",
  wayfair: "wayfair_logo.png",
  timeforsleep: "Logos_Time4Sleep.jpg",
  julianBowen: "SVG_JulianBowen.svg",
  richerSounds: "SVG_RicherSounds.svg",
};

const urls: Record<Client, string> = {
  cotswold: "https://www.cotswoldco.com/",
  MADE: "https://www.made.com/",
  "julian bowen": "https://julian-bowen.co.uk/",
  "nectar sleep": "https://www.nectarsleep.co.uk/",
  "oliver bonas": "https://www.oliverbonas.com/",
  "one call furniture": "https://onecall.furniture/",
  "richer sounds": "https://www.richersounds.com/",
  tarmac: "https://tarmac.com/",
  wienerberger: "https://www.wienerberger.co.uk/",
  "happy beds": "https://www.happybeds.co.uk/",
  "tv bed store": "https://www.tvbedstore.co.uk/",
  wayfair: "https://www.wayfair.co.uk/",
  timeforsleep: "https://www.time4sleep.co.uk/",
  julianBowen: "https://julian-bowen.co.uk/",
  richerSounds: "https://www.richersounds.com/",
};

const richerSoundsWide = `${basePath}/logos_richerSounds_HQ.png`;

function getSubpath(input: Client): string {
  const result = paths[input];
  if (!result) {
    throw new Error("Cannot find " + input);
  }
  return result;
}

function getClientLogo(input: Client): string {
  if (input === "julianBowen" || input === "richerSounds") {
    return `${logoBasePath}${getSubpath(input)}`;
  }
  return `${basePath}/${getSubpath(input)}`;
}

function getUrl(input: Client): string {
  return urls[input];
}

export { getUrl, richerSoundsWide };
export default getClientLogo;
