/** Resolve a file in /public against the deploy base path. */
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const links = {
  apply: "https://forms.gle/KP28oeBmv4c7uhrNA",
  applyEmbed:
    "https://docs.google.com/forms/d/e/1FAIpQLSc2JsrEzrCH0NI4RIWPOfLve0x9TyuFZfyzi2RlAGHuYmWDzQ/viewform?embedded=true",
  instagram: "https://www.instagram.com/sessubonly/",
  youtube: "https://www.youtube.com/@SESSubOnly/featured",
  shop: "https://shop10pgvl.com/",
  sponsorEmail: "10thplanetjjgreenville@gmail.com",
};

export const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Rules", to: "/rules" },
  { label: "Sponsor", to: "/sponsor" },
];

export const sponsors = [
  {
    name: "10th Planet Greenville Jiu Jitsu",
    href: "https://www.10thplanetgreenville.com/",
    logo: "SVG/brand/10pgvl.svg",
  },
  {
    name: "Misunderstood Mutt Virtual Dog Training",
    href: "https://www.misunderstoodmutt.com/",
    logo: "SVG/brand/misunderstoodmutt.svg",
  },
  {
    name: "Kylie Renee Photography",
    href: "https://www.instagram.com/kylie_renee_photography_/",
    logo: "SVG/brand/kyliephotography.svg",
    invert: true,
  },
  {
    name: "Mike Ruttan Design",
    href: "https://mikeruttan.webflow.io/",
    logo: "SVG/brand/MR-Wht.svg",
  },
];
