import { Link } from "react-router-dom";
import { asset, links, navItems } from "../site";
import SocialLinks from "./SocialLinks";

const footerLink = "text-neutral-400 transition hover:text-ses";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <img
            src={asset("SVG/brand/MultiColorLogo.svg")}
            alt="Southeast Scramble"
            width={48}
            height={48}
          />
          <p className="mt-4 font-accent text-neutral-400">
            Sub Only. EBI Rules.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-3 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={footerLink}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={links.shop}
                target="_blank"
                rel="noreferrer"
                className={footerLink}
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href={links.apply}
                target="_blank"
                rel="noreferrer"
                className={footerLink}
              >
                Apply
              </a>
            </li>
          </ul>
        </nav>
        <div className="md:justify-self-end">
          <p className="text-sm text-neutral-400">Follow the action</p>
          <SocialLinks className="mt-3" />
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Southeast Scramble™. All Rights Reserved.
      </div>
    </footer>
  );
}
