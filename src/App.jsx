import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "./hooks";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { Marquee, Work, About } from "./components/Sections";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Floating from "./components/Floating";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [dark, toggle] = useTheme();
  const root = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .from(".line", { yPercent: 110, duration: 1.2, stagger: 0.14 })
          .from(
            ".hero-in",
            { y: 24, opacity: 0, duration: 0.8, stagger: 0.1 },
            "-=0.7",
          )
          .from(
            ".photo",
            {
              clipPath: "inset(0 0 100% 0)",
              scale: 1.15,
              duration: 1.3,
              stagger: 0.2,
            },
            0.2,
          );

        gsap.utils.toArray(".photo").forEach((el) =>
          gsap.to(el, {
            y: Number(el.dataset.speed),
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }),
        );
        gsap.utils.toArray(".reveal").forEach((el) =>
          gsap.from(el, {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%" },
          }),
        );
        gsap.utils.toArray(".work-card").forEach((el) =>
          gsap.from(el, {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          }),
        );
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <div ref={root}>
      <Nav dark={dark} toggle={toggle} />
      <main className="overflow-x-clip">
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <Experience />
        <About />
        <Contact />
      </main>

      <Floating />
    </div>
  );
}
