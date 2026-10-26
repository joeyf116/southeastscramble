import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { asset, links, navItems } from "../site";
import SocialLinks from "./SocialLinks";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `px-1 py-2 text-sm font-medium tracking-wide uppercase transition hover:text-ses ${
    isActive ? "text-ses" : "text-neutral-300"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          solid
            ? "border-b border-white/10 bg-neutral-950/85 backdrop-blur-lg"
            : "bg-gradient-to-b from-neutral-950/80 to-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="Southeast Scramble home"
          >
            <img
              src={asset("SVG/brand/MultiColorLogo.svg")}
              alt=""
              width={40}
              height={40}
              className="size-9 lg:size-10"
            />
            <span className="font-display text-3xl leading-none tracking-wide text-white">
              Southeast Scramble
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} end className={linkClass}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <a
                  href={links.shop}
                  target="_blank"
                  rel="noreferrer"
                  className={linkClass({ isActive: false })}
                >
                  Shop
                </a>
              </li>
            </ul>
            <a
              href={links.apply}
              target="_blank"
              rel="noreferrer"
              className="btn-primary py-2.5"
            >
              Apply to Compete
            </a>
          </div>

          <button
            type="button"
            className="relative -mr-2 grid size-11 place-items-center lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span
              className={`absolute h-0.5 w-6 rounded bg-white transition ${open ? "rotate-45" : "-translate-y-2"}`}
            />
            <span
              className={`absolute h-0.5 w-6 rounded bg-white transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute h-0.5 w-6 rounded bg-white transition ${open ? "-rotate-45" : "translate-y-2"}`}
            />
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-16 bottom-0 z-30 overflow-y-auto bg-neutral-950/95 px-4 pb-10 backdrop-blur-lg transition duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <ul className="divide-y divide-white/10 border-b border-white/10">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end
                className={({ isActive }) =>
                  `block py-4 font-display text-4xl tracking-wide ${isActive ? "text-ses" : "text-white"}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href={links.shop}
              target="_blank"
              rel="noreferrer"
              className="block py-4 font-display text-4xl tracking-wide text-white"
            >
              Shop ↗
            </a>
          </li>
        </ul>
        <a
          href={links.apply}
          target="_blank"
          rel="noreferrer"
          className="mt-8 btn-primary w-full"
        >
          Apply to Compete
        </a>
        <SocialLinks className="mt-8 justify-center" />
      </div>
    </>
  );
}
