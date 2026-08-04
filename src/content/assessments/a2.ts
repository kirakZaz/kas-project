import type { HeroSection, BriefSection, BriefMeta } from '../../types/content.types'
import type { Mechanic } from '../../components/organisms/Overview/Overview'
import type { Sprint } from '../../components/organisms/Process/Process'
import type { ConceptTab } from '../../components/organisms/Concept/Concept'
import type { Video } from '../../components/organisms/Gallery/Gallery'
import type { TeamMember } from '../../components/organisms/Team/Team'
import type { SpotlightMember } from '../../components/organisms/MemberSpotlights/MemberSpotlights'

// Assessment 2 — Prototype 2. Reuses the SAME A1 showcase components
// (Overview, Process timeline, Concept tabs, Team) with Assessment 2 content.
// Captions/text are factual — review and adjust wording as needed.

export const META_A2: BriefMeta = {
    code: 'RGP204',
    label: 'Assessment 2',
    title: 'Prototype 2',
    format: 'Individual / Group',
    weight: '35%',
    due: 'Week 8',
    marks: '100 marks',
}

export const A2_HERO: HeroSection = {
    kind: 'hero',
    eyebrow: 'Assessment 2',
    title: 'Prototype 2',
    subtitle:
        'Building on KAS with two new systems — a crafting & inventory system and a ' +
        'rune-based interaction & puzzle system.',
    meta: META_A2,
    status: 'complete',
}

export const A2_BRIEF: BriefSection = {
    kind: 'brief',
    id: 'brief',
    meta: META_A2,
    deliverables: [
        'A team-built prototype incorporating at least two features from the weekly briefs.',
        'Submitted as a standalone build (project files provided on request).',
        'An individual interactive oral debrief reflecting on process and contribution.',
    ],
    learningOutcomes: [
        'Collaborate to efficiently produce and manage a game project.',
        'Utilise iterative prototyping techniques then discover and implement optimal game pipelines.',
        'Critically reflect on project management methods and outcomes with a view to informing future game development projects.',
    ],
    note: 'Assessed on Teamwork & Collaboration (30%), Prototype Execution (40%) and Self-reflection (30%).',
}

// --- Overview (mechanics cards) ---
export const A2_OVERVIEW = {
    title: 'What We Built',
    subtitle: 'Two new systems extending the KAS prototype',
    description:
        'For Prototype 2 the team extended KAS with a crafting & inventory system and a ' +
        'rune-based interaction & puzzle system — turning gathered resources into a way to ' +
        'solve the level.',
    items: [
        {
            title: 'Crafting & Inventory',
            description:
                'Component-driven crafting built on ScriptableObject recipes. Elements, materials ' +
                'and items are gathered and combined at the Ancient Forge, with a live inventory HUD.',
            color: '#c4a44a',
        },
        {
            title: 'Rune Interaction & Puzzles',
            description:
                'Crafted runes activate objects in the world — generators, doors and gated paths — ' +
                'with an interaction framework and puzzle logic validating crafted sequences.',
            color: '#00e5ff',
        },
    ] satisfies Mechanic[],
}

// --- Process (development timeline) ---
export const A2_PROCESS = {
    title: 'Development Process',
    subtitle: 'Crafting & Inventory · Rune Interaction · Iterative Prototyping',
    sprints: [
        {
            name: 'Crafting & Inventory',
            subtitle: 'Components, recipes & HUD',
            dates: '5 – 20 Jul',
            jira: '/assets/a2/jira/jira-1.png',
            images: [
                '/assets/a2/build/build-05.png',
                '/assets/a2/build/build-03.png',
                '/assets/a2/build/build-07.png',
            ],
            description:
                'Built the crafting system around ScriptableObject recipes and the Ancient Forge, ' +
                'the component spawner, and a live inventory HUD for Elements, Materials and Items.',
        },
        {
            name: 'Rune Interaction & Puzzles',
            subtitle: 'Runes, generators & gated paths',
            dates: '21 Jul – 5 Aug',
            jira: '/assets/a2/jira/jira-2.png',
            images: [
                '/assets/a2/build/gameplay-puzzle.png',
                '/assets/a2/build/build-11.png',
                '/assets/a2/build/puzzle-wiring.png',
            ],
            description:
                'Used crafted runes to drive interactions — activating generators, doors and gated ' +
                'paths — with an interaction framework and puzzle sequence validation.',
        },
    ] satisfies Sprint[],
}

// --- Concept & documentation (tabbed galleries) ---
export const A2_CONCEPT = {
    title: 'Design & Documentation',
    subtitle: 'Design documents, in-engine implementation and project tracking',
    tabs: [
        {
            label: 'Crafting & Inventory',
            items: [
                { title: 'Crafting & inventory design — part 1', image: '/assets/a2/design/crafting-1.png' },
                { title: 'Crafting & inventory design — part 2', image: '/assets/a2/design/crafting-2.png' },
                { title: 'Crafting & inventory design — part 3', image: '/assets/a2/design/crafting-3.png' },
                { title: 'Crafting & inventory design — part 4', image: '/assets/a2/design/crafting-4-inventory-1.png' },
                { title: 'Inventory design — part 2', image: '/assets/a2/design/inventory-2.png' },
            ],
        },
        {
            label: 'Interaction & Runes',
            items: [
                { title: 'Interaction & rune design — part 1', image: '/assets/a2/interactions/interaction-1.png' },
                { title: 'Interaction & rune design — part 2', image: '/assets/a2/interactions/interaction-2.png' },
                { title: 'Interaction & rune design — part 3', image: '/assets/a2/interactions/interaction-3.png' },
                { title: 'Interaction & rune design — part 4', image: '/assets/a2/interactions/interaction-4.png' },
                { title: 'Interaction & rune design — part 5', image: '/assets/a2/interactions/interaction-5.png' },
            ],
        },
        {
            label: 'Level & Environment',
            items: [
                { title: 'Level entrance — "Welcome to KAS" sign', image: '/assets/a2/environment/env-01.png' },
                { title: 'Water Mountains vista', image: '/assets/a2/environment/env-02.png' },
                { title: 'Oasis pool & stone ring', image: '/assets/a2/environment/env-03.png' },
                { title: 'Level layout — terrain & water', image: '/assets/a2/environment/env-04.png' },
                { title: 'Wooden platforms & bridges', image: '/assets/a2/environment/env-05.png' },
                { title: 'Forest path', image: '/assets/a2/environment/env-06.png' },
                { title: 'Narrative signpost & gate', image: '/assets/a2/environment/env-07.png' },
                { title: 'Rune clearing', image: '/assets/a2/environment/env-08.png' },
                { title: 'Fire hazard placement', image: '/assets/a2/environment/env-09.png' },
                { title: 'Chapel on the hill', image: '/assets/a2/environment/env-10.png' },
                { title: 'Damage-zone hazard scripting', image: '/assets/a2/environment/env-11.png' },
                { title: 'Chapel model (Blender)', image: '/assets/a2/environment/env-12.png' },
                { title: 'Chapel imported to Unity', image: '/assets/a2/environment/env-13.png' },
                { title: 'Chapel placed in level', image: '/assets/a2/environment/env-14.png' },
                { title: 'Chapel interior', image: '/assets/a2/environment/env-15.png' },
            ],
        },
        {
            label: 'In Engine',
            items: [
                { title: 'Ancient Forge crafting menu', image: '/assets/a2/build/build-05.png' },
                { title: 'In-game crafting & recipe console', image: '/assets/a2/build/build-03.png' },
                { title: 'Inventory panel', image: '/assets/a2/build/build-07.png' },
                { title: 'Inventory & recipe reference', image: '/assets/a2/build/build-09.png' },
                { title: 'Crafted runes in the world', image: '/assets/a2/build/build-11.png' },
                { title: 'Generator puzzle — light the runes in order', image: '/assets/a2/build/gameplay-puzzle.png' },
                { title: 'Generator interaction component (editor)', image: '/assets/a2/build/generator-inspector.png' },
                { title: 'Puzzle solution wiring → Door.Open', image: '/assets/a2/build/puzzle-wiring.png' },
                { title: 'Component spawner (editor)', image: '/assets/a2/build/build-01.png' },
                { title: 'Gameplay feedback code', image: '/assets/a2/build/build-12.png' },
            ],
        },
    ] satisfies ConceptTab[],
}

// --- Gallery (gameplay videos) ---
export const A2_GALLERY = {
    title: 'Gallery',
    subtitle: 'Gameplay from the Assessment 2 prototype',
    videos: [
        { title: 'Crafting & Runes — Gameplay', src: '/assets/a2/video/gameplay-1.mp4' },
        { title: 'Rune Puzzle & Interaction — Gameplay', src: '/assets/a2/video/gameplay-2.mp4' },
    ] satisfies Video[],
}

// --- Team carousels ---
export const A2_TEAM = {
    title: 'Team & Collaboration',
    subtitle: 'Team KAS — Torrens University RGP204',
    members: [
        {
            name: 'Kira Zakirov',
            initials: 'KZ',
            role: 'Lead Developer & Technical Artist',
            contributions: [
                'Crafting & inventory system (Unity C#)',
                'ScriptableObject recipes & the Ancient Forge',
                'Rune-based interaction & puzzle system',
                'Inventory HUD & UI',
                'Project management & Jira board',
                'WebGL build',
            ],
        },
        {
            name: 'Alexander Ramic',
            initials: 'AR',
            role: 'Game Designer, 3D Modeller & Sound Designer',
            contributions: [
                'Crafting & inventory system design document',
                'Interaction & rune-puzzle system design document',
                '3D models — doors, gates, runes, clock tower & crafting components',
                'Recipe & component design',
            ],
        },
        {
            name: 'Sarah Assiri',
            initials: 'SA',
            role: '3D Artist, Animator & Level Designer',
            contributions: [
                'Level design & layout',
                'Environment building & terrain',
                'Chapel model (Blender) & in-level placement',
                'Level signage & narrative props',
                'Environmental hazards (fire & damage zones)',
            ],
        },
    ] satisfies TeamMember[],
    carousels: [
        {
            title: 'Team Communication',
            subtitle: 'Coordination throughout the Assessment 2 sprint',
            images: Array.from({ length: 11 }, (_, i) => `/assets/a2/team/chat-${String(i + 1).padStart(2, '0')}.png`),
            altPrefix: 'Team chat',
        },
        {
            title: 'Design Discussions',
            subtitle: 'Weeks 5–9 — mechanics, crafting & puzzle design threads',
            images: Array.from({ length: 21 }, (_, i) => `/assets/a2/team/discussions/disc-${String(i + 1).padStart(2, '0')}.png`),
            altPrefix: 'Design discussion',
        },
    ],
}

// --- Individual contributions (per-member spotlights) ---
// Deliberately uneven: each member's block has a different layout and a
// different amount of media, reflecting what they actually owned this sprint.
export const A2_SPOTLIGHTS = {
    title: 'Individual Contributions',
    subtitle: 'Three people, three disciplines — how Prototype 2 came together',
    members: [
        {
            name: 'Alexander Ramic',
            role: 'Game Designer · 3D Modeller · Sound Designer',
            accent: '#c4a44a',
            // Alex's own words (from his written reflection).
            lead:
                '"My part in the project was designing our game mechanics and drawing up the relevant ' +
                'documents, controls and crafting recipes — which we’d then discuss and tweak as a group ' +
                'so they could be built in the time we had and become our combined vision. I recorded the ' +
                'sounds, and textured and modelled all of my own models: the Nature Door, Clock Tower, the ' +
                'hint grave-altars, the crafting items (Runes, Elements, Materials), the puzzle generator, ' +
                'Symbol Wall and unused puzzle altar — and helped place assets in the scene and configure ' +
                'the puzzle solutions." — Alexander',
            focus: ['Design documents', 'Crafting recipes', '3D modelling & texturing', 'Sound design', 'Puzzle configuration'],
            media: [
                { src: '/assets/a2/members/alex/doc-crafting-draft.png', caption: 'Crafting — initial concept draft (UI & game screen)', fit: 'contain' },
                { src: '/assets/a2/members/alex/element-fire.png', caption: 'Fire — element', fit: 'contain' },
                { src: '/assets/a2/members/alex/element-water.png', caption: 'Water — element', fit: 'contain' },
                { src: '/assets/a2/members/alex/element-electricity.png', caption: 'Electricity — element', fit: 'contain' },
                { src: '/assets/a2/members/alex/element-wood.png', caption: 'Wood — material', fit: 'contain' },
                { src: '/assets/a2/members/alex/element-stone.png', caption: 'Stone — material', fit: 'contain' },
                { src: '/assets/a2/members/alex/element-metal.png', caption: 'Metal — material', fit: 'contain' },
                { src: '/assets/a2/members/alex/coin.png', caption: 'Coin — crafted item', fit: 'contain' },
                { src: '/assets/a2/members/alex/rusted-coin.png', caption: 'Rustworn Coin', fit: 'contain' },
                { src: '/assets/a2/members/alex/runestone.png', caption: 'Runestone', fit: 'contain' },
                { src: '/assets/a2/members/alex/rune-oasis.png', caption: 'Oasis Nature Rune', fit: 'contain' },
                { src: '/assets/a2/members/alex/rune-steel.png', caption: 'Steel Thunder Rune', fit: 'contain' },
                { src: '/assets/a2/members/alex/doc-addendum-forge.jpg', caption: 'Addendum — Ancient Forge crafting UI & controls', fit: 'contain' },
                { src: '/assets/a2/members/alex/doc-addendum-info.jpg', caption: 'Addendum — recipes, generator dial & puzzle-solution mapping', fit: 'contain' },
                { src: '/assets/a2/members/alex/doc-crafting-1.jpg', caption: 'Crafting system design — part 1', fit: 'contain' },
                { src: '/assets/a2/members/alex/doc-crafting-2.jpg', caption: 'Crafting system design — part 2', fit: 'contain' },
                { src: '/assets/a2/members/alex/doc-crafting-3.jpg', caption: 'Crafting system design — part 3', fit: 'contain' },
                { src: '/assets/a2/members/alex/doc-crafting-4.jpg', caption: 'Crafting & inventory design — part 4', fit: 'contain' },
                { src: '/assets/a2/members/alex/doc-inventory-2.jpg', caption: 'Inventory design — part 2', fit: 'contain' },
                { src: '/assets/a2/members/alex/doc-interaction-1.jpg', caption: 'Interaction & rune-puzzle design — part 1', fit: 'contain' },
                { src: '/assets/a2/members/alex/doc-interaction-2.jpg', caption: 'Interaction & rune-puzzle design — part 2', fit: 'contain' },
                { src: '/assets/a2/members/alex/doc-interaction-3.jpg', caption: 'Interaction & rune-puzzle design — part 3', fit: 'contain' },
                { src: '/assets/a2/members/alex/doc-interaction-4.jpg', caption: 'Interaction & rune-puzzle design — part 4', fit: 'contain' },
                { src: '/assets/a2/members/alex/doc-interaction-5.jpg', caption: 'Interaction & rune-puzzle design — part 5', fit: 'contain' },
                { src: '/assets/a2/members/alex/plan-clocktower.jpg', caption: 'Level plan — clock tower, generator & lamppost parkour' },
                { src: '/assets/a2/members/alex/plan-greybox.jpg', caption: 'Greybox — Steel Puzzle Door & grave-altar hint assets (Blender)' },
                { src: '/assets/a2/members/alex/model-chapel-greybox.jpg', caption: 'Chapel greybox & pew layout (Blender)' },
                { src: '/assets/a2/members/alex/nature-archway-ingame.jpg', caption: 'Nature Door & Archway model in-engine' },
                { src: '/assets/a2/members/alex/tex-generator.png', caption: 'Generator — hand-painted texture atlas', fit: 'contain' },
            ],
        },
        {
            name: 'Sarah Assiri',
            role: '3D Artist · Animator · Level Designer',
            accent: '#00e5ff',
            lead:
                'Sarah built the world the systems live in — sculpting the terrain, laying out the oasis ' +
                'and its platforming route, modelling the chapel, raising the clock tower and stone maze, ' +
                'placing the narrative signage, tuning the retro materials and scripting the environmental ' +
                'hazards that make the level a place to survive, not just cross.',
            focus: ['Level layout', 'Terrain & environment', 'Chapel & tower (Blender)', 'Materials & lighting', 'Environmental hazards'],
            media: [
                { src: '/assets/a2/members/sarah/env-water-mountains.jpg', caption: 'The "Water Mountains" vista — oasis, rocky islands & signage' },
                { src: '/assets/a2/members/sarah/env-entrance.jpg', caption: 'Level entrance — "Welcome to Kas" sign & lanterns' },
                { src: '/assets/a2/members/sarah/env-layout.jpg', caption: 'Top-down layout — oasis, platforms & enemy placement' },
                { src: '/assets/a2/members/sarah/env-maze.jpg', caption: 'Top-down — stone-walled maze layout' },
                { src: '/assets/a2/members/sarah/env-platforms.jpg', caption: 'Wooden bridges & the platforming route over the oasis' },
                { src: '/assets/a2/members/sarah/env-oasis.jpg', caption: 'Oasis pool ringed by stone walls' },
                { src: '/assets/a2/members/sarah/env-forest-path.jpg', caption: 'Forest path through the spiked woodland' },
                { src: '/assets/a2/members/sarah/env-signpost.jpg', caption: 'Narrative signpost & the gated path' },
                { src: '/assets/a2/members/sarah/env-clock-tower.jpg', caption: 'Clock tower & lantern-lit ramparts' },
                { src: '/assets/a2/members/sarah/env-chapel.jpg', caption: 'Chapel on the hill' },
                { src: '/assets/a2/members/sarah/env-chapel-interior.jpg', caption: 'Chapel interior — pews & altar' },
                { src: '/assets/a2/members/sarah/env-rune-altar.jpg', caption: 'Rune-puzzle altar by the wall' },
                { src: '/assets/a2/members/sarah/env-fire-hazard.jpg', caption: 'Fire hazards placed along the hillside' },
                { src: '/assets/a2/members/sarah/env-cliff-fire.jpg', caption: 'Fire hazards on the cliffside tower' },
                { src: '/assets/a2/members/sarah/env-damage-zone.jpg', caption: 'Damage-zone hazard scripting (Unity)' },
                { src: '/assets/a2/members/sarah/env-material-setup.jpg', caption: 'Material setup — Retro Lit shader (lamppost)' },
                { src: '/assets/a2/members/sarah/env-material-tuning.jpg', caption: 'Material tuning — lighting & the retro material library' },
                { src: '/assets/a2/members/sarah/env-anim-materials.jpg', caption: 'Animation & materials workflow (Unity)' },
                { src: '/assets/a2/members/sarah/env-editor.jpg', caption: 'Level assembly in the Unity editor' },
            ],
        },
        {
            name: 'Kira Zakirov',
            role: 'Lead Developer · Technical Artist',
            accent: '#c4a44a',
            lead:
                'Kira programmed both systems end-to-end in Unity C# — the ScriptableObject crafting and ' +
                'inventory, the rune-driven interaction framework, and the generator puzzles that validate ' +
                'a crafted sequence to open the way forward. She wired the prefabs and solutions in the ' +
                'scene, built the inventory HUD, and packaged and shipped the WebGL build.',
            focus: ['Crafting & inventory (C#)', 'Rune interaction framework', 'Generator puzzle logic', 'Inventory HUD', 'WebGL build'],
            video: {
                src: '/assets/a2/video/gameplay-2.mp4',
                title: 'Rune puzzle & interaction — gameplay',
            },
            media: [
                { src: '/assets/a2/members/kira/puzzle-ingame.jpg', caption: 'Generator puzzle in-game — light the runes in order, with the live inventory HUD' },
                { src: '/assets/a2/members/kira/code-crafting-system.png', caption: 'CraftingSystem.cs — recipe matching & inventory logic (C#)' },
                { src: '/assets/a2/members/kira/code-crafting-recipe.png', caption: 'CraftingRecipeSO.cs — recipe ScriptableObject' },
                { src: '/assets/a2/members/kira/code-craftable-item.png', caption: 'CraftableItemSO.cs — craftable-item ScriptableObject' },
                { src: '/assets/a2/members/kira/code-shader.png', caption: 'URP Lit shader — material pipeline reference' },
                { src: '/assets/a2/members/kira/generator-inspector.png', caption: 'Generator component — required rune, solutions & events' },
                { src: '/assets/a2/members/kira/solution-wiring.png', caption: 'Solution sequence wired to Door.Open on solve' },
                { src: '/assets/a2/members/kira/solution-order.png', caption: 'Puzzle solution — element order array' },
                { src: '/assets/a2/members/kira/generator-placement.jpg', caption: 'Generator & dial placement in the scene' },
                { src: '/assets/a2/members/kira/prefab-materials.jpg', caption: 'Pickup & prop prefabs wired into the scene' },
                { src: '/assets/a2/members/kira/model-import.png', caption: 'Model import — material remapping (Unity)' },
                { src: '/assets/a2/members/kira/project-props.png', caption: 'Project structure — models, prefabs & systems' },
            ],
        },
    ] satisfies SpotlightMember[],
}
