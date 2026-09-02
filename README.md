# Victor Ibidunmoye — portfolio

A single self-contained page. All CSS lives in one `<style>` block in `<head>`, all
JavaScript in one `<script>` block before `</body>`. No build step, no npm, no
framework, no bundler, no external JS/CSS libraries. The only external request is
the Google Fonts stylesheet (Inter 400/500/600 + JetBrains Mono 400/500).

Visual direction: dark navy, monospace for every label and meta line, a
chromatic glitch on card titles at hover, and a faint blueprint grid. Work is a
bento of cards with visible cover renders; clicking one opens a full project
detail overlay — title, category, description, role/focus and every render at
1600px.

### Typographic scale

Sized against the 48–64px hero convention and a 50–75 character measure. An
earlier draft ran the hero at 84px with the name, role and location all at the
same size, which wrapped to six lines and flattened the hierarchy.

| Level | Size | Weight | Colour |
|-------|------|--------|--------|
| Name (h1) | `clamp(36px, 5vw, 64px)` | 600 | `--text` |
| Role | `clamp(20px, 1.9vw, 26px)` | 500 | `--text-2` |
| Lede | 18px, `max-width:54ch`, `text-wrap:balance` | 400 | `--text-2` |
| Card title | `clamp(17px, 1.5vw, 21px)` | 600 | `--text` |
| Body | 15–17px | 400 | `--text-2` |
| Mono label | 12–13px | 500 | `--text-3` |

Name-to-role ratio is 2.46 at desktop. The lede is capped at 54ch so its 92
characters break into two even ~46-character lines rather than a ragged 58/34.

## Folder layout

```
.
├── index.html            ← the entire site
├── netlify.toml          ← publish config, no build command
├── README.md
├── All Renders/          ← YOUR original library. Never modified, never deployed-critical.
│   └── <Project Name>/<n>.png          3300×2550 / 3800×3800 PNGs, 2–5 MB each
└── assets/img/portfolio/ ← generated web copies (this is what the site loads)
    └── <Project Name>/<n>-800.jpg
        <Project Name>/<n>-1600.jpg
```

`All Renders/` is untouched — nothing reads from it at runtime.

### Why the derivatives exist

The source renders total **241 MB**; the images the page needs on first paint alone
came to **34.5 MB**. Pointing the site at them directly would have made it
unusable on anything but a fast desktop connection.

So every image the site uses was re-encoded to two JPEGs — `-800.jpg` for the
card covers, `-1600.jpg` for the detail view and the hero. Same folder names,
same numbering.

**132.7 MB of source PNG → 7.6 MB of JPEG (102 files), no visible quality loss at
display size.**

To regenerate after adding renders, re-run the resize step (Windows, no
dependencies — uses .NET's System.Drawing):

```powershell
Add-Type -AssemblyName System.Drawing
$src = "All Renders\Your Project"; $dst = "assets\img\portfolio\Your Project"
New-Item -ItemType Directory -Force $dst | Out-Null
$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | ? { $_.MimeType -eq 'image/jpeg' }
$p = New-Object System.Drawing.Imaging.EncoderParameters(1)
$p.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [int64]82)
Get-ChildItem "$src\*.png" | % {
  $img = [System.Drawing.Image]::FromFile($_.FullName)
  foreach ($t in 800, 1600) {
    $w = [Math]::Min($t, $img.Width); $h = [int]($img.Height * $w / $img.Width)
    $b = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
    $g = [System.Drawing.Graphics]::FromImage($b)
    $g.InterpolationMode = 'HighQualityBicubic'; $g.SmoothingMode = 'HighQuality'
    $g.DrawImage($img, 0, 0, $w, $h); $g.Dispose()
    $b.Save("$dst\$($_.BaseName)-$t.jpg", $codec, $p); $b.Dispose()
  }
  $img.Dispose()
}
```

## Deploy

Pushing to `main` deploys. Netlify watches
[Eminence14/victor-ibidunmoye-cad](https://github.com/Eminence14/victor-ibidunmoye-cad)
and publishes every commit to <https://cad.victoribidunmoye.me>.

```bash
git add -A
git commit -m "your message"
git push
```

`netlify.toml` sets `publish = "."` with no build command, so Netlify serves the
repo root exactly as committed — no build step, nothing to configure.

**Do not drag-and-drop to Netlify any more.** A manual drop creates a deploy that
Git knows nothing about, so the next push silently reverts it. The repo is the
source of truth.

`All Renders/` is gitignored — the site never reads it, and keeping it out saves
roughly 240 MB per deploy.

| Where | What |
|-------|------|
| Live site | <https://cad.victoribidunmoye.me> |
| Netlify fallback | <https://victor-ibidunmoye-cad.netlify.app> |
| Repo | `Eminence14/victor-ibidunmoye-cad` |
| Production branch | `main` |
| DNS | Namecheap — `cad` CNAME → `victor-ibidunmoye-cad.netlify.app.` |

To preview locally:

```bash
python -m http.server 8000
```

## Adding or reordering a project

The grid and every detail view are driven by the `projects` array inside the
inline `<script>`. Add or move an entry and the card, the detail overlay and the
"Selected work" count all follow.

```js
{ title: "Project Name", cat: "Machines",
  folder: "Your Project",          // folder name under assets/img/portfolio/
  imgs: [2, 6, 1, 3],              // basenames, cover FIRST, then gallery order
  desc: "One line on what it was built for.",
  role: "Role: … Focus: …" }
```

- `folder` may contain spaces — encoded at render time by
  `encodeURIComponent(p.folder)`. Do **not** pre-encode it in the array.
- `imgs[0]` is the card cover; every basename listed appears in the detail view.
- Each basename needs both a `-800.jpg` (cover) and a `-1600.jpg` (detail).

### Bento spans and the row-sum rule

Spans live in the `SPANS` map at the top of the script, keyed by array index:

```js
var SPANS = { 0: 'sp-c8 sp-r2', 9: 'sp-c12' };
```

Index 0 is the feature (8 wide × 2 tall), index 9 the full-width closer (12).
Everything unlisted defaults to 4 wide × 1 tall.

Keep every desktop row summing to **12** and every tablet row to **6**, or a
tile is left orphaned. The current ten tile:

| Row | Desktop | Tablet |
|-----|---------|--------|
| 1–2 | 8 + 4, twice | feature spans 6 for two rows |
| 3 | 4 + 4 + 4 | 3 + 3 |
| 4 | 4 + 4 + 4 | 3 + 3 |
| 5 | 12 | 6 |

If you add an eleventh project, either drop the `sp-c12` closer back to 4 and add
two more, or give the new one `sp-c8` — check the maths before shipping.

## Projects not yet on the site

Four folders have renders but no description anywhere — not in the original brief
and not on victoribidunmoye.me — so they were left out rather than have copy
invented for them. Add one line each and paste these in:

```js
{ title: "Automatic Pet Feeder",    cat: "Products", folder: "Automatic Pet Feeder",
  imgs: [1,2,3,4,5,6], desc: "", role: "" },
{ title: "Plastic Thread Shredder", cat: "Machines", folder: "Plastic Thread Shredder",
  imgs: [1,2,3,4,5],   desc: "", role: "" },
{ title: "Solar Panel Cleaner",     cat: "Others",   folder: "Solar Panel Cleaner",
  imgs: [1,2,3,4,5],   desc: "", role: "" },
{ title: "Piezoelectric Floor",     cat: "Others",   folder: "Piezoelectric Floor",
  imgs: [1,2],         desc: "", role: "" },
```

Their derivatives are **not** generated yet — run the resize snippet above for each
folder first. Categories in the stub are placeholders; correct them.

**Drafting & Annotation** was dropped: it had a description but no renders.

Two other folders are in use but have no card of their own — `Automatic Gutter
Cleaner` supplies the hero image and `Mechanical Painter` the About image.

## TODOs

| Where | What |
|-------|------|
| `<head>` | `<!-- TODO: replace with a 1200×630 share image -->` — `og:image` points at a 1600px render, not a 1200×630 card. |
| Résumé | `<!-- TODO: Insert City -->` / `<!-- TODO: Insert Year -->` on the Palfe Associates entry; visible text reads `[Insert City]` / `[Insert Year]`. |

Grep for `TODO` to find all three.

## Notes on choices

- **About copy leads with purpose, not credentials.** Two earlier drafts failed
  differently: the first was a 60-word block ending on the unbacked "at a cost
  that makes sense"; the second was accurate but bloodless, because avoiding the
  word "passionate" had stripped out the motivation with it. The current copy
  opens on what the machines *do for people* — a pounder that replaces hours of
  work by arm, a pump that lifts water with no power, a grinder that runs on
  gravity — then earns it with the fabrication and machine-repair background.
  Every one of those three claims is lifted from Victor's own project
  descriptions; every name is backed by the Résumé section. No metrics are
  quoted because none were supplied.
- **`text-wrap: balance` on the About lead and hero lede.** Without it the lead
  ended on a 5-character orphan ("from." alone on its own line).
- **Prev/next inside the project view.** The detail overlay pages between
  projects without closing — buttons carry the neighbouring project's cover and
  title, arrow keys work, and it wraps at both ends. Closing returns focus to
  the card for the project you were *actually viewing*, not the one you first
  clicked.
- **Work is a bento of cards, not a text index.** Every card shows its cover
  render; clicking opens a full detail overlay with the description, role/focus
  and every render at 1600px. The overlay empties its image list on close so
  offscreen renders stop downloading.
- **The glitch uses `text-shadow`, not duplicated text.** The usual trick copies the
  title into `::before`/`::after` via `attr(data-text)`, which some screen readers
  announce two extra times. An animated chromatic `text-shadow` looks the same and
  says nothing.
- **No footer and no divider rules** anywhere; section rhythm does the separating.
- **No stacked stroke + fill** — where a surface has a fill, no border competes.
- **`--text-dim` is used once**, on the hero's third line: it computes to 3.28:1,
  which passes only as large text. Every other grey clears 4.5:1 on all four
  surfaces (measured: `--text-3` is 5.37–6.10:1).
- **Reduced motion** is the last block in the stylesheet so it overrides without
  `!important`; the JS also checks `matchMedia` before running the cursor preview,
  the reveal stagger and the dot pulse.
- **Scroll-spy has a bottom-of-page fallback** so Contact still activates on a short
  viewport where the last section never reaches the detection band.
