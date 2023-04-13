import Image from "next/image";
import { Karantina } from "next/font/google";
import { Contrail_One } from "next/font/google";
import Head from "next/head";
import { EbiRuleset } from "@/components/EBIRuleset";

const karantina = Karantina({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const contrailOne = Contrail_One({ subsets: ["latin"], weight: ["400"] });

export default function Rules() {
  return (
    <div className="relative py-6 pt-28 lg:pt-44">
      <div className="relative m-auto px-6 xl:container md:px-12 lg:px-6">
        <EbiRuleset />
      </div>
    </div>
  );
}
