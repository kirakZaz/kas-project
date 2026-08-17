import type { HeroSection, BriefSection, BriefMeta, FeaturesSection, CtaSection } from '../../types/content.types'
import type { Mechanic } from '../../components/organisms/Overview/Overview'
import type { ConceptTab } from '../../components/organisms/Concept/Concept'
import type { Video } from '../../components/organisms/Gallery/Gallery'

// Assessment 3 — Vertical Slice. Custom page (like A2) assembling the rich
// showcase components. Builds on the A1 movement mechanics and the A2 crafting /
// rune systems, polished into a single representative level.

export const META_A3: BriefMeta = {
    code: 'RGP204',
    label: 'Assessment 3',
    title: 'Vertical Slice',
    format: 'Individual / Group',
    weight: '40%',
    due: 'Week 12',
    marks: '100 marks',
}

export const A3_HERO: HeroSection = {
    kind: 'hero',
    eyebrow: 'Assessment 3',
    title: 'Vertical Slice',
    subtitle:
        'A polished, representative slice of KAS — the movement mechanics from Prototype 1 and the ' +
        'crafting & rune systems from Prototype 2, refined and brought together in one level. ' +
        'Playable in the browser on itch.io.',
    meta: META_A3,
    status: 'complete',
    actions: [
        { label: 'Play KAS', kind: 'game', icon: 'play' },
        { label: 'Play on itch.io', kind: 'external', to: 'https://kirazaz.itch.io/kas', icon: 'play' },
    ],
}

export const A3_BRIEF: BriefSection = {
    kind: 'brief',
    id: 'brief',
    meta: META_A3,
    deliverables: [
        'A polished vertical slice refining at least two mechanics from the previous prototypes.',
        'Submitted as a playable build (project files provided on request).',
        'A 750-word reflective postmortem.',
    ],
    learningOutcomes: [
        'Collaborate to efficiently produce and manage a game project.',
        'Utilise iterative prototyping techniques then discover and implement optimal game pipelines.',
        'Critically reflect on project management methods and outcomes with a view to informing future game development projects.',
        'Investigate and implement middleware and other technologies to assist in accelerated and efficient development of games.',
    ],
    note: 'Assessed on Design & Functionality (40%), Aesthetics & Polish (30%) and Postmortem (30%).',
}

// --- Overview: what the slice refines ---
export const A3_OVERVIEW = {
    title: 'What We Refined',
    subtitle: 'Two prototypes, brought together and polished into one slice',
    description:
        'The vertical slice carries the core mechanics forward and adds a polish and bug-fixing pass ' +
        'so the level acts, looks and feels finished.',
    items: [
        {
            title: 'Movement & Glide',
            description:
                'Double jump, glide and i-frames from Prototype 1, refined — including the glide feather ' +
                'VFX, fixed so it renders correctly in the WebGL build.',
            color: '#00e5ff',
        },
        {
            title: 'Blade-Trap Turret & Sword Volley',
            description:
                'The blade-trap turret was rebuilt with a new gothic model and textures, and given a ' +
                'configurable sword-volley mechanic — blades fire out one by one and return.',
            color: '#c4a44a',
        },
        {
            title: 'Crafting, Runes & Resources',
            description:
                'The crafting, inventory and rune-puzzle systems from Prototype 2 carry into the slice, ' +
                'with a resource pass — methodically placed, non-respawning pickups for progression.',
            color: '#b56aff',
        },
    ] satisfies Mechanic[],
}

// --- Process: tabbed galleries (uniform image cards) ---
export const A3_PROCESS = {
    title: 'Development Process',
    subtitle: 'Rebuilding the turret, fixing the glide VFX and tuning the mechanics for release',
    tabs: [
        {
            label: 'Gameplay',
            items: [
                { title: 'Kas exploring the gothic level', image: '/assets/a3/gallery/gameplay-kas.png' },
                { title: 'Exploring with the inventory & crafting HUD', image: '/assets/a3/gallery/gameplay-swamp.png' },
                { title: 'KAS — in-game', image: '/assets/a3/gallery/ingame/gameplay-1.png' },
                { title: 'KAS — in-game', image: '/assets/a3/gallery/ingame/gameplay-2.png' },
                { title: 'KAS — in-game', image: '/assets/a3/gallery/ingame/gameplay-3.png' },
                { title: 'KAS — in-game', image: '/assets/a3/gallery/ingame/gameplay-4.png' },
                { title: 'KAS — in-game', image: '/assets/a3/gallery/ingame/gameplay-5.png' },
                { title: 'The Ancient Forge — crafting', image: '/assets/a3/gallery/ingame/gameplay-6.png' },
                { title: 'KAS — in-game', image: '/assets/a3/gallery/ingame/gameplay-7.png' },
                { title: 'KAS — in-game', image: '/assets/a3/gallery/ingame/gameplay-8.png' },
                { title: 'KAS — in-game', image: '/assets/a3/gallery/ingame/gameplay-9.png' },
            ],
        },
        {
            label: 'Turret Rebuild',
            items: [
                { title: 'The blade-trap turret in the level', image: '/assets/a3/process/turret-scene.png' },
                { title: 'Turret rebuilt with the fixed gothic meshes', image: '/assets/a3/process/turret-model.png' },
                { title: 'Extracting & remapping the FBX materials', image: '/assets/a3/process/material-extract.png' },
                { title: 'Swapping meshes & reassigning materials', image: '/assets/a3/process/turret-material-assign.png' },
                { title: 'Materials matched to the correct submesh order', image: '/assets/a3/process/turret-materials.png' },
                { title: 'Applying the base & wheel PBR textures', image: '/assets/a3/process/turret-textures.png' },
                { title: 'Configurable sword-volley on the blade trap', image: '/assets/a3/process/sword-volley-setup.png' },
                { title: 'Textured turret in the level — stained glass', image: '/assets/a3/process/turret-textured-1.png' },
                { title: 'Textured turret — finished look', image: '/assets/a3/process/turret-textured-2.png' },
            ],
        },
        {
            label: 'Glide VFX & Build',
            items: [
                { title: 'Glide feather VFX — trail, meshes & material', image: '/assets/a3/process/glide-vfx-setup.png' },
                { title: 'Fixing shader stripping for the WebGL build', image: '/assets/a3/process/shader-include.png' },
            ],
        },
    ] satisfies ConceptTab[],
}

// --- Tasks: what we delivered for the slice ---
export const A3_TASKS: FeaturesSection = {
    kind: 'features',
    id: 'tasks',
    title: 'What We Delivered',
    subtitle: 'The polish & bug-fix pass that turned the prototype into a vertical slice',
    columns: 2,
    items: [
        {
            title: 'Bug Fixes',
            description: 'Resolving the issues that stopped the slice reading as finished.',
            points: [
                'Glide feather VFX now renders in the WebGL build (shader-stripping fix)',
                'Resources no longer respawn — collected permanently',
                'Blade-trap turret model & textures fixed',
                'Responsive WebGL canvas — fits any browser / itch.io viewport',
            ],
        },
        {
            title: 'New & Refined',
            description: 'Features added or reworked for the vertical slice.',
            points: [
                'Blade-trap turret rebuilt with a new gothic model',
                'Configurable sword-volley mechanic (fires blades one by one)',
                'Level-end trigger with a "Level Complete" screen',
                'Methodical, non-respawning resource placement',
            ],
        },
    ],
}

// --- Instructions / controls ---
export const A3_CONTROLS: FeaturesSection = {
    kind: 'features',
    id: 'controls',
    title: 'How to Play',
    subtitle: 'Controls for the KAS vertical slice',
    columns: 2,
    items: [
        {
            title: 'Movement',
            description: 'Navigate the gothic level.',
            points: [
                'WASD — move',
                'Space — jump / double jump',
                'Hold Left Mouse — glide',
                'Right Mouse — look around',
                'Left Shift — run · R — crouch',
            ],
        },
        {
            title: 'Interaction',
            description: 'Gather, craft and solve.',
            points: [
                'E — interact (forges, generators, doors)',
                'Collect components & craft rune keys',
                'Solve rune puzzles to open gated paths',
                'Avoid the blade traps — time your i-frames',
            ],
        },
    ],
}

// --- Gallery: gameplay video ---
export const A3_GALLERY = {
    title: 'Gallery',
    subtitle: 'The vertical slice in motion',
    videos: [
        { title: 'Gameplay walkthrough', src: '/assets/a3/video/gameplay-walkthrough.mp4' },
        { title: 'Blade-trap turret — sword volley', src: '/assets/a3/video/swords.mp4' },
    ] satisfies Video[],
}

// --- CTA: play the game ---
export const A3_CTA: CtaSection = {
    kind: 'cta',
    id: 'play',
    title: 'Play the KAS vertical slice',
    subtitle: 'Play it in the browser here or on itch.io.',
    actions: [
        { label: 'Play KAS', kind: 'game', icon: 'play' },
        { label: 'Play on itch.io', kind: 'external', to: 'https://kirazaz.itch.io/kas', icon: 'play' },
        { label: 'Assessment 1', kind: 'route', to: '/assessment-1', icon: 'arrow' },
        { label: 'Assessment 2', kind: 'route', to: '/assessment-2', icon: 'arrow' },
    ],
}
