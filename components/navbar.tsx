import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const Navbar = (): JSX.Element => {
  const [hidden, setHidden] = useState<boolean>(true);

  return (
    <nav className="navbar background-blur peer-checked:navbar-active fixed z-20 w-full items-center border-neutral-950 bg-neutral-950/80 text-white">
      <div className="m-auto px-6 xl:container md:px-12 lg:px-4">
        <div className="flex flex-wrap items-center justify-between gap-6 md:gap-0 md:py-3 lg:py-5">
          <div className="flex w-full items-center justify-between lg:w-auto">
            <Link
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
            </Link>
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
            } w-full flex-wrap content-center items-center justify-end space-y-8 rounded-3xl border border-neutral-600 border-neutral-700 bg-neutral-800 bg-neutral-800 p-6 shadow-2xl shadow-neutral-800/20 dark:shadow-none md:flex-nowrap lg:m-0 lg:flex lg:w-7/12 lg:space-y-0 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
          >
            <div className="text-gray-300">
              <ul className="lg:text-md items-center space-y-6 text-base font-medium tracking-wide lg:flex lg:space-y-0">
                <li className="text-center">
                  <Link
                    aria-label="EBI Ruleset"
                    href="/apply"
                    className=""
                    onClick={() => setHidden(true)}
                  >
                    <button
                      type="button"
                      className="rounded-lg bg-ses-950/50 px-5 py-2.5 text-sm font-medium text-white hover:bg-ses-950/30 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      Apply to Compete
                    </button>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-primary block transition hover:font-bold hover:text-ses-950 md:px-4"
                    onClick={() => setHidden(true)}
                  >
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-primary block transition hover:font-bold hover:text-ses-950 md:px-4"
                    onClick={() => setHidden(true)}
                  >
                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rules"
                    className="text-primary block transition hover:font-bold hover:text-ses-950 md:px-4"
                    onClick={() => setHidden(true)}
                  >
                    <span>Rules</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sponsor"
                    className="text-primary block transition hover:font-bold hover:text-ses-950 md:px-4"
                    onClick={() => setHidden(true)}
                  >
                    <span>Sponsor</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://shop10pgvl.com/"
                    target="_blank"
                    className="text-primary block transition hover:font-bold hover:text-ses-950 md:px-4"
                    onClick={() => setHidden(true)}
                  >
                    <span>Shop</span>
                  </Link>
                </li>
                <li>
                  <hr />
                </li>
                <div className="flex space-x-6 md:space-x-0">
                  <li className="space-x-6">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/sessubonly/"
                      className="text-primary block transition hover:font-bold hover:text-ses-950 md:px-4"
                    >
                      <Image
                        src="/SVG/icons/instagram-icon.svg"
                        alt="Southeast Scramble instagram"
                        width={23}
                        height={23}
                        className="hover:scale-110"
                      />
                    </a>
                  </li>
                  <li className="sm:space-x-6">
                    <a
                      href="https://www.youtube.com/@SESSubOnly/featured"
                      target="_blank"
                      className="text-primary block transition hover:font-bold hover:text-ses-950 md:px-4"
                    >
                      <Image
                        src="/SVG/icons/youtube-icon.svg"
                        alt="Southeast Scramble Youtube Channel"
                        width={23}
                        height={23}
                        className="hover:scale-110"
                      />
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
