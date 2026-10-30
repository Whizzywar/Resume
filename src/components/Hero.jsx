import { profile, extra } from "../data";
import { icons } from "./Icons";
import { portrait } from "../art";

export default function Hero() {
  const { photos } = profile;
  return (
    <section
      id="top"
      className="mx-auto max-w-6xl px-5 pb-16 pt-12 md:px-8 md:pt-20"
    >
      <div className="grid items-center gap-14 md:grid-cols-[1.15fr_1fr] md:gap-10 lg:gap-16">
        {/* Left: introduction */}
        <div>
          <div className="hero-in flex items-center gap-3">
            <p className="text-sm text-neutral-500">
              <span className="font-display text-base italic text-secondary">
                {profile.role}
              </span>{" "}
            </p>
          </div>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-4xl lg:text-6xl xl:text-7xl">
            {profile.headline.map((line, i) => (
              <span key={line} className="mask">
                <span
                  className={`line block ${i ? "italic text-primary" : ""}`}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p className="hero-in mt-7 max-w-md text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-base lg:text-lg">
            {profile.intro}
          </p>

          <div className="hero-in mt-9 flex flex-wrap items-center gap-x-4 gap-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition hover:brightness-110 md:px-6"
            >
              Hire me
            </a>
            <a
              href="#work"
              className="rounded-full border border-neutral-400 px-7 py-3.5 text-sm font-semibold transition hover:bg-neutral-100 dark:border-neutral-600 dark:hover:bg-neutral-900 md:px-6"
            >
              Explore projects
            </a>
            <a
              href={extra.cv}
              download
              className="inline-flex items-center gap-2 px-2 py-3.5 text-sm font-semibold underline-offset-4 hover:text-primary hover:underline"
            >
              {icons.download} Download CV
            </a>
          </div>
        </div>

        {/* Right: portrait with offset gold frame and availability plate */}
        <div className="relative mx-auto w-full max-w-sm pb-4 pr-4 md:mx-0 md:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200 dark:bg-neutral-800">
            <img
              className="photo absolute inset-x-0 -top-6 h-[calc(100%+3rem)] w-full object-cover object-top"
              data-speed="-20"
              src={photos.main || portrait("#e5e5e5", "#8a8a8a")}
              alt={`Portrait of ${profile.name}`}
            />
          </div>
          <div className="hero-in absolute -left-3 bottom-10 flex items-center gap-3 border border-neutral-200 bg-white px-4 py-3 shadow-lg dark:border-neutral-800 dark:bg-black sm:-left-5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-sm font-medium">{extra.availability}</span>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <dl className="hero-in mt-16 grid grid-cols-3 divide-x divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
        {profile.stats.map(([n, label]) => (
          <div key={label} className="px-3 py-6 text-center md:py-8">
            <dt className="font-display text-3xl font-semibold text-primary md:text-4xl">
              {n}
            </dt>
            <dd className="mx-auto mt-1 max-w-[10rem] text-xs leading-snug text-neutral-500 md:text-sm">
              {label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
