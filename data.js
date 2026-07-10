// PuzzlePath skill database
// Internal stage/skill names are for data integrity only — NEVER shown to users.
// All user-facing text uses `parentLabel` and `why` fields.

const STAGES = [
  {
    id: "exploration",
    order: 1,
    ageRangeMonths: [9, 18],
    citation: "Montessori single-shape puzzle stage (9-12mo+); early sensory-motor exploration",
    skills: [
      {
        id: "visual-tracking",
        icon: "eye",
        parentLabel: "Follows a moving object with their eyes",
        checklistItem: "Watches and follows toys or objects as they move",
        why: "Your child is building the visual tracking that puzzle play depends on. Next: reaching for and grasping objects with purpose.",
        nextSkillId: "reach-grasp",
        puzzleTypes: ["High-contrast hanging mobiles", "Rolling ball toys"]
      },
      {
        id: "reach-grasp",
        icon: "hand",
        parentLabel: "Reaches for and grasps objects",
        checklistItem: "Reaches out and picks up toys on purpose",
        why: "Your child can grasp objects with intention — the next step is placing them, not just holding them.",
        nextSkillId: "cause-effect",
        puzzleTypes: ["Knob puzzles (single large shape)", "Stacking rings"]
      },
      {
        id: "cause-effect",
        icon: "drop",
        parentLabel: "Understands push/pull/drop actions",
        checklistItem: "Drops shapes into a sorter or pushes buttons to see what happens",
        why: "Your child is connecting their actions to results. Next: recognizing one shape well enough to place it correctly, not just drop it in.",
        nextSkillId: "single-knob",
        puzzleTypes: ["Shape sorters", "Simple push-button toys"]
      },
      {
        id: "single-knob",
        icon: "circle-piece",
        parentLabel: "Places one puzzle piece with a knob",
        checklistItem: "Can pick up and place a single knobbed puzzle piece (like one circle)",
        why: "Your child can place a single shape by feel and sight. Next: doing this with a shape they haven't practiced yet.",
        nextSkillId: "object-permanence",
        puzzleTypes: ["Single-shape knob puzzle (circle)"]
      },
      {
        id: "object-permanence",
        icon: "hide",
        parentLabel: "Knows an object still exists even when hidden",
        checklistItem: "Looks for a toy after watching you hide it under a cup or cloth",
        why: "Your child understands objects persist even out of sight — this is what lets them later hold a picture in mind while searching for a matching piece.",
        nextSkillId: "match-identical",
        puzzleTypes: ["Hide-and-seek toys", "Simple peekaboo puzzles"]
      }
    ]
  },
  {
    id: "matching",
    order: 2,
    ageRangeMonths: [18, 24],
    citation: "Montessori multi-shape same-base puzzles (18-24mo); shape/color matching literature",
    skills: [
      {
        id: "match-identical",
        icon: "pair",
        parentLabel: "Matches two identical pictures or objects",
        checklistItem: "Can pair up two of the same picture or object",
        why: "Your child recognizes when two things are exactly the same. Next: matching by a shared feature like color, not just identical copies.",
        nextSkillId: "match-color",
        puzzleTypes: ["Picture-matching cards", "Simple lotto games"]
      },
      {
        id: "match-color",
        icon: "palette",
        parentLabel: "Matches by color",
        checklistItem: "Groups or pairs objects by color",
        why: "Your child sorts by one visual property at a time. Next: doing the same with shape, which takes a bit more precision.",
        nextSkillId: "match-shape",
        puzzleTypes: ["Color-sorting trays", "Color-matching puzzles"]
      },
      {
        id: "match-shape",
        icon: "shapes",
        parentLabel: "Matches by shape",
        checklistItem: "Groups or pairs objects by shape, not just color",
        why: "Your child can isolate shape as a property, separate from color or size. Next: placing several different shapes correctly on one puzzle board.",
        nextSkillId: "multi-knob",
        puzzleTypes: ["Shape-matching puzzles", "Geometric sorting sets"]
      },
      {
        id: "multi-knob",
        icon: "multi-knob",
        parentLabel: "Completes a knob puzzle with 2-4 different shapes",
        checklistItem: "Can place 2-4 different knobbed shapes correctly on one board",
        why: "Your child can hold multiple shapes in mind and place each correctly. Next: pairing related pictures, like a baby animal with its parent.",
        nextSkillId: "picture-pairing",
        puzzleTypes: ["Multi-shape knob puzzle (circle, square, triangle)"]
      },
      {
        id: "picture-pairing",
        icon: "link",
        parentLabel: "Pairs related pictures (not identical)",
        checklistItem: "Matches related pictures, like an animal with its baby, or a tool with its use",
        why: "Your child connects things by relationship, not just appearance — a real thinking step up. Next: assembling pieces into one complete picture.",
        nextSkillId: "jigsaw-2-3",
        puzzleTypes: ["Relationship-matching card sets"]
      }
    ]
  },
  {
    id: "assembly",
    order: 3,
    ageRangeMonths: [24, 36],
    citation: "Montessori 2-3 piece jigsaw stage (2-3yr); early piece-orientation research",
    skills: [
      {
        id: "jigsaw-2-3",
        icon: "puzzle-3",
        parentLabel: "Completes a 2-3 piece jigsaw puzzle",
        checklistItem: "Puts together a puzzle with 2-3 pieces to make one picture",
        why: "Your child can combine a few pieces into a whole picture. Next: doing this with more pieces, using a frame to guide them.",
        nextSkillId: "frame-4-6",
        puzzleTypes: ["2-3 piece jigsaw puzzles"]
      },
      {
        id: "frame-4-6",
        icon: "frame",
        parentLabel: "Completes a 4-6 piece frame puzzle",
        checklistItem: "Completes a puzzle with 4-6 pieces that sit inside a frame or tray",
        why: "Your child manages more pieces with the frame's support. Next: using the picture on the box as a guide, without needing a frame.",
        nextSkillId: "picture-guide",
        puzzleTypes: ["4-6 piece frame/tray puzzles"]
      },
      {
        id: "picture-guide",
        icon: "picture",
        parentLabel: "Uses a reference picture to complete a puzzle",
        checklistItem: "Looks at the picture on the box and uses it to figure out where pieces go",
        why: "Your child uses a picture as a strategy, not just trial and error. Next: recognizing which pieces are edges and corners.",
        nextSkillId: "piece-orientation",
        puzzleTypes: ["Jigsaw puzzles with reference image"]
      },
      {
        id: "piece-orientation",
        icon: "corner",
        parentLabel: "Recognizes edge and corner pieces",
        checklistItem: "Notices which pieces have straight edges and tries those first",
        why: "Your child is starting to notice piece properties, an early strategy skill. Next: completing multi-step tasks in the right order.",
        nextSkillId: "sequential-assembly",
        puzzleTypes: ["8-10 piece jigsaw puzzles"]
      },
      {
        id: "sequential-assembly",
        icon: "steps",
        parentLabel: "Follows a first-next-last sequence",
        checklistItem: "Completes multi-step activities in order, like a 3-step puzzle or building sequence",
        why: "Your child can plan and follow a sequence, not just react. Next: solving puzzles with more pieces and no frame at all.",
        nextSkillId: "jigsaw-8-12",
        puzzleTypes: ["Sequencing puzzle sets"]
      }
    ]
  },
  {
    id: "spatial-thinking",
    order: 4,
    ageRangeMonths: [36, 48],
    citation: "Spatial reasoning recognition-to-visualization research (early years math education literature)",
    skills: [
      {
        id: "jigsaw-8-12",
        icon: "puzzle-grid",
        parentLabel: "Completes an 8-12 piece jigsaw without a frame",
        checklistItem: "Finishes an 8-12 piece puzzle without a tray or frame to hold pieces in place",
        why: "Your child holds the whole picture in mind without physical support. Next: turning a piece in their head before placing it.",
        nextSkillId: "mental-rotation-basic",
        puzzleTypes: ["8-12 piece jigsaw puzzles (no frame)"]
      },
      {
        id: "mental-rotation-basic",
        icon: "rotate",
        parentLabel: "Rotates a piece before placing it",
        checklistItem: "Turns a puzzle piece to face the right way before trying to place it, instead of forcing it in",
        why: "Your child is visualizing rotation before acting — a core spatial skill. Next: understanding how individual pieces relate to the whole picture.",
        nextSkillId: "whole-part",
        puzzleTypes: ["Puzzles with rotation-dependent pieces"]
      },
      {
        id: "whole-part",
        icon: "puzzle-whole",
        parentLabel: "Understands how a piece fits into the whole picture",
        checklistItem: "Can point to where a piece likely goes based on the picture, before testing it",
        why: "Your child connects a part to the whole before trial and error. Next: recognizing a piece by its shape alone, without needing the picture.",
        nextSkillId: "shape-only-recognition",
        puzzleTypes: ["Scene-based jigsaw puzzles"]
      },
      {
        id: "shape-only-recognition",
        icon: "outline",
        parentLabel: "Recognizes pieces by shape, without relying on the picture",
        checklistItem: "Can find the right piece by its outline shape, even in a plain or abstract puzzle",
        why: "Your child reasons about shape independent of picture cues. Next: recognizing basic symmetry in patterns.",
        nextSkillId: "basic-symmetry",
        puzzleTypes: ["Silhouette or shadow-matching puzzles"]
      },
      {
        id: "basic-symmetry",
        icon: "symmetry",
        parentLabel: "Recognizes simple symmetry",
        checklistItem: "Notices when a pattern or picture is symmetrical, or completes a symmetrical design",
        why: "Your child sees structure in patterns, not just individual pieces. Next: managing larger, more complex puzzles strategically.",
        nextSkillId: "jigsaw-20-24",
        puzzleTypes: ["Symmetry pattern blocks", "Mirror puzzles"]
      }
    ]
  },
  {
    id: "strategy",
    order: 5,
    ageRangeMonths: [48, 60],
    citation: "Puzzle-play strategy research (edge-first, grouping); working memory in early childhood",
    skills: [
      {
        id: "jigsaw-20-24",
        icon: "puzzle-large",
        parentLabel: "Completes a 20-24 piece jigsaw puzzle",
        checklistItem: "Finishes a 20-24 piece jigsaw puzzle",
        why: "Your child manages a larger puzzle without losing track. Next: deliberately starting with edge pieces as a strategy.",
        nextSkillId: "edge-first-strategy",
        puzzleTypes: ["20-24 piece jigsaw puzzles"]
      },
      {
        id: "edge-first-strategy",
        icon: "border",
        parentLabel: "Starts with edge and corner pieces on purpose",
        checklistItem: "Deliberately sorts out edge pieces first before starting the middle",
        why: "Your child is using a real strategy, not just working piece by piece. Next: grouping pieces by color or pattern to work faster.",
        nextSkillId: "grouping-strategy",
        puzzleTypes: ["30+ piece jigsaw puzzles"]
      },
      {
        id: "grouping-strategy",
        icon: "group",
        parentLabel: "Groups pieces by color or pattern before placing them",
        checklistItem: "Sorts pieces into groups (like all-blue or all-sky pieces) before starting to place them",
        why: "Your child plans ahead rather than placing pieces one at a time. Next: staying focused through a longer, multi-step puzzle.",
        nextSkillId: "sustained-attention",
        puzzleTypes: ["Complex scene puzzles with distinct color zones"]
      },
      {
        id: "sustained-attention",
        icon: "clock",
        parentLabel: "Stays focused through a long puzzle session",
        checklistItem: "Sticks with a puzzle across multiple sittings without losing interest",
        why: "Your child sustains attention across a multi-step task. Next: catching and fixing their own mistakes without help.",
        nextSkillId: "self-correction",
        puzzleTypes: ["40+ piece jigsaw puzzles"]
      },
      {
        id: "self-correction",
        icon: "check",
        parentLabel: "Notices and fixes their own mistakes",
        checklistItem: "Realizes a piece is in the wrong place and corrects it without being told",
        why: "Your child self-monitors their own work. Next: building with interlocking 3D pieces, not flat puzzles.",
        nextSkillId: "tangram-construction",
        puzzleTypes: ["Puzzles with similar-looking pieces requiring careful checking"]
      }
    ]
  },
  {
    id: "advanced-spatial-reasoning",
    order: 6,
    ageRangeMonths: [60, 72],
    citation: "Mental rotation and 3D construction research; spatial reasoning visualization stage",
    skills: [
      {
        id: "tangram-construction",
        icon: "tangram",
        parentLabel: "Builds shapes using tangram pieces",
        checklistItem: "Arranges tangram pieces to match a shape outline (like an animal or object)",
        why: "Your child combines simple shapes to build a specific target shape. Next: building 3D structures with interlocking pieces.",
        nextSkillId: "3d-construction",
        puzzleTypes: ["Tangram sets"]
      },
      {
        id: "3d-construction",
        icon: "cube",
        parentLabel: "Builds 3D structures with interlocking pieces",
        checklistItem: "Builds structures using magnetic tiles, interlocking blocks, or similar 3D pieces",
        why: "Your child thinks in three dimensions, not just flat layouts. Next: rotating more complex shapes entirely in their head.",
        nextSkillId: "mental-rotation-complex",
        puzzleTypes: ["Magnetic tile sets", "Interlocking 3D block sets"]
      },
      {
        id: "mental-rotation-complex",
        icon: "rotate-3d",
        parentLabel: "Mentally rotates complex shapes before acting",
        checklistItem: "Figures out how a complex piece needs to turn before touching it, even for oddly-shaped pieces",
        why: "Your child visualizes complex rotations without trial and error. Next: planning several steps ahead in a puzzle or build.",
        nextSkillId: "multistep-planning",
        puzzleTypes: ["Complex geometric puzzles", "3D tangram sets"]
      },
      {
        id: "multistep-planning",
        icon: "plan",
        parentLabel: "Plans several steps ahead",
        checklistItem: "Thinks through 2-3 steps ahead before starting a puzzle or build, rather than starting immediately",
        why: "Your child plans before acting — a strategic thinking skill. Next: understanding how something looks from a different angle or view.",
        nextSkillId: "perspective-taking",
        puzzleTypes: ["Multi-stage building sets"]
      },
      {
        id: "perspective-taking",
        icon: "view",
        parentLabel: "Understands top-down vs. side view",
        checklistItem: "Can match a top-down view of a structure to what it looks like from the side",
        why: "Your child reasons about the same object from different viewpoints. Next: creating their own open-ended designs, not just following a target.",
        nextSkillId: "open-pattern-creation",
        puzzleTypes: ["Perspective-matching building challenges"]
      }
    ]
  },
  {
    id: "open-ended-spatial-logic",
    order: 7,
    ageRangeMonths: [72, 96],
    citation: "Open-ended construction play and logic-sequencing research in middle childhood",
    skills: [
      {
        id: "open-pattern-creation",
        icon: "spark",
        parentLabel: "Creates their own open-ended patterns or designs",
        checklistItem: "Invents their own designs with tangrams, blocks, or tiles, without a target picture",
        why: "Your child generates original spatial ideas, not just solutions to a set problem. Next: solving logic and sequence puzzles.",
        nextSkillId: "logic-sequence",
        puzzleTypes: ["Open-ended tangram and pattern sets"]
      },
      {
        id: "logic-sequence",
        icon: "grid-logic",
        parentLabel: "Solves logic and pattern-sequence puzzles",
        checklistItem: "Completes what-comes-next pattern puzzles or simple logic grid puzzles",
        why: "Your child reasons through abstract sequences, not just spatial arrangement. Next: navigating and planning through a maze.",
        nextSkillId: "maze-navigation",
        puzzleTypes: ["Pattern-sequence puzzle books", "Logic grid puzzles"]
      },
      {
        id: "maze-navigation",
        icon: "maze",
        parentLabel: "Plans a path through a maze before starting",
        checklistItem: "Looks ahead to plan a maze route rather than trying paths at random",
        why: "Your child plans a full path mentally before committing. Next: solving abstract puzzles with no real-world picture at all.",
        nextSkillId: "abstract-puzzles",
        puzzleTypes: ["Maze puzzle books", "3D maze cubes"]
      },
      {
        id: "abstract-puzzles",
        icon: "abstract",
        parentLabel: "Solves abstract, non-picture puzzles",
        checklistItem: "Enjoys puzzles with shapes and patterns only, no real-world picture to guide them",
        why: "Your child reasons in pure shape and pattern, the most abstract spatial skill. Next: taking on long, independent multi-day projects.",
        nextSkillId: "independent-projects",
        puzzleTypes: ["Abstract geometric puzzles", "Advanced tangram challenges"]
      },
      {
        id: "independent-projects",
        icon: "trophy",
        parentLabel: "Takes on large, independent puzzle projects",
        checklistItem: "Works independently on large puzzles (100+ pieces) across several days",
        why: "Your child sustains independent, self-directed work over time — the top of this puzzle progression.",
        nextSkillId: null,
        puzzleTypes: ["100+ piece jigsaw puzzles"]
      }
    ]
  }
];

// Flatten for lookup
const ALL_SKILLS = STAGES.flatMap(stage =>
  stage.skills.map(skill => ({ ...skill, stageId: stage.id, stageOrder: stage.order }))
);

function getSkillById(id) {
  return ALL_SKILLS.find(s => s.id === id);
}

function getStageBySkillId(skillId) {
  return STAGES.find(stage => stage.skills.some(s => s.id === skillId));
}
