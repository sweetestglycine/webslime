Webslime · Cloudflare Pages deployment package
=============================================================

DEPLOY
  Cloudflare Dashboard -> Workers & Pages -> Create -> Pages -> Upload assets
  Drag the CONTENTS of this folder (index.html, assets/, config.js, ...).
  Camera requires HTTPS (Cloudflare Pages is HTTPS by default).

CUSTOMIZE
  Edit config.js:
    - text   : all UI strings — translate to other languages here
  Save -> refresh page. 

WHAT'S NEW
  - Single Hand Mode toggle (planes form within one hand)
  - Neon Glow slider (wireframe outer glow 0-100%)
  - Per-plane wireframe hue (select P1-P4, "ALL" applies to every plane)

NOTE
  MediaPipe hand-tracking model (~8 MB) loads at runtime from Google CDN
  (storage.googleapis.com / cdn.jsdelivr.net). Visitors need access to it.
