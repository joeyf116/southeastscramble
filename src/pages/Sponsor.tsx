import PageHeader from "../components/PageHeader";
import Sponsors from "../components/Sponsors";
import { asset, links } from "../site";

export default function Sponsor() {
  return (
    <>
      <PageHeader eyebrow="Partner with us" title="Become a Sponsor" />
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <p className="text-lg leading-8 text-neutral-300">
            SES offers the opportunity to advertise your products and services
            during our live events, websites, and on our social media content.
            All sponsorship packages can be customized to meet prospective
            sponsors’ goals. Strategic sponsorship plans can be developed to
            meet individual partner needs.
          </p>
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-neutral-400">
              For sponsorship information, contact us at
            </p>
            <a
              href={`mailto:${links.sponsorEmail}`}
              className="mt-1 block font-medium break-all text-ses hover:underline"
            >
              {links.sponsorEmail}
            </a>
            <a
              href={`mailto:${links.sponsorEmail}`}
              className="mt-5 btn-primary"
            >
              Email Us
            </a>
          </div>
        </div>
        <img
          src={asset("images/sesStaff.jpg")}
          alt="SES staff"
          className="aspect-[4/3] w-full rounded-[2rem] object-cover ring-1 ring-white/10"
          loading="lazy"
        />
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <h2 className="font-display text-5xl text-white">Current Partners</h2>
        <div className="mt-8">
          <Sponsors />
        </div>
      </section>
    </>
  );
}
