import PageHeader from "../components/PageHeader";
import { links } from "../site";

export default function Apply() {
  return (
    <>
      <PageHeader eyebrow="Compete" title="Athlete Application">
        Having trouble with the form below?{" "}
        <a
          href={links.apply}
          target="_blank"
          rel="noreferrer"
          className="text-ses hover:underline"
        >
          Open it in Google Forms
        </a>
        .
      </PageHeader>
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-white/10">
          <iframe
            src={links.applyEmbed}
            title="Southeast Scramble athlete application"
            className="h-[2240px] w-full"
            loading="lazy"
          >
            Loading…
          </iframe>
        </div>
      </section>
    </>
  );
}
