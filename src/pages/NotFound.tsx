import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70svh] max-w-3xl flex-col items-center justify-center px-4 pt-24 text-center">
      <p className="font-accent text-sm tracking-[0.2em] text-ses uppercase">
        404
      </p>
      <h1 className="mt-3 font-display text-7xl text-white">Tapped Out</h1>
      <p className="mt-4 text-neutral-400">
        That page escaped. Let's get you back on the mat.
      </p>
      <Link to="/" className="mt-8 btn-primary">
        Back Home
      </Link>
    </section>
  );
}
