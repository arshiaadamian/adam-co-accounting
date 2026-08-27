Site images
===========

Drop image files in this folder, then reference them from a component/page as
"/images/<filename>" (the "public" folder is served from the site root).

Slots currently used by the site (see <ImagePlaceholder> in each page):

  hero image      client/src/pages/Home.jsx   -> src="/images/hero.jpg"
  team / office   client/src/pages/Home.jsx   -> src="/images/team.jpg"
  office photo    client/src/pages/About.jsx  -> src="/images/office.jpg"

Until a real file is added and wired in, each slot renders a labelled
placeholder box, so the layout stays intact.

Recommended: landscape JP/PNG/WebP, ~1600px wide, optimized (<300 KB).
