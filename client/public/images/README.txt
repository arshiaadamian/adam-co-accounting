Site images
===========

Drop image files in this folder, then reference them from a component/page as
"/images/<filename>" (the "public" folder is served from the site root).

Slots currently wired up (see <ImagePlaceholder> in each page):

  hero image      client/src/pages/Home.jsx   -> src="/images/hero.png"
  team / office   client/src/pages/Home.jsx   -> src="/images/team.png"
  office photo    client/src/pages/About.jsx  -> src="/images/office.png"

To swap an image, replace the file here (keep the name) or update the src in
the page. Files currently present: hero.png, team.png, office.png, favicon.svg.

Recommended: JPG/PNG/WebP, ~1600px wide, optimized (<300 KB).
