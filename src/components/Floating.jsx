import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { extra } from "../data";
import { icons } from "./Icons";

export default function Floating() {
  const [show, setShow] = useState(false);
  const up = useRef(null);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!up.current) return;
    gsap.to(up.current, {
      autoAlpha: show ? 1 : 0,
      y: show ? 0 : 16,
      duration: 0.35,
      ease: "power2.out",
    });
  }, [show]);

  const toTop = () =>
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });

  return (
    <div
      className="fixed right-4 z-40 flex flex-col items-center gap-3 sm:right-6"
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 20px)" }}
    >
      <button
        ref={up}
        onClick={toTop}
        aria-label="Back to top"
        style={{ opacity: 0, visibility: "hidden" }}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-900 bg-white text-black shadow-lg transition hover:bg-black hover:text-white dark:border-neutral-100 dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
      >
        {icons.arrowUp}
      </button>
    </div>
  );
}
