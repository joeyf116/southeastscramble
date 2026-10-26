import { Link } from "react-router-dom";
import Sponsors from "../components/Sponsors";
import { asset, links } from "../site";

const highlights = [
  {
    title: "Submission Only",
    body: "No points, no judges. Every match ends with a tap or goes to overtime.",
  },
  {
    title: "EBI Overtime",
    body: "Back control or armbar starts. Fastest submission or escape takes it.",
  },
  {
    title: "Cash Prize",
    body: "Real money on the line for the top grapplers in the Southeast.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-svh items-end overflow-hidden pt-24 pb-16 lg:items-center lg:pb-24">
        <img
          src={asset("images/jzsub.jpg")}
          alt=""
          className="absolute inset-0 -z-20 size-full object-cover"
          fetchPriority="high"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/75 to-neutral-950/40 lg:bg-gradient-to-r lg:from-neutral-950 lg:via-neutral-950/80 lg:to-neutral-950/20"
        />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
          <div className="animate-fade-up max-w-3xl">
            <p className="font-accent text-sm tracking-[0.2em] text-neutral-300 uppercase sm:text-base">
              Bringing the top Jiu Jitsu talent in the Southeast.
            </p>
            <h1 className="mt-4 font-display leading-[0.85] font-bold text-white">
              <span className="block text-5xl sm:text-7xl xl:text-8xl">
                EBI Rules. Cash Prize.
              </span>
              <span className="block text-gradient text-7xl sm:text-8xl xl:text-[10rem]">
                Submission Only.
              </span>
            </h1>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={links.apply}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Athlete Application
              </a>
              <Link to="/rules" className="btn-ghost">
                Read the Rules
              </Link>
            </div>
          </div>

          <img
            src={asset("images/spinning.svg")}
            alt="Southeast Scramble emblem"
            width={300}
            height={300}
            className="animate-spin-slow hidden w-64 opacity-90 invert lg:block xl:w-80"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((h, i) => (
            <article
              key={h.title}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-8"
            >
              <span className="font-accent text-sm text-ses">0{i + 1}</span>
              <h2 className="mt-2 font-display text-5xl text-white">
                {h.title}
              </h2>
              <p className="mt-3 text-neutral-400">{h.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="font-display text-5xl text-white">Our Partners</h2>
          <Link
            to="/sponsor"
            className="text-sm font-medium text-ses hover:underline"
          >
            Become a sponsor →
          </Link>
        </div>
        <div className="mt-8">
          <Sponsors />
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,theme(--color-ses/15%),transparent_70%)]"
        />
        <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
          <h2 className="font-display text-6xl leading-none text-white sm:text-7xl">
            Think you've got what it takes?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-400">
            Whether you're a seasoned competitor or looking to break into the
            professional scene, come test your skills against some of the best
            grapplers in the Southeast.
          </p>
          <a
            href={links.apply}
            target="_blank"
            rel="noreferrer"
            className="mt-8 btn-primary"
          >
            Apply to Compete
          </a>
        </div>
      </section>
    </>
  );
}
