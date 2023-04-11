import Image from "next/image";
import { useState } from "react";

export const Navbar = (): JSX.Element => {
  const [hidden, setHidden] = useState<boolean>(true);

  return (
    <nav className="navbar background-blur peer-checked:navbar-active fixed z-20 w-full border-neutral-900 bg-neutral-900/80 text-white">
      <div className="m-auto px-6 xl:container md:px-12 lg:px-6">
        <div className="flex flex-wrap items-center justify-between gap-6 md:gap-0 md:py-3 lg:py-5">
          <div className="flex w-full items-center justify-between lg:w-auto">
            <a
              className="relative z-10 w-full"
              href="/"
              aria-label="SES logo, click to homepage"
            >
              <Image
                src={"/SVG/brand/MultiColorLogo.svg"}
                alt="SES Logo"
                height={40}
                width={40}
              />
            </a>
            <div>
              <label
                htmlFor="hbr"
                className="peer-checked:hamburger relative z-20 -mr-6 block cursor-pointer p-6 lg:hidden"
                onClick={() => setHidden(!hidden)}
              >
                <div
                  aria-hidden="true"
                  className="m-auto h-0.5 w-7 rounded bg-gray-300 transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  className="m-auto mt-2 h-0.5 w-7 rounded bg-gray-300 transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  className="m-auto mt-2 h-0.5 w-7 rounded bg-gray-300 transition duration-300"
                ></div>
              </label>
            </div>
          </div>
          <div
            className={`navmenu mb-16 ${
              hidden ? "hidden" : ""
            } w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-neutral-600 border-neutral-700 bg-neutral-800 bg-neutral-800 p-6 shadow-2xl shadow-neutral-800/20 dark:shadow-none md:flex-nowrap lg:m-0 lg:flex lg:w-7/12 lg:space-y-0 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
          >
            <div className="text-gray-300 lg:pr-4">
              <ul className="lg:text-md space-y-6 text-base font-medium tracking-wide lg:flex lg:space-y-0">
                <li>
                  <a
                    href="/events"
                    className="text-primary block transition hover:font-bold hover:text-ses-950 md:px-4"
                  >
                    <span>Events</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/rules"
                    className="text-primary block transition hover:font-bold hover:text-ses-950 md:px-4"
                  >
                    <span>Rules</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://shop10pgvl.com/"
                    target="_blank"
                    className="text-primary block transition hover:font-bold hover:text-ses-950 md:px-4"
                  >
                    <span>Shop</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
