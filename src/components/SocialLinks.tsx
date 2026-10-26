import { asset, links } from "../site";

const socials = [
  {
    href: links.instagram,
    icon: "SVG/icons/instagram-icon.svg",
    label: "Southeast Scramble on Instagram",
  },
  {
    href: links.youtube,
    icon: "SVG/icons/youtube-icon.svg",
    label: "Southeast Scramble YouTube channel",
  },
];

export default function SocialLinks({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map((s) => (
        <a
          key={s.href}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          aria-label={s.label}
          className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:scale-110 hover:border-ses/60"
        >
          <img src={asset(s.icon)} alt="" width={20} height={20} />
        </a>
      ))}
    </div>
  );
}
