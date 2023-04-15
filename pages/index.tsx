import Image from "next/image";
import { Karantina } from "next/font/google";
import { Contrail_One } from "next/font/google";
import Link from "next/link";
import HeaderHero from "@/components/headerHero";

const karantina = Karantina({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const contrailOne = Contrail_One({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <>
      <div className="relative bg-neutral-900">
        <div className="relative m-auto px-0 xl:container md:px-12 lg:px-6">
          <h1 className="text-center text-5xl font-black text-white sm:mx-auto sm:text-5xl md:w-2/3 md:text-5xl lg:w-auto lg:text-left xl:text-7xl">
            <span className={karantina.className}>EBI Rules. Cash Prize.</span>{" "}
            <br className="block" />{" "}
            <span className="relative bg-gradient-to-r from-ses-950 to-green-800 bg-clip-text text-6xl text-transparent dark:from-ses-950 dark:to-green-900 lg:text-8xl">
              <span className={`${karantina.className} text-9x1`}>
                Submission Only
              </span>
            </span>
            .
          </h1>
          <div className="lg:flex">
            <div className="relative mt-6 space-y-8 text-center sm:mx-auto sm:w-10/12 md:mt-6 md:w-2/3 lg:ml-0 lg:mr-auto lg:w-7/12 lg:text-left">
              <span className="block font-contrail text-gray-500 dark:text-gray-400">
                Bringing the top Jiu Jitsu talent in the Southeast.
              </span>
              <HeaderHero />

              <div className="flex justify-between gap-6 px-6 pt-6 grayscale lg:w-2/3 lg:gap-12">
                <a href="https://www.10thplanetgreenville.com/" target="_blank">
                  <Image
                    src="/SVG/brand/10pgvl.svg"
                    width={70}
                    height={70}
                    alt="10th Planet Greenville Jiu Jitsu"
                  />
                </a>
                <a href="https://www.misunderstoodmutt.com/" target="_blank">
                  <Image
                    src="/SVG/brand/misunderstoodmutt.svg"
                    width={70}
                    height={70}
                    alt="Misunderstood Mutt Virtual Dog Training"
                  />
                </a>
                <a
                  href="https://www.instagram.com/kylie_renee_photography_/"
                  target="_blank"
                >
                  <Image
                    className="invert"
                    src="/SVG/brand/kyliephotography.svg"
                    width={80}
                    height={80}
                    alt="Kylie Renee Photography"
                  />
                </a>
                <a href="https://mikeruttan.webflow.io/" target="_blank">
                  <Image
                    src="/SVG/brand/MR-Wht.svg"
                    width={70}
                    height={70}
                    alt="Mike Ruttan Design"
                  />
                </a>
              </div>
            </div>
            <div className="px-24 pb-12 pt-12 md:mt-0 md:p-0 lg:w-4/12">
              <div className="relative w-full">
                <Image
                  src="/images/spinning.svg"
                  className="relative w-full invert"
                  alt="wath illustration"
                  width="300"
                  height="300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
