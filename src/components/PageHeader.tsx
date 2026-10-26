import type { ReactNode } from "react";

export default function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden border-b border-white/10 pt-28 pb-12 lg:pt-36 lg:pb-16">
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 h-80 w-[48rem] max-w-[200vw] -translate-x-1/2 rounded-full bg-ses/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="font-accent text-sm tracking-[0.2em] text-ses uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-6xl leading-[0.9] font-bold text-white sm:text-7xl lg:text-8xl">
          {title}
        </h1>
        {children && (
          <div className="mt-5 max-w-2xl text-lg text-neutral-400">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
