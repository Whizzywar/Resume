import { experience } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-5xl px-5 py-24 md:px-8">
        <div className="reveal text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Work <em className="text-primary">experience</em></h2>
          <p className="mx-auto mt-4 max-w-md text-neutral-500">A short record of where I’ve worked and what I’ve delivered.</p>
          <div className="mx-auto mt-6 flex max-w-[12rem] items-center gap-3 text-secondary" aria-hidden="true">
            <span className="h-px flex-1 bg-current" /><span className="text-xs">◆</span><span className="h-px flex-1 bg-current" />
          </div>
        </div>

        <ol className="relative mt-16 space-y-12">
          <span aria-hidden="true" className="absolute bottom-0 left-4 top-0 w-px bg-secondary/40 md:left-1/2" />
          {experience.map((e, i) => {
            const left = i % 2 === 0;
            return (
              <li key={e.role + e.period} className={`reveal relative pl-12 md:w-1/2 md:pl-0 ${left ? 'md:pr-14 md:text-right' : 'md:ml-auto md:pl-14'}`}>
                <span aria-hidden="true" className={`absolute left-4 top-8 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-2 border-secondary bg-white dark:bg-black ${left ? 'md:left-auto md:right-0 md:translate-x-1/2' : 'md:left-0'}`}>
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>
                <article className="border-4 border-double border-neutral-300 bg-white p-6 transition hover:border-secondary dark:border-neutral-700 dark:bg-black dark:hover:border-secondary">
                  <p className="font-display text-sm italic text-secondary">{e.period}</p>
                  <h3 className="mt-1 font-display text-2xl font-semibold">{e.role}</h3>
                  <p className="mt-1 text-sm font-semibold text-primary">{e.org} <span className="font-normal text-neutral-500">· {e.where}</span></p>
                  <ul className="mt-4 space-y-2 text-neutral-600 dark:text-neutral-400">
                    {e.points.map((p) => (
                      <li key={p} className={`flex gap-3 text-left ${left ? 'md:flex-row-reverse md:text-right' : ''}`}>
                        <span aria-hidden="true" className="mt-1.5 text-[8px] text-secondary">◆</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
