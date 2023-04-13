import { karantina } from "./utils/googlefonts";

export const EbiRuleset = (): JSX.Element => {
  return (
    <div className="p-4">
      <h2 className={karantina.className}>
        <span className="mt-2 text-7xl font-bold tracking-tight sm:text-7xl">
          SES Ruleset{" "}
        </span>
        <em className="text-2xl">
          <span className="text-white">(</span>EBI Rules
          <span className="text-white">)</span>
        </em>
      </h2>
      <div>
        <h3 className="mt-2 text-2xl font-bold tracking-tight">Format</h3>
        <ul className="leading-1 max-w-xl list-disc text-base leading-7 lg:max-w-lg">
          <li>No points, no judges, submission only</li>
          <li>All submissions are legal.</li>
          <li>Slams are not permitted.</li>
          <li>Flying kani basami (scissor takedown) is not permitted.</li>
        </ul>
      </div>

      <div>
        <h3 className="mt-2 text-2xl font-bold tracking-tight">
          The “Get Down” Rule
        </h3>
        <ul className="leading-1 max-w-xl list-disc text-base leading-7 lg:max-w-lg">
          <li>
            If both competitors are on their feet (wrestling, standing
            grappling, etc.) for 1 minute straight, a horn will sound and the
            competitors will be forced to go to the mat and restart in sit-up
            guard/butterfly guard position with the competitor on bottom with
            double under hooks of his own and his head on either shoulder of the
            competitor on top. No placing your head in the center under
            opponent’s chin.{" "}
          </li>
          <li>
            If one opponent is CLEARLY the aggressor while standing, then he
            gets to choose if he wants to be top or bottom. Otherwise, a coin
            flip will determine which competitor chooses to be top or bottom.
          </li>
          <li>
            The “get down” clock resets each time both competitors are on their
            feet and standing/wrestling again.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="mt-2 text-2xl font-bold tracking-tight">
          Stalling Penalty
        </h3>
        <ul className="max-w-xl list-disc text-sm leading-6 lg:max-w-lg">
          <li>
            If one of the competitors is clearly stalling, the referee will give
            a warning to that competitor and his or her corner.
          </li>
          <li>
            If the stalling continues and is clearly obvious, the referee will
            stop the action and announce a penalty – 1 minute of “escape time”
            added to that competitor’s OT time. There are no limits to the
            amount of penalty calls that a referee can give.
          </li>
          <li>
            The most common stalling penalties are given when one competitor is
            grounded and his opponent remains on his feet and refuses to attempt
            to pass the guard of the grounded opponent.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="mt-2 text-2xl font-bold tracking-tight">
          Overtime (1 round minimum/3 rounds maximum)
        </h3>
        <p className="max-w-xl text-sm leading-6 lg:max-w-lg">
          If there is no submission after the regulation time limit, each
          competitor will have the chance to try to submit their opponent as
          fast as they can, while the other has a chance to escape. There will
          be a coin toss to determine which competitor will choose if they are
          starting on offense or defense.
        </p>

        <h3 className="mt-2 text-2xl font-bold tracking-tight">
          How to win in overtime
        </h3>
        <ul className="max-w-xl list-disc text-sm leading-6 lg:max-w-lg">
          <li>Submit your opponent faster than he or she can submit you.</li>
          <li>
            If there is no submission by end of overtime (bottom of the 3rd
            round), the competitor with the fastest combined escape time in that
            match will win.
          </li>
        </ul>

        <p className="max-w-xl text-sm leading-6 lg:max-w-lg">
          One overtime round means that a competitor had a chance at both
          offense and defense. There are up to three overtime rounds maximum per
          match.
        </p>

        <h3 className="mt-2 text-2xl font-bold tracking-tight">
          Example of one overtime round
        </h3>
        <ul className="max-w-xl list-disc text-sm leading-6 lg:max-w-lg">
          <li>
            Top of the 1st round = Competitor A on offense, Competitor B on
            defense.
          </li>
          <li>
            Bottom of the 1st round = Competitor B on offense, Competitor A on
            offense.
          </li>
        </ul>

        <p>
          <span className="max-w-xl list-disc text-sm leading-6 lg:max-w-lg">
            Each part of the overtime round is two minutes maximum. If there is
            no submission or escape after two minutes, the competitors move on
            to the next part of overtime.
          </span>
        </p>
        <p>
          <span className="max-w-xl list-disc text-sm leading-6 lg:max-w-lg">
            Example: Bottom of the 1st round, Competitor B is on offense,
            Competitor A is on defense. Neither competitor submitted or escaped
            after 2 minutes, meaning the competitors stop and move on to the Top
            of the 2nd round.
          </span>
        </p>
        <div>
          <h3 className="max-w-xl list-disc text-sm leading-6 lg:max-w-lg">
            Offense options:
          </h3>
          The competitor on offense gets to choose if they want to start in back
          control or armbar.
          <span className="max-w-xl list-disc text-sm leading-6 lg:max-w-lg">
            • Back control with a seatbelt grip (grip must be in the middle of
            the opponent’s chest). The defensive competitor may only secure his
            grips in a “pull up” fashion on the offensive competitor’s arms, but
            cannot sneak his or her hands inside the offensive competitor’s
            grips. Competitor on defense must sit up with perfect posture and
            may not lean forward or sideways until the referee officially starts
            the OT round.
          </span>
          <p>
            <span className="max-w-xl list-disc text-sm leading-6 lg:max-w-lg">
              • Armbar with one arm fully threaded in and holding the armbar,
              and the other hand on the mat. Competitors must be lined up
              perpendicularly with the competitor on defense flat on his back
              with his feet planted flat on the floor. The defensive competitor
              can only choose a figure four (aka “rear naked choke grip”)
              defense, or a gable grip (aka “palm to palm grip”). No other grips
              allowed at the start of spider web OT.
            </span>
          </p>
          <p>
            <span className="max-w-xl list-disc text-sm leading-6 lg:max-w-lg">
              • Switching from back control or spider web to any other
              submission (including the truck position, but excluding any other
              leg lock positions) once the time starts is permitted, as long as
              the transition is directly into a fully locked submission.
              Example: switching from armbar to fully locked triangle means the
              round is still going.
            </span>
          </p>
          <p>
            <span className="max-w-xl list-disc text-sm leading-6 lg:max-w-lg">
              If there is a submission in the top of the round, the competitor
              who was submitted needs to secure a submission faster than he or
              she was submitted.
            </span>
          </p>
          <p>
            <span className="max-w-xl list-disc text-sm leading-6 lg:max-w-lg">
              Example: Top of the 1st round, Competitor A submits Competitor B
              in 30 seconds. This means that in the Bottom of the 1st round,
              Competitor B needs to submit Competitor A in less than 30 seconds
              otherwise Competitor B loses.
            </span>
          </p>
          <p>
            <span className="max-w-xl list-disc text-sm leading-6 lg:max-w-lg">
              If there is a submission in the bottom of the round, the
              competitor who achieved the submission wins the match (since the
              other competitor was unable to submit their opponent in the top of
              the round).
            </span>
          </p>
          <h3 className="max-w-xl list-disc text-sm leading-6 lg:max-w-lg">
            An escape is when a competitor is fully free from the submission
            position as determined by the referee.
          </h3>
          <br />
          <span className="max-w-xl list-disc text-sm leading-6 lg:max-w-lg">
            • If you are on defense and your opponent is controlling your arm
            across your body, you must first clear your elbow before it will be
            considered an escape.
          </span>
          <p>
            <span className="max-w-xl list-disc text-sm leading-6 lg:max-w-lg">
              • Switching from either position to mount means the offensive
              player no longer has a locked in submission, and is thus
              considered an escape.
            </span>
          </p>
          <p>
            <span className="max-w-xl list-disc text-sm leading-6 lg:max-w-lg">
              • Submissions from defensive positions count as an escape, not a
              submission.
            </span>
          </p>
          <p>
            <span className="max-w-xl list-disc text-sm leading-6 lg:max-w-lg">
              Always keep escaping, even if you think you’re clear, keep
              escaping until the referee calls time. If competitor on defense
              thinks he’s out and makes gestures to the referee to stop the
              action, that means the escape is NOT complete. Keep escaping keep
              moving until the referee is clear that an escape has been
              achieved.{" "}
            </span>
          </p>
        </div>
      </div>

      <p className="max-w-xl list-disc text-sm leading-6 lg:max-w-lg pt-2">
        <em>
          *These rules are subject to change at anytime before the official
          rules meeting.
        </em>
      </p>
    </div>
  );
};
