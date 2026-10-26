import { asset, sponsors } from "../site";

export default function Sponsors() {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {sponsors.map((s) => (
        <li key={s.href}>
          <a
            href={s.href}
            target="_blank"
            rel="noreferrer"
            title={s.name}
            className="group flex h-28 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-ses/40 hover:bg-white/[0.06]"
          >
            <img
              src={asset(s.logo)}
              alt={s.name}
              className={`max-h-16 w-auto opacity-60 grayscale transition group-hover:opacity-100 group-hover:grayscale-0 ${
                s.invert ? "invert" : ""
              }`}
              loading="lazy"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
