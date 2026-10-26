import type { ReactNode } from "react";
import PageHeader from "../components/PageHeader";
import { asset } from "../site";

type Section = { id: string; title: string; body: ReactNode };

const List = ({ items }: { items: ReactNode[] }) => (
  <ul className="space-y-2">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3">
        <span
          aria-hidden="true"
          className="mt-2.5 size-1.5 shrink-0 rounded-full bg-ses"
        />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const sections: Section[] = [
  {
    id: "format",
    title: "Format",
    body: (
      <List
        items={[
          "No points, no judges, submission only",
          "All submissions are legal.",
          "Slams are not permitted.",
          "Flying kani basami (scissor takedown) is not permitted.",
          "Mouth guards are required.",
        ]}
      />
    ),
  },
  {
    id: "get-down",
    title: "The “Get Down” Rule",
    body: (
      <>
        <p>
          If both competitors are on their feet (wrestling, standing grappling,
          etc.) for 1 minute straight, a horn will sound and the competitors
          will be forced to go to the mat and restart in sit-up guard/butterfly
          guard position with the competitor on bottom with double under hooks
          of his own and his head on either shoulder of the competitor on top.
          No placing your head in the center under opponent’s chin.
        </p>
        <p>
          If one opponent is CLEARLY the aggressor while standing, then he gets
          to choose if he wants to be top or bottom. Otherwise, a coin flip will
          determine which competitor chooses to be top or bottom.
        </p>
        <p>
          The “get down” clock resets each time both competitors are on their
          feet and standing/wrestling again.
        </p>
      </>
    ),
  },
  {
    id: "stalling",
    title: "Stalling Penalty",
    body: (
      <>
        <p>
          If one of the competitors is clearly stalling, the referee will give a
          warning to that competitor and his or her corner.
        </p>
        <p>
          If the stalling continues and is clearly obvious, the referee will
          stop the action and announce a penalty – 1 minute of “escape time”
          added to that competitor’s OT time. There are no limits to the amount
          of penalty calls that a referee can give.
        </p>
        <p>
          The most common stalling penalties are given when one competitor is
          grounded and his opponent remains on his feet and refuses to attempt
          to pass the guard of the grounded opponent.
        </p>
      </>
    ),
  },
  {
    id: "overtime",
    title: "EBI Overtime",
    body: (
      <>
        <p className="font-accent text-ses">
          1 round minimum / 3 rounds maximum
        </p>
        <p>
          If there is no submission after the regulation time limit, each
          competitor will have the chance to try to submit their opponent as
          fast as they can, while the other has a chance to escape. There will
          be a coin toss to determine which competitor will choose if they are
          starting on offense or defense.
        </p>
        <p className="font-semibold text-white">How to win in overtime:</p>
        <List
          items={[
            "Submit your opponent faster than he or she can submit you.",
            "If there is no submission by end of overtime",
          ]}
        />
        <p>
          One overtime round means that a competitor had a chance at both
          offense and defense. There are up to three overtime rounds maximum per
          match.
        </p>
      </>
    ),
  },
  {
    id: "overtime-example",
    title: "Example of One Overtime Round",
    body: (
      <>
        <p>
          Top of the 1st round = Competitor A on offense, Competitor B on
          defense. Bottom of the 1st round = Competitor B on offense, Competitor
          A on defense.
        </p>
        <p>
          Each part of the overtime round is two minutes maximum. If there is no
          submission or escape after two minutes, the competitors move on to the
          next part of overtime.
        </p>
        <p>
          Example: Bottom of the 1st round, Competitor B is on offense,
          Competitor A is on defense. Neither competitor submitted or escaped
          after 2 minutes, meaning the competitors stop and move on to the Top
          of the 2nd round.
        </p>
      </>
    ),
  },
  {
    id: "offense",
    title: "Offense Options",
    body: (
      <>
        <p>
          The competitor on offense gets to choose if they want to start in back
          control or armbar. Offense options:
        </p>
        <List
          items={[
            "Back control with a seatbelt grip (grip must be in the middle of the opponent’s chest). The defensive competitor may only secure his grips in a “pull up” fashion on the offensive competitor’s arms, but cannot sneak his or her hands inside the offensive competitor’s grips. Competitor on defense must sit up with perfect posture and may not lean forward or sideways until the referee officially starts the OT round.",
            "Armbar with one arm fully threaded in and holding the armbar, and the other hand on the mat. Competitors must be lined up perpendicularly with the competitor on defense flat on his back with his feet planted flat on the floor. The defensive competitor can only choose a figure four (aka “rear naked choke grip”) defense, or a gable grip (aka “palm to palm grip”). No other grips allowed at the start of spider web OT.",
            "Switching from back control or spider web to any other submission (including the truck position, but excluding any other leg lock positions) once the time starts is permitted, as long as the transition is directly into a fully locked submission. Example: switching from armbar to fully locked triangle means the round is still going.",
          ]}
        />
        <p>
          If there is a submission in the top of the round, the competitor who
          was submitted needs to secure a submission faster than he or she was
          submitted.
        </p>
        <p>
          Example: Top of the 1st round, Competitor A submits Competitor B in 30
          seconds. This means that in the Bottom of the 1st round, Competitor B
          needs to submit Competitor A in less than 30 seconds otherwise
          Competitor B loses.
        </p>
        <p>
          If there is a submission in the bottom of the round, the competitor
          who achieved the submission wins the match (since the other competitor
          was unable to submit their opponent in the top of the round).
        </p>
      </>
    ),
  },
  {
    id: "escapes",
    title: "Escapes",
    body: (
      <>
        <p>
          An escape is when a competitor is fully free from the submission
          position as determined by the referee.
        </p>
        <List
          items={[
            "If you are on defense and your opponent is controlling your arm across your body, you must first clear your elbow before it will be considered an escape.",
            "Switching from either position to mount means the offensive player no longer has a locked in submission, and is thus considered an escape.",
            "Submissions from defensive positions count as an escape, not a submission.",
          ]}
        />
        <p>
          Always keep escaping, even if you think you’re clear, keep escaping
          until the referee calls time. If competitor on defense thinks he’s out
          and makes gestures to the referee to stop the action, that means the
          escape is NOT complete. Keep escaping keep moving until the referee is
          clear that an escape has been achieved.
        </p>
      </>
    ),
  },
];

const photos = [
  { src: "images/hashir.jpg", alt: "Referee explaining the rules" },
  { src: "images/armbar.jpg", alt: "Competitor attacking an armbar" },
  { src: "images/handraise.jpg", alt: "Referee raising the winner's hand" },
];

export default function Rules() {
  return (
    <>
      <PageHeader eyebrow="EBI Rules" title="SES Official Ruleset">
        No points, no judges, submission only.
      </PageHeader>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[220px_1fr] lg:px-8 lg:py-16">
        <nav
          aria-label="Ruleset sections"
          className="min-w-0 lg:sticky lg:top-28 lg:self-start"
        >
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
            On this page
          </p>
          <ul className="flex [scrollbar-width:none] gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible">
            {sections.map((s) => (
              <li key={s.id} className="shrink-0">
                <a
                  href={`#${s.id}`}
                  className="block rounded-full border border-white/10 px-4 py-1.5 text-sm whitespace-nowrap text-neutral-300 transition hover:border-ses/50 hover:text-ses lg:rounded-lg lg:border-transparent lg:px-3"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="min-w-0 space-y-6">
          {sections.map((s, i) => (
            <section
              key={s.id}
              id={s.id}
              className="scroll-mt-24 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-accent text-sm text-ses">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-4xl text-white sm:text-5xl">
                  {s.title}
                </h2>
              </div>
              <div className="mt-4 space-y-4 leading-7 text-neutral-300">
                {s.body}
              </div>
            </section>
          ))}
          <p className="text-sm text-neutral-500 italic">
            *These rules are subject to change at anytime before the official
            rules meeting.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {photos.map((p) => (
            <img
              key={p.src}
              src={asset(p.src)}
              alt={p.alt}
              loading="lazy"
              className="aspect-[3/2] w-full rounded-2xl object-cover ring-1 ring-white/10"
            />
          ))}
        </div>
      </section>
    </>
  );
}
