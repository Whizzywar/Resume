import {
  FiLayout,
  FiCode,
  FiShoppingCart,
  FiHeadphones,
  FiCheck,
  FiArrowUpRight,
} from "react-icons/fi";
import { services } from "../data";

const iconFor = {
  design: FiLayout,
  app: FiCode,
  shop: FiShoppingCart,
  support: FiHeadphones,
};

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <div className="reveal mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          My <em className="text-primary">services</em>
        </h2>
        <p className="mt-4 text-neutral-500">
          From the first sketch to launch day and beyond, I offer services that
          focus on delivering exceptional digital experiences.
        </p>
        <div
          className="mx-auto mt-6 flex max-w-[12rem] items-center gap-3 text-secondary"
          aria-hidden="true"
        >
          <span className="h-px flex-1 bg-current" />
          <span className="text-xs">◆</span>
          <span className="h-px flex-1 bg-current" />
        </div>
      </div>

      <div className="mt-14  grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => {
          const Icon = iconFor[s.icon];
          return (
            <article
              key={s.title}
              className="reveal group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-xl hover:shadow-blue-500/10 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:shadow-blue-500/20"
            >
              <Icon
                size={112}
                aria-hidden="true"
                className="pointer-events-none absolute -right-5 -top-5 text-primary opacity-[0.06] transition duration-500 group-hover:rotate-6 group-hover:opacity-[0.12]"
              />
              <span className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition duration-300 group-hover:bg-brand group-hover:text-white">
                <Icon size={26} aria-hidden="true" />
              </span>
              <h3 className="relative mt-6 font-display text-2xl font-semibold leading-tight">
                {s.title}
              </h3>
              <p className="relative mt-3 text-neutral-600 dark:text-neutral-400">
                {s.text}
              </p>
              <ul className="relative mt-6 space-y-2 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <FiCheck
                      className="shrink-0 text-secondary"
                      aria-hidden="true"
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
