import React from "react";
import { karantina } from "./utils/googlefonts";
import Link from "next/link";

const HeaderHero = () => {
  return (
    <header className={karantina.className}>
      <div
        className="w-full max-w-xl bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/jzsub.jpg)",
        }}
      >
        <div className="flex h-full w-full max-w-xl items-center justify-center bg-gray-900 bg-opacity-60 py-12">
          <div className="text-center">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-xl text-center">
                {/* <button className="mx-2 my-2 rounded bg-gray-300 px-6 py-2 text-xs text-indigo-700 transition duration-150 ease-in-out hover:bg-gray-400">
                  SES Sub Only II
                </button> */}
                {/* Code block for indigo grey button ends */}
                {/* Code block for button with indigo outline starts */}
                <Link href="/apply">
                  <button className="mx-2 my-2 rounded border border-black bg-white px-6 py-2 text-3xl text-black transition duration-150 ease-in-out hover:border-neutral-950 hover:bg-ses-950 hover:text-neutral-950">
                    Athlete Application
                  </button>
                </Link>
                {/* Code block for button with indigo outline ends */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderHero;
