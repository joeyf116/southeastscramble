import Image from "next/image";

export default function Events() {
  return (
    <section className="overflow-hidden bg-neutral-900 pb-6 sm:grid sm:grid-cols-2 sm:items-center">
      <div className="lg:py-18 p-8 md:p-12 lg:px-16">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <h2 className="font-karantina text-5xl font-bold tracking-tight text-white">
            <span className="bg-gradient-to-r from-ses-950 to-green-800 bg-clip-text text-6xl text-transparent dark:from-ses-950 dark:to-green-900 lg:text-7xl">
              Southeast Scramble
            </span>
          </h2>
          <p className="mt-4 text-left leading-7 text-white md:block">
            Welcome to the Southeast Scramble, a Nogi Brazilian Jiu-Jitsu
            tournament named after the dynamic and fast-paced style of grappling
            it showcases. Our event is modeled after the Eddie Bravo
            Invitational ruleset, which emphasizes submission grappling and
            encourages creative and innovative techniques.
          </p>
          <p className="mt-2 text-left leading-7 text-white md:block">
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
      </div>

      <Image
        alt="SES Staff"
        src="/images/manny.jpg"
        className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
        width={1000}
        height={1000}
        loading="lazy"
      />
    </section>
  );
}
