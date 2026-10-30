import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import { FiArrowUp, FiDownload } from 'react-icons/fi';

export const icons = {
  github: <FaGithub size={18} aria-hidden="true" />,
  linkedin: <FaLinkedinIn size={18} aria-hidden="true" />,
  x: <FaXTwitter size={18} aria-hidden="true" />,
  instagram: <FaInstagram size={18} aria-hidden="true" />,
  whatsapp: <FaWhatsapp size={22} aria-hidden="true" />,
  arrowUp: <FiArrowUp size={20} aria-hidden="true" />,
  download: <FiDownload size={18} aria-hidden="true" />,
};

export function SocialLinks({ items, className = '' }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {items.map(([label, href, key]) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 transition hover:border-brand hover:bg-brand hover:text-white dark:border-neutral-700">
            {icons[key]}
          </a>
        </li>
      ))}
    </ul>
  );
}
