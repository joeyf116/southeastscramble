import { karantina } from "@/components/utils/googlefonts";
import Image from "next/image";

export default function Sponsor() {
  return (
    <section className="overflow-hidden bg-neutral-900 pt-28 sm:grid sm:grid-cols-2 sm:items-center">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <h2
            className={`text-5xl font-bold tracking-tight text-white ${karantina.className}`}
          >
            <span className="text-5xl font-bold tracking-tight text-white">
              Become a Sponsor
            </span>
          </h2>
          <p className="mt-4 leading-7 text-white md:block">
            SES offers the opportunity to advertise your products and services
            during our live events, websites, and on our social media content.
            All sponsorship packages can be customized to meet prospective
            sponsors’ goals. Strategic sponsorship plans can be developed to
            meet individual partner needs. For sponsorship information, please
            contact us at: {""}
            <a
              href="mailto:10thplanetjjgreenville@gmail.com"
              className="text-blue-600 underline target:shadow-lg"
            >
              @10thplanetjjgreenville@gmail.com
            </a>
          </p>
        </div>
      </div>

      <Image
        alt="SES Staff"
        src="/images/sesStaff.jpg"
        className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
        width={500}
        height={500}
        loading="lazy"
      />
    </section>
  );
}
