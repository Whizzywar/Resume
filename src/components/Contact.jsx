import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { profile, extra, socials } from "../data";
import { icons } from "./Icons";

function Card({ icon: Icon, label, className = "", children }) {
  return (
    <li
      className={`flex min-w-0 flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-5 text-center transition hover:border-blue-400/50 hover:bg-white/10 sm:p-6 ${className}`}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">
        <Icon size={22} aria-hidden="true" />
      </span>
      <p className="mt-4 text-xs text-neutral-400">{label}</p>
      <div className="mt-1 max-w-full break-words text-base text-white">
        {children}
      </div>
    </li>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="bg-neutral-950 text-neutral-400">
      <div className="reveal border-t-2 border-primary bg-neutral-50 " />

      <div className="mx-auto max-w-6xl px-5 pt-16 sm:pt-20 md:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Reach <em className="text-blue-400">Out</em>
          </h2>
          <p className="mt-5 text-base leading-relaxed sm:text-lg">
            Have a project in mind? Get in touch with me.
          </p>
        </div>
        <ul className="reveal mx-auto mt-10 grid max-w-4xl gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          <Card icon={FiMail} label="Email">
            <a
              href={`mailto:${profile.email}`}
              className="underline-offset-4 hover:underline"
            >
              {profile.email}
            </a>
          </Card>
          <Card icon={FiPhone} label="Phone">
            <a
              href={`https://wa.me/${extra.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:underline"
            >
              {extra.phone}
            </a>
          </Card>
          <Card
            icon={FiMapPin}
            label="Based in"
            className="sm:col-span-2 lg:col-span-1"
          >
            {profile.location}
          </Card>
        </ul>
        <div className="reveal mt-10 flex justify-center">
          <a
            href={`https://wa.me/${extra.whatsapp}?text=${encodeURIComponent(extra.whatsappText)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:brightness-110 sm:w-auto sm:max-w-none"
          >
            <FaWhatsapp size={20} aria-hidden="true" /> Chat on WhatsApp
          </a>
        </div>

        {/* Bottom bar: copyright left, socials right (socials on top on phones) */}
        <div className="mt-14 flex flex-col-reverse items-center gap-5 border-t border-white/10 pb-35 pt-6 text-center text-xs sm:mt-16 sm:flex-row sm:justify-between sm:pb-6 sm:pr-20 sm:text-left">
          <p className="leading-relaxed">
            <span className="block">
              Developed by {profile.name} © {new Date().getFullYear()} | All
              rights reserved.
            </span>
          </p>

          <ul className="flex flex-wrap justify-center gap-2.5">
            {socials.map(([label, href, key]) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-neutral-300 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                >
                  {icons[key]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
