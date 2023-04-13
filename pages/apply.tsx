import Image from "next/image";

export default function Apply() {
  return (
    <div className="m-auto bg-neutral-900 pb-20 pt-28 lg:pt-44">
      <Image
        src="/images/scrambleppi4x.png"
        height={350}
        width={350}
        alt="SES Superfight Logo"
        className="invert"
      />
      <hr className="sm:hidden mt-2" />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSc2JsrEzrCH0NI4RIWPOfLve0x9TyuFZfyzi2RlAGHuYmWDzQ/viewform?embedded=true"
        width="350px"
        height="2240px"
        scrolling="no"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        className="md:w-500"
      >
        Loading…
      </iframe>
    </div>
  );
}
