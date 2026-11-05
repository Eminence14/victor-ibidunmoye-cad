/* Generated from the reviewed drafts. Edit text here; nothing in this file states a measured result. */
window.CATEGORIES = [
 {
  "id": "machine",
  "name": "Machine Design",
  "blurb": "Complete machines built around a drive, a frame and a working process, sized so a local workshop can fabricate them."
 },
 {
  "id": "mechanism",
  "name": "Mechanism Design",
  "blurb": "Linkages, gear trains and crank-sliders that turn a simple input into the motion the job needs."
 },
 {
  "id": "product",
  "name": "Product Design",
  "blurb": "Hand-held and household products where ergonomics, safety and manufacturability set the form."
 }
];
window.CAVEAT = "This page describes design intent and the reasoning behind it. No measured performance or test data is published for this project yet. Where a number would have been a guess, it has been left out.";
window.PROJECTS = [
 {
  "slug": "industrial-ginger-peeler",
  "title": "Industrial Ginger Peeler",
  "cat": "Machine Design",
  "featured": true,
  "folder": "Ginger Peeling Machine",
  "status": "Design and CAD complete",
  "role": "Mechanical designer: concept, mechanism, drive sizing, assembly, documentation",
  "tools": [
   "SolidWorks",
   "Technical drawing"
  ],
  "engineering": [
   "Belt drive",
   "Vertical shaft",
   "Pillow-block bearings",
   "Abrasive disc",
   "Welded frame"
  ],
  "summary": "Batch abrasive peeler for small ginger processors: a vertical drum with an abrasive lining and a driven abrasive disc at its base, built from stock section, rolled sheet and off-the-shelf drive parts.",
  "lead": "A batch peeler for small ginger processors, designed so that every part of it can be cut, rolled, welded or bought in a Nigerian workshop. Skin is removed by abrasion against a lined drum and a driven disc rather than by a blade, and the whole machine runs off one standard foot-mount motor.",
  "imgs": [
   {
    "n": 2,
    "alt": "Industrial ginger peeler: three-quarter render of the drum, feed hopper and side-mounted motor on a welded stand"
   },
   {
    "n": 6,
    "alt": "Section view through the peeler drum showing the abrasive lining, vertical shaft, driven disc and the two pillow-block bearings on the frame cross-members"
   },
   {
    "n": 7,
    "alt": "Exploded assembly view: abrasive disc, drum and lining, top plate, welded frame, motor, drive pulley and fasteners"
   },
   {
    "n": 1,
    "alt": "Opposite three-quarter view of the peeler showing the welded stand and the wide floor rails"
   },
   {
    "n": 3,
    "alt": "Peeler viewed from the motor side, showing the discharge hatch in the drum wall"
   },
   {
    "n": 4,
    "alt": "Ghosted view of the peeler with the drum wall made transparent to show the disc and the batch volume"
   },
   {
    "n": 5,
    "alt": "Plan view of the peeler looking down onto the drum lid, feed hopper and motor"
   }
  ],
  "problem": [
   "Ginger reaches most Nigerian processors as a hand-peeled product. Peeling by hand is slow, the yield changes with whoever is doing it, and a knife takes flesh away with the skin. For a small processor the two ways out are both bad: keep hiring hands, or import a peeler priced in foreign currency whose spare parts are not on any local shelf.",
   "The gap is a machine a processor can buy once, run on a single-phase supply, and have repaired by the same welder who built it."
  ],
  "requirements": [
   {
    "t": "Duty",
    "d": "Batch operation: loaded from the top, run for an operator-judged time, discharged at the side. No continuous feed to go wrong."
   },
   {
    "t": "Cut quality",
    "d": "Skin removed by abrasion, not by a cutting edge, so flesh loss stays lower than hand peeling."
   },
   {
    "t": "Wet running",
    "d": "Washdown during and after the batch: drainage at the base, corrosion-resistant material on every wetted surface."
   },
   {
    "t": "Drive",
    "d": "One standard foot-mount electric motor, single supply, no gearbox."
   },
   {
    "t": "Fabrication",
    "d": "Cutting, rolling, welding and drilling only. No casting, no machining centre, no specialist tooling."
   },
   {
    "t": "Service",
    "d": "Bearings, belt, motor and fasteners all replaceable from a local market with hand tools."
   }
  ],
  "concept": [
   "Two arrangements were carried far enough to compare. The first was a horizontal rotating drum, tumbling the batch against an abrasive wall, which is the layout most imported machines use. The second was a vertical chamber with a driven abrasive disc in its floor.",
   "The vertical layout was selected. It takes a smaller floor area, gravity keeps the batch on the disc instead of relying on tumbling, and top feed with a side discharge makes it a one-operator machine. Structurally it is the simpler of the two: a vertical shaft can be carried on two bolted pillow blocks fixed to frame cross-members, where a horizontal drum needs a fabricated trunnion at each end and a way to tip it to empty."
  ],
  "design": [
   "The chamber is rolled sheet, seam welded, with an abrasive lining bonded to the inner wall. A disc, abrasive on its upper face, sits in the floor of the chamber on a vertical shaft. The shaft runs in two pillow-block bearings bolted to cross-members of the stand, and a V-belt from a side-mounted foot-mount motor drives the pulley below the lower bearing.",
   "Ginger is loaded through a hopper in the lid. The disc drives the batch into rotation; the batch is thrown outward against the lined wall, and it is that rubbing against the wall that does most of the work. A hatch in the drum wall at disc level empties the batch into a chute without lifting or tipping anything.",
   "The stand is welded box and angle section with wide floor rails front and back, because the drum is loaded at chest height and the tipping line has to sit outside the operator."
  ],
  "decisions": [
   {
    "q": "Why a vertical chamber rather than a horizontal tumbling drum?",
    "a": [
     "A horizontal drum needs a trunnion and bearing at each end, a way to tip it to discharge, and a bigger footprint for the same batch volume. A vertical chamber puts the whole rotating assembly on one shaft with two bearings, and gravity does the job that tumbling would otherwise have to do.",
     "It also makes the machine a one-person operation: load at the top, discharge through a hatch at the side, nothing to lift."
    ]
   },
   {
    "q": "Why abrasive on the wall as well as the disc?",
    "a": [
     "The disc supplies the motion; the wall supplies most of the abrasion. Ginger is irregular, so a batch spun against a lined wall presents every face to the abrasive in turn, which a fixed cutting edge cannot do without also taking flesh."
    ]
   },
   {
    "q": "Why a belt drive from a side motor rather than a direct-coupled motor under the drum?",
    "a": [
     "Four reasons, and only one of them is speed. The belt gives a reduction using stock pulleys instead of a gearbox. It isolates the motor from the shock of a full drum starting. It slips instead of stalling if the batch jams. And it puts the motor to one side, clear of washdown water and clear of the discharge chute. A motor mounted underneath a wet food machine is a motor that will be replaced."
    ]
   },
   {
    "q": "Why two pillow-block bearings rather than a fabricated housing?",
    "a": [
     "Pillow blocks are bought, bolted and replaced with a spanner. A fabricated housing has to be bored and aligned, which means machining nobody in the target workshop has, and a failure that cannot be fixed on site.",
     "Bolting them through slotted cross-members also allows the shaft to be aligned at build and re-aligned after wear, which welding them would have made permanent."
    ]
   },
   {
    "q": "Why a side discharge hatch instead of tipping the drum?",
    "a": [
     "Tipping needs a trunnion, a locking mechanism and someone strong enough to work it with a wet load in the drum. A hatch at disc level lets the disc itself sweep the batch out, and it is one cut and one hinge."
    ]
   },
   {
    "q": "Why the wide floor rails on the stand?",
    "a": [
     "The centre of mass is high, since a full drum sits well above the frame, and the machine is loaded by someone leaning against it. The rails move the tipping line outboard of anywhere the operator will stand or push."
    ]
   }
  ],
  "manufacturing": [
   "<strong>Drum:</strong> sheet rolled and seam welded, lid and base plates cut flat. No compound curvature anywhere on the machine.",
   "<strong>Stand:</strong> box and angle section, every cut square, every joint a fillet weld a general fabricator can lay.",
   "<strong>Wetted surfaces:</strong> stainless where the product touches; the stand may be painted mild steel because it stays outside the wash zone.",
   "<strong>Bought in:</strong> motor, V-belt and pulleys, pillow-block bearings and fasteners, all standard sizes and all locally available.",
   "<strong>Assembly:</strong> disc bolted rather than welded to the shaft flange, so it can be re-faced or replaced when the abrasive wears."
  ],
  "outcome": [
   "One motor, one belt and one shaft carry the entire drive, so there is no gearbox to source or service.",
   "Every structural part is a straight cut in stock section or a rolled sheet; no part needs a machine tool.",
   "Bearings, belt, pulleys, motor and fasteners are all catalogue parts available locally.",
   "A batch is loaded and discharged without lifting, tipping or reaching into the drum.",
   "Modelled as a mated assembly, so the section, plan and exploded views on this page come out of the same model as the drawings."
  ],
  "learned": [
   "The layout decision was made on serviceability, not on peeling performance, and that turned out to be the right axis: a machine whose bearings can be changed with a spanner in a village workshop will outlive a better peeler that cannot. The next revision needs a drainage detail at the drum base and a guard over the belt run before it goes anywhere near a build."
  ]
 },
 {
  "slug": "two-stroke-engine-with-compressor",
  "title": "Two-Stroke Engine with Compressor",
  "cat": "Machine Design",
  "featured": true,
  "folder": "2 Stroke Engine With Compressor",
  "status": "Design study",
  "role": "CAD engineer: assembly modelling, mechanism layout, section and cutaway views",
  "tools": [
   "SolidWorks",
   "Assembly modelling",
   "Section views"
  ],
  "engineering": [
   "Spur gear pair",
   "Twin crankshafts",
   "Piston and con-rod",
   "Common base",
   "Cutaway views"
  ],
  "summary": "A study in assembly discipline: a two-stroke engine and a reciprocating compressor on one machined base, crankshafts coupled by a spur gear pair, modelled and sectioned to check clearance through full rotation.",
  "lead": "A workshop that needs compressed air usually runs two machines, two frames and two sets of maintenance. This study puts a two-stroke engine and a reciprocating compressor on a single base with their crankshafts coupled by a spur pair, and uses it as an exercise in modelling a real mechanism as a mated assembly rather than a shape.",
  "imgs": [
   {
    "n": 1,
    "alt": "Two-stroke engine with integrated compressor: three-quarter render of the assembly on its base, showing the vertical engine cylinder, horizontal compressor and the spur gear pair between them"
   },
   {
    "n": 4,
    "alt": "Cutaway view with both cylinders made transparent, showing pistons, connecting rods and crank webs and the gear pair coupling the two crankshafts"
   },
   {
    "n": 5,
    "alt": "Section straight down the compressor cylinder showing the piston, connecting rod, crank web and counterweight behind the drive gear"
   },
   {
    "n": 2,
    "alt": "Opposite three-quarter cutaway showing both crankshafts, their bearing housings and the gear mesh"
   },
   {
    "n": 3,
    "alt": "Two-stroke engine with compressor: additional CAD render"
   }
  ],
  "problem": [
   "Small workshops that need compressed air normally buy an engine and a compressor separately and belt them together: two frames to align, two sets of bearings, two maintenance schedules, and a belt run that has to be guarded next to a hot exhaust.",
   "This study asks what the machine looks like if the two are designed as one: a single base, a single drive line, and a fixed ratio between them."
  ],
  "requirements": [
   {
    "t": "Structure",
    "d": "Both crankshafts carried on one base, each in its own bearing housing, with the centre distance fixed at build."
   },
   {
    "t": "Coupling",
    "d": "A positive drive at a known ratio, independent of load, with no tension to set."
   },
   {
    "t": "Access",
    "d": "Both cylinder heads reachable for service without disturbing the other."
   },
   {
    "t": "Model quality",
    "d": "Modelled as a mated assembly with real parts, so clearances can be checked through full rotation and the model can carry a bill of materials."
   }
  ],
  "concept": [
   "A belt between the two shafts is the normal answer and is wrong here, for a reason that only applies in this arrangement: both shafts are already fixed to the same base, so the centre distance is exact and permanent. That is the one condition under which gears beat a belt outright: no tension to set, no stretch, no slip, and a ratio that holds whatever the load does.",
   "The cylinders were set perpendicular, engine vertical and compressor horizontal, so that both heads stay clear of one another and the gear mesh sits in the plane between them."
  ],
  "design": [
   "Engine and compressor crankshafts run in separate bearing housings on a common base, coupled by a spur pair. Each cylinder carries a piston, gudgeon pin and connecting rod onto a crank web with a counterweight.",
   "The model is built as an assembly of individual parts with real mates, not as a single sculpted body. That is what makes the rest of it possible: piston, rod and crank clearance can be swept through a full revolution, the cutaway and section views on this page come straight out of the model, and a parts list falls out of the assembly tree rather than being typed separately.",
   "The section down the compressor bore is the deliverable that carries the most information: piston position, rod angle, crank throw and the counterweight, all in one view, with nothing built."
  ],
  "decisions": [
   {
    "q": "Why a gear pair instead of a belt between the two crankshafts?",
    "a": [
     "Because the centre distance is fixed by the base and never changes. That removes the only real advantage a belt has here, tolerance of a variable centre distance, and leaves its disadvantages: tension to set, stretch over time, slip under load, and a guard around a belt run next to a hot cylinder.",
     "The gear pair holds its ratio regardless of load and removes the belt entirely."
    ]
   },
   {
    "q": "Why perpendicular cylinders rather than parallel?",
    "a": [
     "Two parallel cylinders put both heads in the same working space, and whichever one is behind the other becomes the awkward service job. Setting them at ninety degrees keeps both heads clear and drops the gear mesh naturally into the plane between the two shafts."
    ]
   },
   {
    "q": "Why model it as a mated assembly rather than one solid?",
    "a": [
     "Because everything useful depends on it. Interference and clearance through a full crank rotation can only be checked if the piston, rod and crank are separate bodies with real mates. Sections and cutaways come out of the same model rather than being drawn. And a drawing set can only carry a bill of materials if the assembly tree exists.",
     "A single sculpted body renders the same and answers none of those questions."
    ]
   },
   {
    "q": "Why put the effort into section and cutaway views?",
    "a": [
     "A section is the only view that shows crank throw, rod angle and piston position at once, and it is what a fabricator or a reviewer actually reads. On a machine that has not been built, the section is the deliverable."
    ]
   }
  ],
  "manufacturing": [
   "<strong>Scope note:</strong> this is a design and CAD study. It is presented for the assembly and documentation work rather than as a machine ready to be quoted.",
   "<strong>Base and housings:</strong> would be machined; the bearing bores set the centre distance and the gear mesh, so they are the tolerance-critical features on the machine.",
   "<strong>Rotating parts:</strong> pistons, pins, rods, crank webs and counterweights modelled as separate parts with the fits called out at the assembly, not the render.",
   "<strong>Gears:</strong> a stock spur pair; the ratio and the centre distance are chosen together."
  ],
  "outcome": [
   "Both machines carried on one base and one drive line, with a fixed ratio and no belt.",
   "Built as a mated assembly, so clearance can be swept through a full crank rotation.",
   "Section, cutaway and general-arrangement views all generated from the same model.",
   "The assembly tree supports a bill of materials directly."
  ],
  "learned": [
   "This one is on the site for the CAD, not for the thermodynamics. It is where the assembly habits came from: mate properly, keep parts as parts, and section the model early, because the section is where you find that the con-rod fouls something the render was hiding."
  ]
 },
 {
  "slug": "gravity-powered-grinder",
  "title": "Gravity-Powered Grinder",
  "cat": "Machine Design",
  "featured": true,
  "folder": "Gravity Powered Grinder",
  "status": "Feasibility study",
  "role": "Mechanical designer: drive train layout, ratio staging, frame",
  "tools": [
   "SolidWorks",
   "Rendering"
  ],
  "engineering": [
   "Raised mass input",
   "Flywheel",
   "Multi-stage belt drive",
   "A-frame structure"
  ],
  "summary": "A feasibility study in speed staging: a raised mass on a flywheel drives a small grinding head through a multi-stage belt train, turning a slow, high-torque input into the high-speed, low-torque output a grinder needs.",
  "lead": "A grinding head wants high speed and low torque. A falling weight gives you the opposite. This study is about the drive train that connects the two, and about being honest with the answer it produces.",
  "imgs": [
   {
    "n": 1,
    "alt": "Gravity-powered grinder: three-quarter render showing the pendulum mass on the flywheel, the stepped belt train and the grinding head on its plinth"
   },
   {
    "n": 4,
    "alt": "Detail three-quarter view of the belt train running from the flywheel through the intermediate shaft to the grinding head"
   },
   {
    "n": 6,
    "alt": "Side elevation of the grinder showing the mass and flywheel on the A-frame and the belt to the small pulley on the grinder plinth"
   },
   {
    "n": 2,
    "alt": "Rear three-quarter view of the grinder showing both A-frames and the pendulum mass at rest"
   },
   {
    "n": 3,
    "alt": "Gravity-powered grinder: additional CAD render"
   },
   {
    "n": 5,
    "alt": "Gravity-powered grinder: additional CAD render"
   }
  ],
  "problem": [
   "Grinding grain, pepper or spice off-grid means either doing it by hand or running a petrol engine for a job that lasts a few minutes. Neither is good: one is slow and tiring, the other burns fuel and needs servicing for a duty cycle it is far too large for.",
   "The question this study asks is narrow and mechanical: can a mass, raised by hand and released down a fixed drop, be geared up enough to drive a small grinding head for a useful cycle?"
  ],
  "requirements": [
   {
    "t": "Input",
    "d": "A mass on an arm, raised by hand and released. High torque, low speed, and a torque that varies through the swing."
   },
   {
    "t": "Output",
    "d": "A small grinding head: high speed, low torque. The opposite of the input on both axes."
   },
   {
    "t": "Ratio",
    "d": "The full step-up staged across several belt drives using stock pulley sizes."
   },
   {
    "t": "Speed steadiness",
    "d": "Grinding quality falls off if the head surges and stalls, so the output speed has to be held roughly constant across the cycle."
   },
   {
    "t": "Structure",
    "d": "Stable under a swinging mass without being anchored to the floor."
   }
  ],
  "concept": [
   "The whole design is one trade. A single belt stage carrying the entire ratio would need either an input pulley too large to build or an output pulley too small to work, and a very small pulley loses wrap angle, which is exactly when a belt starts to slip. Staging the ratio across three modest steps keeps every wrap angle and every belt tension sensible, and keeps every pulley a size that can be bought.",
   "The mass is mounted on the flywheel itself, so the flywheel serves twice: as the first driving pulley and as the inertia that smooths the input."
  ],
  "design": [
   "A wedge-shaped mass is fixed to a large flywheel carried on an A-frame. A belt takes the drive from the flywheel to an intermediate shaft in pedestal bearings, and a second belt takes it from there to the small pulley on the grinding head, which sits on its own plinth.",
   "The A-frames carry the swinging mass in compression through two legs, which keeps the reaction inside the machine footprint rather than trying to pull fixings out of the floor."
  ],
  "decisions": [
   {
    "q": "Why stage the ratio instead of doing it in one step?",
    "a": [
     "A single stage at the full ratio needs an impractically large input pulley or an impractically small output one. Small pulleys lose belt wrap, and lost wrap is lost grip: the drive slips at the moment the grinder loads up.",
     "Three modest steps keep every wrap angle and belt tension in a sane range and let every pulley be a stock size."
    ]
   },
   {
    "q": "Why put the mass on the flywheel rather than on a separate arm?",
    "a": [
     "It makes one part do two jobs. The flywheel is already the first driving pulley; carrying the mass on it means the inertia that smooths the torque and the pulley that transmits it are the same rotating assembly, with one bearing pair instead of two."
    ]
   },
   {
    "q": "Why belts throughout rather than gears?",
    "a": [
     "A welded frame does not hold shaft alignment to gear tolerances, and belts tolerate that misalignment. They also need no lubrication or enclosure, run quietly, and, most usefully here, slip rather than shear if the grinder jams on something hard."
    ]
   },
   {
    "q": "Why an A-frame under the mass?",
    "a": [
     "A swinging mass puts a large, moving reaction into whatever carries it. An A-frame takes it as compression down two spread legs and keeps the load path inside the machine, so the design does not depend on being bolted to a floor slab."
    ]
   },
   {
    "q": "What does the study actually conclude?",
    "a": [
     "That the drive train works and the energy budget is the limit. The useful energy in one drop of a hand-raised mass is small, so this is a short-cycle machine, not a production one. The value of the exercise is the staging and the speed-steadiness problem, not a claim that it replaces a mill.",
     "Publishing that conclusion is the point. A concept that only works if nobody checks the energy is not a design."
    ]
   }
  ],
  "manufacturing": [
   "<strong>Frames:</strong> A-frames and the plinth from stock section, welded, with flat feet.",
   "<strong>Bought in:</strong> pulleys, V-belts, pedestal bearings, shafting and the grinding head.",
   "<strong>Mass:</strong> a plate profile, cut and bolted to the flywheel so it can be changed to alter the drop energy.",
   "<strong>Guarding:</strong> as drawn, the belt runs and the swinging mass are open. Neither could be built for use in this state, and both are noted as outstanding."
  ],
  "outcome": [
   "Full step-up staged across belt drives using stock pulley sizes throughout.",
   "Flywheel serves as both the first driving pulley and the inertia that smooths the input torque.",
   "Reaction from the swinging mass is carried in compression inside the machine footprint, so no floor anchors are needed.",
   "The study concludes honestly: the drive train is sound, the available energy per cycle is the constraint."
  ],
  "learned": [
   "The useful part of this project was finding the number that killed the ambitious version of it. A drive train can be designed beautifully around an input that cannot supply enough energy, and it will still be the wrong machine. Checking the budget before detailing the geometry is a habit that came out of this one."
  ]
 },
 {
  "slug": "automatic-gutter-cleaner",
  "title": "Automatic Gutter Cleaner",
  "cat": "Machine Design",
  "featured": false,
  "folder": "Automatic Gutter Cleaner",
  "status": "Concept design and CAD",
  "role": "Mechanical designer: mechanism layout, CAD",
  "tools": [
   "SolidWorks",
   "Rendering"
  ],
  "engineering": [
   "Inclined flight conveyor",
   "Chain and sprocket drive",
   "Mesh separating deck"
  ],
  "summary": "Inclined flight conveyor for gutter debris: scraper bars drag debris up a mesh deck while grit and water fall through, discharging into a collection bin.",
  "lead": "Clearing a gutter by hand means going up to it. This lifts the debris down instead: scraper flights on a chain drag material up an inclined mesh deck, water and grit fall through, and what is left discharges into a bin at the bottom.",
  "imgs": [
   {
    "n": 1,
    "alt": "Automatic gutter cleaner: render of the inclined mesh deck with chain-driven scraper flights, the drive motor at the head and the collection bin at the discharge"
   }
  ],
  "notes": [
   "<strong>Conveying:</strong> scraper flights on twin chains, running over sprockets at head and tail. Flights drag rather than carry, so the deck does the supporting and the chain only has to pull.",
   "<strong>Separation:</strong> the deck is mesh rather than plate, so water and fine grit drop straight through instead of travelling to the bin with the leaves. Less to empty, and nothing wet in the collection.",
   "<strong>Drive:</strong> chain and sprocket rather than belt. The load is intermittent and gritty, which is where a belt would slip and a chain will not.",
   "<strong>Structure:</strong> a welded frame with a single diagonal, so the deck angle is set by the frame geometry rather than by adjustment.",
   "<strong>Open items:</strong> only one render exists for this concept, and the head-end drive and tensioning arrangement are not yet detailed."
  ]
 },
 {
  "slug": "diesel-generator-tank-washer",
  "title": "Diesel Generator Tank Washer",
  "cat": "Machine Design",
  "featured": false,
  "folder": "Gen Washer",
  "status": "Concept design and CAD",
  "role": "Mechanical designer: concept, CAD",
  "tools": [
   "Fusion 360",
   "Rendering"
  ],
  "engineering": [
   "Radial bristle head",
   "Slim insertion shaft",
   "Through-filler access"
  ],
  "summary": "A slim rotating brush that passes through a generator fuel tank filler to scrub sediment from the inside walls, without removing or cutting the tank.",
  "lead": "Sediment and water in the bottom of a generator fuel tank end up in the filters and then in the injectors. Cleaning the tank normally means removing it. This is a slim brush that goes in through the filler instead.",
  "imgs": [
   {
    "n": 1,
    "alt": "Diesel generator tank washer: render of the tool inserted through the tank access on a generator canopy"
   },
   {
    "n": 2,
    "alt": "Detail render of the tank washer head showing the radial bristle array on the slim shaft"
   },
   {
    "n": 3,
    "alt": "Side view of the tank washer showing the tapered handle, shaft and bristle head"
   },
   {
    "n": 4,
    "alt": "Diesel generator tank washer: additional CAD render"
   }
  ],
  "notes": [
   "<strong>Access:</strong> the shaft diameter is set by the filler neck, not by the tool. Everything else was designed around passing through that opening.",
   "<strong>Head:</strong> radial bristles in a helical array, so the head sweeps the full circumference of the tank wall as it turns rather than tracking one band.",
   "<strong>Shaft:</strong> long and slim, tapering into the handle, so it reaches the far wall of the tank while staying stiff enough to be worked from outside.",
   "<strong>Open items:</strong> bristle material has to be chosen for diesel compatibility, and the tool needs a retention feature so nothing can be left inside a tank."
  ]
 },
 {
  "slug": "mechanical-painter",
  "title": "Mechanical Painter",
  "cat": "Machine Design",
  "featured": false,
  "folder": "Mechanical Painter",
  "status": "Concept design and CAD",
  "role": "Mechanical designer: concept, CAD",
  "tools": [
   "SolidWorks",
   "Rendering"
  ],
  "engineering": [
   "Hydraulic jack lift",
   "Column-guided carriage",
   "Rotating roller head"
  ],
  "summary": "Wall-painting rig: a lever-operated hydraulic bottle jack raises a carriage up a square column, carrying a rotating roller across the wall face.",
  "lead": "Painting a high wall means a ladder and a roller on a pole. This raises the roller instead: a lever-operated bottle jack lifts a carriage up a square column, and the carriage carries a rotating roller head against the wall.",
  "imgs": [
   {
    "n": 1,
    "alt": "Mechanical painter: render of the carriage on its square column, showing the hydraulic bottle jack, the operating lever and the rotating roller head"
   }
  ],
  "notes": [
   "<strong>Lift:</strong> a standard hydraulic bottle jack, worked by a long lever. It was chosen because it is a bought part with a known capacity, it holds position with no power, and it lowers under control rather than dropping.",
   "<strong>Guidance:</strong> a square column with the carriage as a collar around it. The square section carries the torque reaction from the rotating roller without needing a separate anti-rotation feature.",
   "<strong>Head:</strong> the roller is carried outboard of the column so the roller face, not the column, sets the distance to the wall.",
   "<strong>Open items:</strong> only one render exists for this concept. The roller drive, the paint feed and the carriage travel limit are all undetailed."
  ]
 },
 {
  "slug": "foot-operated-water-pump",
  "title": "Foot-Operated Water Pump",
  "cat": "Mechanism Design",
  "featured": true,
  "folder": "Foot Operated Water Pump",
  "status": "Design and CAD complete",
  "role": "Mechanical designer: mechanism layout, drive train, frame, component selection",
  "tools": [
   "SolidWorks",
   "Motion study"
  ],
  "engineering": [
   "Chain drive",
   "Bevel gear pair",
   "Crank-slider",
   "Twin pump rods",
   "Pedestal bearings"
  ],
  "summary": "Pedal-driven borehole pump: bicycle drivetrain into a jackshaft, a bevel pair to turn the drive vertical, and cranks reciprocating two pump rods down the casing. No electricity, no fuel.",
  "lead": "A borehole pump worked by the legs instead of the arms. A bicycle drivetrain steps pedal cadence up to pump speed, a bevel pair turns the drive through ninety degrees over the well head, and cranks convert that rotation into the stroke of two pump rods running down the casing.",
  "imgs": [
   {
    "n": 1,
    "alt": "Foot-operated water pump: three-quarter render showing the saddle and pedal crank, chain drive, crank housing and the twin pump rods descending into the borehole"
   },
   {
    "n": 4,
    "alt": "Overhead three-quarter view of the pump showing the chain, jackshaft, bevel gear pair and the two pump rods entering the well casing"
   },
   {
    "n": 5,
    "alt": "Detail view of the drive train: chainring and chain to the jackshaft, then the bevel gear pair turning the drive vertically down to the pump rods"
   },
   {
    "n": 3,
    "alt": "Front elevation of the installation showing the pedal unit on the concrete apron, the pump rods below and the delivery riser to the tap"
   },
   {
    "n": 2,
    "alt": "Rear three-quarter view of the pump showing the delivery pipe, tap and bucket at the point of use"
   }
  ],
  "problem": [
   "A hand pump asks the arms and shoulders to do sustained work, which is the weakest way for a body to supply it. Where there is no grid power and no fuel money for a pump set, lifting a day of water for a household is slow, and the job usually falls to whoever has least say in it.",
   "The legs are the obvious place to move the work to. Anyone who has ridden a bicycle already knows the motion, and every part of a bicycle drivetrain is on sale in every town in the country."
  ],
  "requirements": [
   {
    "t": "Input",
    "d": "A seated operator pedalling continuously: a rotary input, not a stroke-and-rest treadle action."
   },
   {
    "t": "Pump end",
    "d": "Drives an existing borehole piston column. The pump itself is a standard component and is not redesigned."
   },
   {
    "t": "Ratio",
    "d": "A speed increase from comfortable pedalling cadence up to a useful stroke rate at the pump."
   },
   {
    "t": "Geometry",
    "d": "The drive arrives horizontal; the rods must run vertical and central in the casing. A ninety-degree turn is unavoidable."
   },
   {
    "t": "Parts",
    "d": "Bicycle cranks, chainring, chain, sprocket, bottom bracket and saddle. Nothing that has to be imported."
   },
   {
    "t": "Foundation",
    "d": "Bolts to a concrete apron beside the well head; the pedalling reaction goes into the slab, not into welds."
   }
  ],
  "concept": [
   "A treadle pump was the obvious starting point and was rejected. A treadle only delivers on the down stroke, the operator has to lift their own weight back up each cycle, and smoothing that out needs a heavy flywheel that has to be raised as well.",
   "A rotary bicycle drive fixes all three. The input is continuous, the crank carries the piston through its return instead of the operator, and the flywheel effect is already in the rotating mass of the drivetrain."
  ],
  "design": [
   "The operator sits on a saddle mounted to a welded stanchion, over a bottom bracket and chainring taken from a bicycle. A chain runs to a smaller sprocket on a jackshaft carried in pedestal bearings. That is the first stage, and the speed increase.",
   "The jackshaft carries the drive across to the well head, where a bevel gear pair turns it through ninety degrees. A crank on each output converts the rotation into the reciprocating stroke of two pump rods, which run down inside the casing to the piston assembly. Delivery is taken off at the head into a riser and a tap.",
   "The whole assembly is bolted down to a concrete apron. The pedalling reaction is large and cyclic, and it belongs in the slab."
  ],
  "decisions": [
   {
    "q": "Why a chain for the first stage rather than a belt?",
    "a": [
     "A piston pump loads the drive in shocks, and a belt would slip at exactly the moment the stroke starts. A chain will not.",
     "The tooth ratio is also exact, so a pedalling cadence maps to a known stroke rate rather than an approximate one. And chainring, chain and sprocket are the cheapest precision components available anywhere in the country."
    ]
   },
   {
    "q": "Why step the speed up rather than down?",
    "a": [
     "Legs supply plenty of torque at a low cadence; what they do not supply is strokes per minute. The pump wants more cycles than a person naturally pedals, so the ratio is arranged to trade the surplus torque for the rate the pump end needs."
    ]
   },
   {
    "q": "Why bevel gears for the ninety-degree turn?",
    "a": [
     "The drive arrives horizontal and the pump column is vertical directly over the borehole. A bevel pair turns that corner at a single meshing point above the head, keeps the rods vertical and centred in the casing, and puts no side load on the rod guide.",
     "A chain or belt taken around the corner would have pulled the rods off the casing axis, and a rod that runs off-axis wears the seal on one side."
    ]
   },
   {
    "q": "Why two pump rods rather than one?",
    "a": [
     "Two rods either side of the centreline balance the load on the crosshead, which keeps the piston square in the barrel so the seal wears evenly all the way round. Phasing the two cranks also evens out the torque the operator feels across a revolution, instead of one heavy push per turn."
    ]
   },
   {
    "q": "Why bicycle components throughout the first stage?",
    "a": [
     "Serviceability decides this one. A broken chain is a market purchase and a twenty-minute repair; a broken proprietary drive is a dead pump. The parts are also already designed for exactly this duty cycle and this power level."
    ]
   },
   {
    "q": "Why bolt the frame down rather than make it self-supporting?",
    "a": [
     "The reaction from pedalling is cyclic, and cyclic load into welded joints is how welded joints crack. Anchoring to the apron puts it into concrete in compression, which does not mind."
    ]
   }
  ],
  "manufacturing": [
   "<strong>Frame:</strong> square and rectangular hollow section, cut and welded; flame-cut base plates with clearance holes for masonry anchors.",
   "<strong>Bought in:</strong> bicycle crankset, chainring, chain, sprocket, saddle; commercial bevel gear pair; pedestal bearings; standard fasteners.",
   "<strong>Reused:</strong> the borehole pump end and casing are existing hardware, so the machine bolts on above an installation that already works.",
   "<strong>Site work:</strong> two anchor plates and a levelled apron are the whole civil scope."
  ],
  "outcome": [
   "Runs with no electricity and no fuel.",
   "The entire first stage is a bicycle drivetrain, serviceable anywhere in the country with hand tools.",
   "The existing borehole pump end and casing are reused unchanged.",
   "Setting the machine is two anchor plates on a levelled apron.",
   "Work is moved from the arms to the legs, which is where a body can sustain it."
  ],
  "learned": [
   "The interesting part of this design is not the pedals, it is the corner. Every arrangement that avoided bevel gears put a side load somewhere it did not belong, and chasing that around the layout is what set the final geometry. The open drive line needs a guard before this is built, and the chain needs a tensioner if it is going to sit outdoors."
  ]
 },
 {
  "slug": "solar-panel-wiper",
  "title": "Solar Panel Wiper",
  "cat": "Mechanism Design",
  "featured": true,
  "folder": "Solar Panel Wiper",
  "status": "Design and CAD complete",
  "role": "Mechanical designer: mechanism layout, mounting, water routing",
  "tools": [
   "SolidWorks",
   "Rendering"
  ],
  "engineering": [
   "Twin radial arms",
   "Single hub bearing",
   "Gravity water feed",
   "Frame-clamp mounting"
  ],
  "summary": "Panel-mounted cleaning arms for rooftop PV: two wiper arms from a single hub sweep the whole glass, fed by gravity from the water tank already on the roof. No pump, no power at the array.",
  "lead": "Harmattan dust settles on rooftop PV in days, and the reason panels stay dirty is that cleaning them means a ladder, a bucket and a roof. This mounts to the panel frame and sweeps the glass with two arms off one hub, using water fed by gravity from the tank already up there.",
  "imgs": [
   {
    "n": 1,
    "alt": "Solar panel wiper installed on a rooftop array, with the water tank on its plinth and the feed line running to the panel"
   },
   {
    "n": 2,
    "alt": "Plan view of the panel showing the two wiper arms radiating from a single hub at the top centre and the area each sweeps"
   },
   {
    "n": 4,
    "alt": "Elevation of the roof showing the tank above the array and the gravity feed line down to the wiper hub"
   },
   {
    "n": 3,
    "alt": "Wider three-quarter view of the roof installation showing the wiper on one panel of the array"
   },
   {
    "n": 5,
    "alt": "Alternative three-quarter view of the rooftop installation"
   }
  ],
  "problem": [
   "In the dry season, dust settles on rooftop PV within days and takes output down with it. Cleaning is done by hand, up a ladder and across a roof with a bucket, which is precisely why it is done rarely and why arrays run dirty for most of the season.",
   "The design has to remove the ladder from the loop without adding anything that itself needs power, plumbing or maintenance at roof level."
  ],
  "requirements": [
   {
    "t": "Coverage",
    "d": "The swept area has to cover the full active glass of a standard framed panel, corner to corner."
   },
   {
    "t": "Power",
    "d": "No mains supply at the array. Nothing that assumes an inverter or a controller is nearby."
   },
   {
    "t": "Water",
    "d": "Fed from the rooftop tank the building already has. No pump."
   },
   {
    "t": "Mounting",
    "d": "Attach to the panel frame only. Nothing may be drilled through the glass or the laminate."
   },
   {
    "t": "Environment",
    "d": "Permanently outdoors: UV, rain, dust. Every part either corrosion resistant or replaceable."
   }
  ],
  "concept": [
   "A linear wiper on a rail across the panel was the first idea and the wrong one. It needs a straight guide running the full width, a carriage on that guide, and a seal to keep dust out of it. Dust is the entire reason the machine exists. A guide that fills with grit is a machine that jams in the first season.",
   "A radial arrangement needs one bearing. Two arms were chosen over one long arm so that the swept sectors overlap across the rectangle without either arm cantilevering off the frame at mid-sweep."
  ],
  "design": [
   "A hub bracket clamps to the aluminium frame at the top centre of the panel and carries the pivot. Two arms radiate from it, long enough that their swept sectors together cover the full active area of the panel, with the overlap in the middle where the two meet.",
   "Water is taken from the existing roof tank down a small-bore line to a nozzle at the hub, so it is delivered to the middle of the sweep and carried outward by the blades. The tank is above the array, so the head is free and there is no pump anywhere in the system.",
   "Blade rubber, arm spring and pivot are automotive wiper components, used for the duty they were designed for."
  ],
  "decisions": [
   {
    "q": "Why radial arms rather than a wiper running on a rail across the panel?",
    "a": [
     "A rail wiper needs a guide the full width of the panel, a carriage running on it and a seal keeping dust out of it. The machine exists because of dust. Putting a sliding fit into the dust path guarantees the failure it was built to prevent.",
     "Two radial arms need one bearing, and that bearing can be sealed and sits above the glass rather than in the debris."
    ]
   },
   {
    "q": "Why two arms rather than one long one?",
    "a": [
     "A single arm long enough to sweep the whole panel would overhang the frame on both sides at mid-sweep and load the hub as a long cantilever, with the tip pressure falling off along its length. Two shorter arms keep the tip loads balanced across the hub and keep the blade pressure more even over the glass."
    ]
   },
   {
    "q": "Why gravity feed rather than a pump?",
    "a": [
     "The tank is already above the array, so the head is free. A pump would need a supply at roof level, a controller, and a dry-run failure mode to design around: three problems in exchange for pressure the system does not need."
    ]
   },
   {
    "q": "Why clamp to the frame instead of fixing to the panel?",
    "a": [
     "Nothing may be drilled through a laminate. It voids the panel warranty and opens a moisture path straight into the cells. The extruded aluminium frame is the only part of a panel designed to be clamped, so it is the only place the bracket may go."
    ]
   },
   {
    "q": "Why automotive wiper components?",
    "a": [
     "Blade rubber, arm springs and pivots made for windscreens are UV-rated, made for exactly this pressure and this wiping duty, produced in enormous volume, and replaceable at any roadside parts stall in the country. Designing a bespoke blade would be worse and cost more."
    ]
   }
  ],
  "manufacturing": [
   "<strong>Hub bracket:</strong> folded or machined from sheet, clamping to the panel frame extrusion with standard fasteners.",
   "<strong>Arms and blades:</strong> automotive wiper assemblies, bought in and adapted at the pivot only.",
   "<strong>Water line:</strong> small-bore flexible pipe from the existing tank outlet, with a nozzle at the hub.",
   "<strong>Fixings:</strong> stainless throughout. This assembly lives outdoors permanently, and dissimilar metals against an aluminium frame are a corrosion cell."
  ],
  "outcome": [
   "No electrical supply is needed at the array.",
   "No pump anywhere in the system; the water head is already on the roof.",
   "Nothing penetrates the glass or the laminate, because the bracket clamps to the frame.",
   "Wear parts are automotive wiper blades, replaceable anywhere.",
   "Cleaning no longer requires anybody to be on the roof."
  ],
  "learned": [
   "Rejecting the rail wiper was the decision that made this work, and it came from asking what the environment does to a sliding fit rather than from asking what sweeps a rectangle most efficiently. What the design still needs is the drive and the control: as drawn, the arms and the water routing are resolved, but how the sweep is actuated and triggered is the open half of the problem."
  ]
 },
 {
  "slug": "super-pounder",
  "title": "Super Pounder",
  "cat": "Mechanism Design",
  "featured": false,
  "folder": "Super Pounder",
  "status": "Concept design and CAD",
  "role": "Mechanical designer: mechanism layout, CAD",
  "tools": [
   "SolidWorks",
   "Rendering"
  ],
  "engineering": [
   "Belt reduction",
   "Crank-rocker linkage",
   "Pestle and mortar"
  ],
  "summary": "Motorised yam pounder: a belt reduction drives a crank, and a rocker arm converts that rotation into the vertical pestle stroke.",
  "lead": "Pounding yam by hand is heavy, repetitive work. This drives the same pestle and mortar action from a small motor: a belt reduction to a crank disc, then a rocker arm that turns rotation into the vertical stroke.",
  "imgs": [
   {
    "n": 3,
    "alt": "Super pounder: three-quarter render showing the motor, belt drive to the crank disc, connecting rod, rocker arm and the pestle above the mortar"
   },
   {
    "n": 1,
    "alt": "Super pounder: additional CAD render"
   },
   {
    "n": 2,
    "alt": "Super pounder: additional CAD render"
   }
  ],
  "notes": [
   "<strong>Drive:</strong> a belt from the motor to a large crank pulley provides the reduction. A belt was chosen over a chain deliberately: a pestle that catches in a stiff load should stall the belt, not the motor or the linkage.",
   "<strong>Mechanism:</strong> a connecting rod from the crank pin to a rocker pivoted on the frame posts. The rocker sets the stroke and keeps the pestle travelling vertically into the mortar rather than on the arc the crank would give directly.",
   "<strong>Structure:</strong> two posts on a base plate carry the rocker pivot; the crank and motor sit between them so the load path from pestle to base is short.",
   "<strong>Open items:</strong> the stroke and crank throw are set geometrically but have not been checked against a real pounding load, and the mechanism is unguarded as drawn."
  ]
 },
 {
  "slug": "zenith-knife",
  "title": "Zenith Knife",
  "cat": "Product Design",
  "featured": true,
  "folder": "Zenith Knife",
  "status": "Design and CAD complete",
  "role": "Product designer: concept, internal packaging, mechanism, handle design",
  "tools": [
   "Fusion 360",
   "SolidWorks",
   "Rendering"
  ],
  "engineering": [
   "Crank-slider",
   "Cordless drive",
   "Internal packaging",
   "Single-fastener blade"
  ],
  "summary": "Cordless powered carving knife with the motor, cell pack and crank drive packaged inside a timber handle, driving one reciprocating blade that lifts out for washing.",
  "lead": "A powered carving knife that still reads as a knife. Motor, cells, switch and drive all sit inside the handle, so the tool balances at the grip rather than behind it, and a single blade reciprocates off a crank pin instead of the usual pair.",
  "imgs": [
   {
    "n": 4,
    "alt": "Zenith knife: three-quarter render of the assembled knife showing the timber handle and single blade"
   },
   {
    "n": 2,
    "alt": "Section through the Zenith knife handle showing the motor, cell pack, switch and the crank disc that drives the blade tang"
   },
   {
    "n": 1,
    "alt": "Rear elevation of the Zenith knife showing the handle end, switch position and blade retention"
   },
   {
    "n": 5,
    "alt": "Presentation render of the Zenith knife on a dark ground"
   }
  ],
  "problem": [
   "Slicing bread, roast meat or anything frozen with a plain kitchen knife is a sawing action repeated until it is done. Powered carving knives exist, but the usual layout puts a bulky motor pod behind the hand, runs two reciprocating blades, and needs a mains cord: awkward to hold, awkward to wash, and useless where the supply is intermittent.",
   "The brief was a cordless tool with the drive packaged inside the handle, and a blade that comes out to be washed."
  ],
  "requirements": [
   {
    "t": "Power",
    "d": "Battery, not mains. The tool has to work when the supply does not."
   },
   {
    "t": "Balance",
    "d": "Centre of mass at or in front of the grip, never behind it."
   },
   {
    "t": "Packaging",
    "d": "Motor, drive, cells and switch inside the handle envelope. No rear pod."
   },
   {
    "t": "Blade",
    "d": "One blade, removable for washing, retained positively when fitted."
   },
   {
    "t": "Hygiene",
    "d": "Wet cleaning limited to the blade and the outside of the handle. The drive stays dry."
   },
   {
    "t": "Making",
    "d": "Handle machinable in a joinery shop; blade cut from sheet. No injection tooling."
   }
  ],
  "concept": [
   "The two candidate drives were a cam with a return spring and a crank pin running in a slot in the blade tang. The crank was chosen: it is two moving parts, the stroke is a clean sinusoid, and it needs no spring to bring the blade back, because the pin does it. A cam profile would also have had to be hardened, which is a process the rest of the tool avoids.",
   "The second decision was to leave the blade single. Two counter-reciprocating blades cancel vibration, which is the reason they are common, but they double the drive, the parts count and the number of surfaces that have to be cleaned."
  ],
  "design": [
   "The handle is a timber shell in two halves, hollowed to take a small DC motor, a cell pack and a switch on the upper face where a thumb naturally sits. The motor drives a crank disc; a pin on that disc runs in a slot machined in the blade tang, converting rotation into reciprocation.",
   "The blade seats into a slot at the front of the handle and is retained by a single fastener, which also sets the clamp on the seal at that joint. Pulling the blade leaves nothing wet-side except the slot itself.",
   "Placing the cells in the handle rather than behind it is what makes the tool balance: the heaviest single component sits directly under the hand."
  ],
  "decisions": [
   {
    "q": "Why a crank-slider rather than a cam and follower?",
    "a": [
     "A crank pin in a slotted tang is two parts and gives a symmetrical stroke with no return spring. A cam needs a spring to keep the follower on the profile, and a hardened profile to survive it: two more failure modes and a heat-treat operation the rest of the design does not need."
    ]
   },
   {
    "q": "Why one blade instead of two?",
    "a": [
     "Two blades cancel each other vibration, which is genuinely the better mechanical answer. But it doubles the drive, doubles the parts to wash, and puts a second sliding interface in the food zone. Keeping the stroke short does enough for the vibration on a tool this size, and one blade keeps the object legible as a knife."
    ]
   },
   {
    "q": "Why the battery in the handle rather than a rear pod?",
    "a": [
     "Balance. Cells are the heaviest single item in the tool, and where they sit decides where the knife balances. In the handle, the tool pivots about the hand. Behind it, the user fights the mass on every stroke, which is the main complaint about the products this replaces."
    ]
   },
   {
    "q": "Why a timber handle rather than moulded plastic?",
    "a": [
     "Timber is warm, grips well when wet, and can be shaped in any joinery shop with tools that are already there. Injection moulding only pays back at a volume this design is not aimed at, and a moulded shell cannot be repaired."
    ]
   },
   {
    "q": "Why a single fastener at the blade?",
    "a": [
     "One fastener gives a defined clamp load at the one joint that has to seal, and it makes blade removal a deliberate act rather than something that can happen in the drawer. More fasteners would only add ways to lose one."
    ]
   }
  ],
  "manufacturing": [
   "<strong>Handle:</strong> two shell halves, routed or machined from timber and closed over the drive. Pockets are all straight-sided.",
   "<strong>Blade:</strong> laser or waterjet cut from stainless sheet, then ground and edged. The tang slot is cut in the same operation as the profile.",
   "<strong>Bought in:</strong> DC motor, cells, switch, fasteners.",
   "<strong>Assembly:</strong> drive fitted to one half, closed, one fastener at the blade. No press fits, no adhesives in the food zone."
  ],
  "outcome": [
   "Runs cordless; no mains supply required.",
   "Motor, cells, switch and drive all fit inside the handle envelope.",
   "The heaviest component sits under the hand, so the tool balances at the grip.",
   "Blade removes with one fastener; nothing else enters the wash.",
   "No tooling investment: the handle is a joinery job and the blade is a flat cut part."
  ],
  "learned": [
   "Packaging drove this design far more than the mechanism did. Once the cells were placed for balance, the motor and crank had only one place left to go, and the handle section came out of that rather than out of the grip sketch. If it were rebuilt, the switch would move to a position the hand cannot reach while the blade is being changed."
  ]
 },
 {
  "slug": "dual-sieve-juice-extractor",
  "title": "Dual-Sieve Juice Extractor",
  "cat": "Product Design",
  "featured": false,
  "folder": "Juice Extractor",
  "status": "Concept design and CAD",
  "role": "Product designer: redesign, CAD, prototyping",
  "tools": [
   "Fusion 360",
   "Rendering"
  ],
  "engineering": [
   "Two-stage sieve",
   "Gravity outflow",
   "Blender-base compatibility"
  ],
  "summary": "A blender jar redesigned around a two-layer sieve and a side outflow, so juice runs out to a cup while pulp stays behind.",
  "lead": "A blender makes juice and pulp in the same jar, and separating them afterwards is the messy part. This redesigns the jar around a two-layer sieve and a side outflow, so the separation happens while it runs.",
  "imgs": [
   {
    "n": 1,
    "alt": "Dual-sieve juice extractor: render of the redesigned jar on its base, showing the sieve inside and the outflow spout running to a cup"
   },
   {
    "n": 2,
    "alt": "Dual-sieve juice extractor: additional CAD render"
   },
   {
    "n": 3,
    "alt": "Dual-sieve juice extractor: additional CAD render"
   },
   {
    "n": 4,
    "alt": "Dual-sieve juice extractor: additional CAD render"
   },
   {
    "n": 5,
    "alt": "Dual-sieve juice extractor: additional CAD render"
   }
  ],
  "notes": [
   "<strong>Separation:</strong> two sieve layers at different apertures, a coarse layer to hold the bulk of the pulp and a finer one behind it, so the fine screen is not doing all the work and blinding immediately.",
   "<strong>Outflow:</strong> the spout is taken off below the sieve and above the base, so juice leaves by gravity while the machine runs instead of being poured off afterwards.",
   "<strong>Compatibility:</strong> the jar keeps the existing motor base interface, so the redesign is a jar, not a new appliance.",
   "<strong>Open items:</strong> sieve aperture sizes and the outflow rate are geometry-driven at this stage and have not been tested against real fruit."
  ]
 },
 {
  "slug": "adjustable-ceiling-cleaner",
  "title": "Adjustable Ceiling Cleaner",
  "cat": "Product Design",
  "featured": false,
  "folder": "Adjustable Ceiling Cleaner",
  "status": "Concept design and CAD",
  "role": "Product designer: concept, CAD, prototyping",
  "tools": [
   "Fusion 360",
   "Rendering"
  ],
  "engineering": [
   "Telescoping pole",
   "Locking collar",
   "Compliant brush head"
  ],
  "summary": "Long-reach cleaning tool: a telescoping pole with a locking collar and a rotating brush head with a compliant rim, for ceilings and high corners.",
  "lead": "A cleaning tool built around reach. A telescoping pole with a locking collar sets the length, and the head carries a rotating brush with a compliant rim so it follows a ceiling that is not flat.",
  "imgs": [
   {
    "n": 1,
    "alt": "Adjustable ceiling cleaner: render of the tool showing the round brush head, compliant rim, telescoping pole, locking collar and moulded grip"
   },
   {
    "n": 2,
    "alt": "Adjustable ceiling cleaner: additional CAD render"
   },
   {
    "n": 3,
    "alt": "Adjustable ceiling cleaner: additional CAD render"
   },
   {
    "n": 4,
    "alt": "Adjustable ceiling cleaner: additional CAD render"
   },
   {
    "n": 5,
    "alt": "Adjustable ceiling cleaner: additional CAD render"
   }
  ],
  "notes": [
   "<strong>Reach:</strong> a two-stage telescoping pole with a cam-style locking collar, so length is set one-handed while the tool is already overhead.",
   "<strong>Head:</strong> a circular brush with a compliant rim around it. The rim takes up the difference when a ceiling is uneven, so bristle pressure stays roughly even instead of loading one edge.",
   "<strong>Grip:</strong> a moulded lower grip sized for a two-handed hold, because at full extension the tool is worked with both hands and the lower one carries the moment.",
   "<strong>Open items:</strong> the collar locking force and the pole section have not been checked against the bending load at full extension."
  ]
 }
];
