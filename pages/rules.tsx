import Image from "next/image";
import { Karantina } from "next/font/google";
import { Contrail_One } from "next/font/google";
import EbiRuleset from "@/components/EBIRuleset";

const karantina = Karantina({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const contrailOne = Contrail_One({ subsets: ["latin"], weight: ["400"] });

export default function Rules() {
  return (
    <div className="relative grid grid-cols-2 gap-4 xl:grid-cols-3">
      <div className="col-span-2">
        <EbiRuleset />
      </div>
      <div className="col-span-2 mx-auto xl:col-span-1">
        <Image
          src={"/images/spinning.svg"}
          width={200}
          height={200}
          alt={"Ref Explaning Rules"}
          className="mx-auto h-auto max-w-lg pb-10 invert dark:shadow-black/30"
        />
        <Image
          src={"/images/hashir.jpg"}
          width={300}
          height={300}
          alt={"Ref Explaning Rules"}
          className="mx-auto h-auto max-w-lg pb-10 shadow-lg dark:shadow-black/30"
        />
        <Image
          src={"/images/armbar.jpg"}
          width={300}
          height={300}
          alt={"Ref Explaning Rules"}
          className="mx-auto h-auto max-w-lg pb-10 shadow-lg dark:shadow-black/30"
        />
        <Image
          src={"/images/handraise.jpg"}
          width={300}
          height={300}
          alt={"Ref Explaning Rules"}
          className="mx-auto h-auto max-w-lg pb-10 dark:shadow-black/30"
        />
      </div>
    </div>
  );
}
