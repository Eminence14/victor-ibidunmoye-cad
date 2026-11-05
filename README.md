# Victor Ibidunmoye: portfolio

The source for [cad.victoribidunmoye.me](https://cad.victoribidunmoye.me). Twelve
machines and products in three categories (machine design, mechanism design and
product design), each with a case study.

### Building Hardware Prototypes and Helping Startups Design Ideas for Manufacturing

Most of what I design takes work off someone's hands: a pounder that replaces hours
of pounding by arm, a pump that lifts water where there's no power to run one, a
grinder that turns on gravity alone. Machines that hold up where the grid doesn't,
and that a local workshop can actually build.

If you have an idea that needs to become a real object, I take it through concept
CAD, assemblies, tolerances and GD&T in SolidWorks, and 3D-printed prototypes, to a
drawing set a manufacturer can quote from. A drawing that can't be made solves nothing.

Working in SolidWorks, Fusion 360 and AutoCAD: 3D modeling, technical drawing,
machine design, rapid prototyping and CAM.

Based in Ibadan, Nigeria. Open to freelance and full-time work:
[email](mailto:victoribidunmoye@gmail.com) ·
[LinkedIn](https://www.linkedin.com/in/victoribidunmoye/) ·
[Upwork](https://www.upwork.com/freelancers/~0169da2df3b650dd76)

## How the site is organised

A static site with no build step. Netlify publishes the repository root.

| Path | What it holds |
|---|---|
| `index.html` | The page: hero, about, work, capabilities, resume, contact, and the case-study viewer |
| `assets/js/projects.js` | Every category and project, including all case-study text |
| `assets/img/portfolio/<project>/` | Renders, each in 800px and 1600px sizes |

To add or edit a project, change `assets/js/projects.js` and add its renders under
`assets/img/portfolio/`. The page reads that file, so `index.html` stays as it is.

Case studies describe design intent. No project states a measured result unless
real test or simulation data exists for it.
