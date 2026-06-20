# Home page redesign — curated teaser

## Context

The home page currently holds a multi-paragraph personal intro plus a project grid, and
its project data is hardcoded — duplicated again in `pages/Projects.jsx`. `pages/Blog.jsx`
is a "Coming Soon..." stub. The owner wants the home page to become a tight landing
surface: one short statement, a curated "Work" section, and a "Writing" section — each
pointing to the fuller `/projects` and `/blog` pages. Writing is published on external
platforms (Substack/Medium/X); the site only lists and links out to it (no on-site post
rendering, no markdown pipeline).

This also folds in a clear pre-existing problem: the same project list is defined twice.
The redesign centralizes both projects and posts into single-source-of-truth data modules.

## Goals

- Home = curated teaser: statement + featured projects + latest posts, each with a path to
  the full page.
- Full `/projects` lists all projects; full `/blog` lists all writing entries (links out).
- One source of truth for projects and for posts; no duplicated arrays.
- Keep the existing visual system (semantic tokens, `font-heading`/`font-body`,
  `max-w-3xl` column, `gap-8` rhythm). No new dependencies.

## Non-goals

- No markdown/MDX pipeline, no `/blog/:slug` post pages, no on-site post bodies.
- No copywriting of the statement here — the page exposes a one-line slot with placeholder
  text the owner fills in.

## Data layer

**`src/data/projects.js`** — default-export an array of:
```
{ id, title, description, repoUrl, liveUrl, featured }
```
- `description`: one short line shown under the title on the card (new field).
- `featured`: boolean; manually curated set shown on the home "Work" section.
- No image field — cards are text-only (see `ProjectCard` below).
- Seed with the two real projects currently in `pages/Home.jsx`
  (Inventory Management API, BLOOM Bookstore), both `featured: true`, with a written
  one-line `description` each.

**`src/data/posts.js`** — default-export an array of:
```
{ id, title, date, summary, url }
```
- `url`: external link the entry points to (opens in a new tab).
- `date`: ISO string; lists render newest-first (sort in the consuming component or
  pre-sorted in the module).
- Seed as an empty array; the owner adds entries. Surfaces must handle empty (see Edge cases).

## Components

- **`SectionHeader`** (new) — `props: { title, to, linkLabel = "View all" }`. Renders the
  section title in `font-heading` with a right-aligned "View all →" `<Link>` to `to`.
  Used by both Work and Writing on the home page so they stay consistent.
- **`PostList`** (new) — `props: { posts }`. Maps to `PostRow`.
- **`PostRow`** (new) — `props: { post }`. A row (not a card): title on the left, `date` on
  the right, the whole row an `<a href={post.url} target="_blank" rel="noopener noreferrer">`
  using the shared `.link` class. Renders `summary` as muted text under the title (optional,
  if present).
- **`ProjectCard`** (modified) — **text-only card, no image.** Remove the `<img>`. Card shell
  (`border border-border bg-surface ... rounded-lg`) wraps the whole thing as the link;
  inside, the title in `font-heading` and a brief description line beneath it:
  `<p className="text-sm text-muted">{project.description}</p>`. Drop the `mt-4` that spaced
  the title under the old image. Keeps the `liveUrl || repoUrl` link fallback.

## Pages

- **`pages/Home.jsx`**
  1. Statement: single `<p className="text-3xl sm:text-4xl leading-tight mb-8">` with
     placeholder copy and `text-accent` on the key phrase.
  2. `Work` section: `<SectionHeader title="Work" to="/projects" />` then a
     `grid grid-cols-1 sm:grid-cols-2 gap-4` of
     `projects.filter(p => p.featured)` → `ProjectCard`.
  3. `Writing` section: `<SectionHeader title="Writing" to="/blog" />` then
     `<PostList posts={latest 3 by date} />`.
  - Remove the old intro paragraphs and the local `projects` array.
- **`pages/Projects.jsx`** — import all of `projects.js`; render the full 2-col grid of
  `ProjectCard`. Remove the placeholder array.
- **`pages/Blog.jsx`** — import all of `posts.js`; render `<PostList>`. If `posts` is empty,
  show an empty state: a short line like "Writing soon — find me on …" with the social links,
  so the page never reads as broken.

## Data flow

`src/data/*.js` (single source) → imported by `Home` (curated slice via `featured` /
latest-3) and by `Projects`/`Blog` (full list) → rendered through shared
`ProjectCard` / `PostList`. Adding an item = edit one data file; every surface updates.

## Edge cases

- **Empty posts:** `/blog` always renders, showing an empty state ("Writing soon — find me
  on …" + social links) instead of a blank gap. The home **Writing section is omitted
  entirely when there are zero posts** — a teaser shouldn't tease nothing. It appears (header
  + latest 3) only once at least one post exists.
- **Missing `liveUrl`/`repoUrl`:** `ProjectCard` already falls back
  (`liveUrl || repoUrl`); unchanged.
- **Long descriptions:** keep `description` to one line by convention; no clamping logic.

## Verification

1. `npm run dev` — home shows statement + Work (2 featured text cards with description);
   Writing section appears only if posts exist (else omitted). `/projects` shows all
   projects; `/blog` shows all posts, or the empty state when none.
2. "View all →" links navigate to `/projects` and `/blog`.
3. Post rows open the external `url` in a new tab.
4. Add a project to `src/data/projects.js` → it appears on `/projects` (and on home if
   `featured`) with no other edits.
5. `npm run lint` and `npm run build` pass.