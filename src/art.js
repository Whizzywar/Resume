// Generated placeholder images. Safe to delete once you use real photos.
const uri = (svg) =>
  "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);

export const portrait = (a, b, shift = 0) =>
  uri(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 520"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="400" height="520" fill="url(#g)"/><circle cx="${200 + shift}" cy="200" r="78" fill="#111" opacity=".85"/><path d="M${40 + shift} 520c0-120 70-180 160-180s160 60 160 180z" fill="#111" opacity=".85"/></svg>`,
  );

const shapes = [
  '<circle cx="200" cy="150" r="90" fill="#fff"/><circle cx="200" cy="150" r="50" fill="#000"/>',
  '<rect x="70" y="50" width="120" height="200" fill="#fff"/><rect x="210" y="90" width="120" height="160" fill="#555"/>',
  '<path d="M0 220 Q100 80 200 170 T400 110 V300 H0z" fill="#fff"/>',
  '<g fill="#fff"><rect x="60" y="60" width="80" height="80"/><rect x="160" y="60" width="80" height="80" opacity=".5"/><rect x="260" y="60" width="80" height="80"/><rect x="110" y="160" width="80" height="80" opacity=".5"/><rect x="210" y="160" width="80" height="80"/></g>',
  '<path d="M60 240L200 50l140 190z" fill="#fff"/><path d="M130 240L200 130l70 110z" fill="#000"/>',
  '<g stroke="#fff" stroke-width="10" fill="none"><circle cx="140" cy="150" r="70"/><circle cx="260" cy="150" r="70"/></g>',
];
const bgs = ["#1c1c1c", "#2b2b2b", "#111", "#3a3a3a", "#222", "#161616"];

export const thumb = (i) =>
  uri(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="${bgs[i % 6]}"/>${shapes[i % 6]}</svg>`,
  );
