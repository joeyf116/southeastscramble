import Image from "next/image";
import { Karantina } from "next/font/google";
import { Contrail_One } from "next/font/google";
import Head from "next/head";

const karantina = Karantina({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const contrailOne = Contrail_One({ subsets: ["latin"], weight: ["400"] });

export default function Rules() {
  return (
    <div className="relative pt-28 lg:pt-44">
      <h1>EBI Ruleset</h1>
    </div>
  );
}
