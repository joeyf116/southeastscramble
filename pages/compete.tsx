import Image from "next/image";
import { FcRules } from "react-icons/fc";
import {
  BsCalendarEventFill,
  BsCheckSquare,
  BsFileRuledFill,
} from "react-icons/bs";
import { Karantina } from "next/font/google";
import { Contrail_One } from "next/font/google";

const karantina = Karantina({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const contrailOne = Contrail_One({ subsets: ["latin"], weight: ["400"] });

export default function Compete() {
  return (
    <>
      <div className="bg-white relative pt-40 pb-20 lg:pt-44 dark:bg-neutral-950">
        <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
          <h1 className="sm:mx-auto md:w-2/3 font-black text-green-900 text-6xl text-center sm:text-7xl md:text-7xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">
            <span className={karantina.className}>EBI Rules. Cash Prize.</span>{" "}
            <br className="lg:block" />{" "}
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-ses-950 to-green-800 dark:from-ses-950 dark:to-green-900">
              <span className={`${karantina.className} text-9x1`}>
                Submission Only
              </span>
            </span>
            .
          </h1>
          <div className="lg:flex">
            <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
              <span className="block font-semibold text-gray-500 dark:text-gray-400">
                Bringing the top Jiu Jitsu talent in the Southeast.
              </span>
              <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                <a
                  aria-label="Find Upcoming Events"
                  href="#"
                  className="p-4 border border-neutral-900/80 dark:bg-neutral-900/80 dark:border-neutral-900/80 rounded-full duration-300 dark:hover:border-ses-950 shadow-lg dark:hover:shadow-ses-950/20 dark:border-ses-950/30"
                >
                  <div className="flex justify-center space-x-4">
                    <BsCalendarEventFill
                      className="w-6 h-6"
                      width="128"
                      height="128"
                      color="white"
                    />
                    <span className={"font-medium dark:text-white"}>
                      Events
                    </span>
                  </div>
                </a>
                <a
                  aria-label="add to chat"
                  href="#"
                  className="p-4 border border-neutral-900/80 dark:bg-neutral-900/80 dark:border-neutral-900/80 rounded-full duration-300 dark:hover:border-ses-950 shadow-lg dark:hover:shadow-ses-950/20 dark:border-ses-950/30"
                >
                  <div className="flex justify-center space-x-4">
                    <BsFileRuledFill
                      className="w-6 h-6"
                      width="128"
                      height="128"
                    />
                    <span className="font-medium dark:text-white">Rules</span>
                  </div>
                </a>
                <a
                  aria-label="add to zoom"
                  href="#"
                  className="p-4 border border-neutral-900/80 dark:bg-neutral-900/80 dark:border-neutral-900/80 rounded-full duration-300 dark:hover:border-ses-950 shadow-lg dark:hover:shadow-ses-950/20 dark:border-ses-950/30"
                >
                  <div className="flex justify-center space-x-4">
                    <BsCheckSquare
                      className="w-6 h-6"
                      width="128"
                      height="128"
                      color="white"
                    />
                    <span className="font-medium dark:text-white">Apply</span>
                  </div>
                </a>
              </div>

              <div className="pt-12 flex gap-6 lg:gap-12 justify-between grayscale lg:w-2/3">
                <Image src="/SVG/10pgvl.svg" width={50} height={50} alt="" />
                <Image src="/SVG/10pgvl.svg" width={50} height={50} alt="" />
                <Image src="/SVG/10pgvl.svg" width={50} height={50} alt="" />
                <Image src="/SVG/10pgvl.svg" width={50} height={50} alt="" />
              </div>
            </div>
            <div className="mt-12 md:mt-0 lg:absolute -right-10 lg:w-7/12">
              <div className="relative w-full">
                <Image
                  src="/SVG/HorizontalTextDark.svg"
                  className="relative w-full invert"
                  alt="wath illustration"
                  loading="lazy"
                  width="100"
                  height="100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
