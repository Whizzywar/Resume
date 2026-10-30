import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { profile, extra, socials } from '../data';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { icons, SocialLinks } from './Icons';

const links = [['Services', '#services'], ['Work', '#work'], ['Experience', '#experience'], ['About', '#about'], ['Contact', '#contact']];
const circle = 'flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900';

export default function Nav({ dark, toggle }) {
  const icon = useRef(null);
  const closeBtn = useRef(null);
  const [open, setOpen] = useState(false);

  const onToggle = () => {
    gsap.fromTo(icon.current, { rotate: -90, scale: 0.4, opacity: 0 }, { rotate: 0, scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2)' });
    toggle();
  };

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    closeBtn.current?.focus();
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-black/80">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="font-display text-xl font-semibold tracking-tight">
            {profile.name.split(' ')[0]} <span className="text-primary">{profile.name.split(' ').slice(1).join(' ')}</span>
          </a>
          <div className="flex items-center gap-5 text-sm md:gap-8">
            {links.map(([label, href]) => (
              <a key={label} href={href} className="hidden underline-offset-4 hover:underline lg:inline">{label}</a>
            ))}
            <button onClick={onToggle} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} aria-pressed={dark} className={circle}>
              <span ref={icon} className="block">{dark ? <FiSun size={18} aria-hidden="true" /> : <FiMoon size={18} aria-hidden="true" />}</span>
            </button>
            <button onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open} aria-controls="sidebar" className={`${circle} lg:hidden`}>
              <FiMenu size={20} aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile sidebar (rendered outside the header so the header's blur doesn't trap it) */}
      <div onClick={() => setOpen(false)} aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-all duration-300 lg:hidden ${open ? 'visible opacity-100' : 'invisible opacity-0'}`} />
      <aside id="sidebar" aria-label="Menu" aria-hidden={!open}
        style={{ paddingTop: 'calc(env(safe-area-inset-top, 0px) + 16px)', paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 24px)' }}
        className={`fixed inset-y-0 right-0 z-[70] flex w-[82%] max-w-xs flex-col border-l border-neutral-200 bg-white px-6 transition-all duration-300 dark:border-neutral-800 dark:bg-black lg:hidden ${open ? 'visible translate-x-0' : 'invisible translate-x-full'}`}>
        <div className="flex items-center justify-between">
          <span className="font-display text-xl font-semibold">Menu</span>
          <button ref={closeBtn} onClick={() => setOpen(false)} aria-label="Close menu" className={circle}><FiX size={20} aria-hidden="true" /></button>
        </div>
        <nav className="mt-10 flex flex-1 flex-col" aria-label="Sidebar">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}
              className="border-b border-neutral-200 py-4 font-display text-3xl transition hover:pl-2 hover:text-primary dark:border-neutral-800">{label}</a>
          ))}
        </nav>
        <a href={extra.cv} download className="flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white">{icons.download} Download CV</a>
        <SocialLinks items={socials} className="mt-6 justify-center" />
      </aside>
    </>
  );
}
