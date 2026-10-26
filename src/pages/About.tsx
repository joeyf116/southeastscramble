import PageHeader from "../components/PageHeader";
import { asset } from "../site";

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={<span className="text-gradient">Southeast Scramble</span>}
      />
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="space-y-5 text-lg leading-8 text-neutral-300">
          <p>
            Welcome to the Southeast Scramble, a Nogi Brazilian Jiu-Jitsu
            tournament named after the dynamic and fast-paced style of grappling
            it showcases. Our event is modeled after the Eddie Bravo
            Invitational ruleset, which emphasizes submission grappling and
            encourages creative and innovative techniques.
          </p>
          <p>
            SES is organized by Manny Vazquez, a dedicated Mixed Martial Arts
            practitioner with a passion for promoting Jiu Jitsu in his
            community. Manny has competed in numerous tournaments and
            understands the challenges and rewards of training and competing in
            Jiu Jitsu. His goal is to provide a platform for talented athletes
            to showcase their skills and to foster a positive and supportive
            environment for all competitors. Whether you're a seasoned
            competitor or looking to break into the professional scene, come
            join us and test your skills against some of the best grapplers in
            the Southeast!
          </p>
        </div>
        <figure className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-br from-ses/30 to-transparent blur-2xl"
          />
          <img
            src={asset("images/manny.jpg")}
            alt="Manny Vazquez, Southeast Scramble organizer"
            className="aspect-[4/3] w-full rounded-[2rem] object-cover ring-1 ring-white/10"
            loading="lazy"
          />
        </figure>
      </section>
    </>
  );
}
