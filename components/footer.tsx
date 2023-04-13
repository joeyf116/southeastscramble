import Image from "next/image";

export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-neutral-900 mt-auto shadow">
      <hr className="border-top-white"/>
      <div className="flex flex-col-reverse items-start justify-between pt-8 lg:flex-row lg:items-center lg:p-12">
        <p className="m-4 text-gray-500">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Southeast Scramble™
          </a>
          . All Rights Reserved.
        </p>
        <div className="m-4 flex space-x-6">
          <a
            className="flex-shrink-0"
            target="_blank"
            href="https://www.instagram.com/sessubonly/"
          >
            <Image
              src="/SVG/icons/instagram-icon.svg"
              alt="Southeast Scramble instagram"
              width={23}
              height={23}
            />
          </a>
          <a
            className="flex-shrink-0"
            href="https://www.youtube.com/@SESSubOnly/featured"
            target="_blank"
          >
            <Image
              src="/SVG/icons/youtube-icon.svg"
              alt="Southeast Scramble Youtube Channel"
              width={23}
              height={23}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
