# Sanjay Dass — Complete Web Package

This package contains the Digital CV homepage and the editable Portfolio page.

## Files
- `index.html` — Digital CV / homepage
- `portfolio.html` — Portfolio
- `style.css` — CV styling
- `portfolio.css` — Portfolio styling
- `assets/` — existing CV and portfolio visuals
- `work/` — folders for adding portfolio work
- `Sanjay_Dass_CV_Final_2026.pdf` — PDF CV

## Portfolio structure
The Portfolio uses the two supplied portrait visuals only as decorative visual anchors: one geometric frame near the top and one geometric frame near the lower part of the page. They are not used as portfolio work samples.

Work categories are kept separate:
- Digital Art
- Handmade Art
- ID Cards
- Labels
- Menu Cards
- Posters
- Thumbnails
- Visiting Cards
- Other Projects

## Adding work later
Put images in the matching `work/` folder. Then replace a placeholder card in `portfolio.html` with an image element using the matching path, for example:

`<img src="work/posters/01.jpg" alt="Poster design">`

The design and layout do not need to be rebuilt.

## Important final fixes
- The CV homepage layout/design is retained.
- Footer `SANJAY DASS` is explicitly made visible on the dark footer.
- Portfolio portrait visuals are geometric and separated from actual work galleries.
- The Portfolio has no Contact section and no extra "Add Work / Keep the Design" section.
- Section labels are contained safely so they do not overflow outside their sections.


Latest visual update: the portfolio portrait badges/visual-anchor labels have been removed. The index hero now includes subtle geometric background elements while preserving the existing dark editorial color system.
