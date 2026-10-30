import { profile, projects, expertise } from "../data";
import { thumb } from "../art";

export function Marquee() {
  const items = [...profile.skills, ...profile.skills];
  return (
    <div
      className="overflow-hidden border-y border-neutral-200 py-5 dark:border-neutral-800"
      aria-label="Skills"
    >
      <div className="marquee font-display text-2xl italic text-neutral-500">
        {items.map((s, i) => (
          <span
            key={i}
            className={`px-8 ${i % 2 ? "text-secondary" : "text-primary"}`}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          My <em className="text-primary">Projects</em>
        </h2>
        <p className="max-w-xs text-sm text-neutral-500">
          A collection of my diverse projects
        </p>
      </div>
      <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
        {projects.map((p, i) => (
          <a
            key={p.title}
            href={p.url}
            className={`work-card group block ${i % 2 ? "md:mt-16" : ""}`}
          >
            <div className="overflow-hidden bg-neutral-100 dark:bg-neutral-900">
              <img
                src={p.image || thumb(i)}
                alt={`${p.title} project preview`}
                className="aspect-[4/3] w-full object-cover  transition duration-700 "
              />
            </div>
            <div className="mt-5 flex items-baseline justify-between gap-4">
              <h3 className="font-display text-2xl font-semibold underline-offset-4 group-hover:underline">
                {p.title}
              </h3>
              <span className="text-sm font-semibold text-secondary">
                {p.year}
              </span>
            </div>
            <p className="mt-1 text-sm font-semibold text-primary">{p.kind}</p>
            <p className="mt-2 max-w-md text-neutral-600 dark:text-neutral-400">
              {p.text}
            </p>
            <p className="mt-3 text-xs text-neutral-500">{p.stack}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export function About() {
  const { photos } = profile;
  return (
    <section
      id="about"
      className="border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-20 sm:pt-24 md:grid-cols-[0.85fr_1.15fr] md:gap-10 md:px-8 lg:gap-16">
        {/* Photo (left) */}
        <div className="reveal relative mx-auto w-full max-w-xs pb-4 pr-4 sm:max-w-sm md:mx-0 md:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200 dark:bg-neutral-800">
            <img
              src={photos.about || portrait("#d4d4d4", "#737373")}
              alt={`${profile.name} portrait`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
        </div>

        {/* Text (right) */}
        <div>
          <h2 className="reveal font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            About <em className="text-primary">me</em>
          </h2>
          <div className="reveal mt-6 space-y-5 text-base leading-relaxed text-neutral-700 dark:text-neutral-300 lg:text-lg">
            <p>
              My name is <span className="font-bold">UBANI WISDOM</span> (aka
              Wh1zzyware). I am a frontend developer with over 3 years
              experience of creating beautiful user interfaces for businesses,
              companies and startups. With a keen eye for design and strong
              proficiency in frontend development, I strive to bring ideas to
              life through clean and efficient code, which enables me to deliver
              seamless modern user experiences that integrate functionality with
              optimal performance.
            </p>
            <p>
              I am driven and enthusiastic about building scalable web
              applications that are not only visually appealing but also highly
              functional. My goal is to create seamless and engaging digital
              experiences that leave a lasting impression on users. I am
              constantly seeking new challenges and opportunities to expand my
              skill set and stay up to date with the latest industry trends and
              technologies in the ever-evolving software world.
            </p>
            <p>
              Available for freelance projects. The areas of my skill
              proficiency are shown below.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-24 pt-16 md:px-8">
        <h3 className="reveal font-display text-2xl font-semibold sm:text-3xl">
          Tech<em className="text-primary"> Stack</em>
        </h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((g) => (
            <div
              key={g.group}
              className="reveal border-t-2 border-primary bg-neutral-50 p-6 dark:bg-neutral-900"
            >
              <h4 className="font-display text-xl font-semibold text-secondary">
                {g.group}
              </h4>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-neutral-300 px-3 py-1 text-sm transition hover:border-primary hover:text-primary dark:border-neutral-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
