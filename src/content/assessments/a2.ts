import type { HeroSection, BriefSection, BriefMeta } from '../../types/content.types'
import type { Mechanic } from '../../components/organisms/Overview/Overview'
import type { Sprint } from '../../components/organisms/Process/Process'
import type { ConceptTab } from '../../components/organisms/Concept/Concept'
import type { Video } from '../../components/organisms/Gallery/Gallery'
import type { TeamMember } from '../../components/organisms/Team/Team'

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
    status: 'in-progress',
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
                '/assets/a2/build/build-11.png',
                '/assets/a2/build/build-09.png',
                '/assets/a2/build/build-01.png',
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
            label: 'In Engine',
            items: [
                { title: 'Ancient Forge crafting menu', image: '/assets/a2/build/build-05.png' },
                { title: 'In-game crafting & recipe console', image: '/assets/a2/build/build-03.png' },
                { title: 'Inventory panel', image: '/assets/a2/build/build-07.png' },
                { title: 'Inventory & recipe reference', image: '/assets/a2/build/build-09.png' },
                { title: 'Crafted runes in the world', image: '/assets/a2/build/build-11.png' },
                { title: 'Component spawner (editor)', image: '/assets/a2/build/build-01.png' },
                { title: 'Gameplay feedback code', image: '/assets/a2/build/build-12.png' },
            ],
        },
        {
            label: 'Project Tracking',
            items: [
                { title: 'Jira board — backlog', image: '/assets/a2/jira/jira-1.png' },
                { title: 'Jira board — statuses', image: '/assets/a2/jira/jira-2.png' },
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
            name: 'Sarah Assiri',
            initials: 'SA',
            role: '3D Artist, Animator & Level Designer',
            contributions: [
                '3D models for craftable components (elements, items, runes)',
                'Asset texturing',
            ],
        },
        {
            name: 'Alexander Ramic',
            initials: 'AR',
            role: 'Game Designer & Sound Designer',
            contributions: [
                'Crafting & inventory system design document',
                'Interaction & rune-puzzle design document',
                'Recipe & component design',
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
    ],
}
