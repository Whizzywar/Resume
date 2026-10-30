# Developer portfolio

React + Vite + Tailwind CSS + GSAP, with a black and white theme switch.

## Run it
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Make it yours
- **Content:** edit `src/data.js` (name, email, links, stats, skills, projects).
- **Photos:** put images in `public/` and set `photos.main` / `photos.secondary` in `src/data.js` (for example `'/me.jpg'`).
- **Project screenshots:** add `image: '/project.png'` to a project in `src/data.js`.
- **Fonts and colors:** `tailwind.config.js` and the Google Fonts link in `index.html`.
- **Deploy:** upload `dist/` to Netlify, Vercel or Cloudflare Pages.

## New sections
- **Services, work experience and expertise:** edit `services`, `experience` and `expertise` in `src/data.js`. Icons come from `react-icons` (see `src/components/Services.jsx`).
- **CV button:** replace `public/Alex-Morgan-CV.pdf` with your own file (keep the name, or change `extra.cv`).
- **WhatsApp:** set `extra.whatsapp` to your number with country code and no "+" (e.g. `2348012345678`).
- **Social icons:** edit `socials` in `src/data.js`.
- **Contact form:** opens the visitor’s email app addressed to `profile.email`. To receive messages without that, connect it to a service such as Formspree.

## Colors
The primary (blue: a deeper blue for text in light mode, a lighter blue in dark mode) and secondary (gold) colors are set in `src/index.css` as `--primary` and `--secondary` (RGB values). Change them there and every heading accent and link label updates. Buttons and highlighted blocks use `--brand`, a solid blue that keeps white text readable in both modes. Use `text-primary`, `text-secondary`, or `bg-primary` on any element.
