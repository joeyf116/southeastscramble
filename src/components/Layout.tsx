import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const titles: Record<string, string> = {
  "/about": "About",
  "/rules": "Rules",
  "/sponsor": "Sponsor",
  "/apply": "Apply",
};

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const page = titles[pathname];
    document.title = page
      ? `${page} | Southeast Scramble`
      : "Southeast Scramble";
  }, [pathname]);

  return (
    <div className="flex min-h-svh flex-col">
      <a
        href="#main"
        className="sr-only z-50 rounded bg-ses px-4 py-2 text-neutral-950 focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
