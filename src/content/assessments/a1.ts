import type { BriefMeta, BriefSection, HeroSection } from '../../types/content.types'

// Assessment 1 — Prototype 1. The full A1 showcase already exists as its own
// components; this brief plaque is added at the top for consistency with the
// other assessment pages. Facts from the Assessment 1 brief.
export const META_A1: BriefMeta = {
    code: 'RGP204',
    label: 'Assessment 1',
    title: 'Prototype 1',
    format: 'Individual / Group',
    weight: '25%',
    due: 'Week 4',
    marks: '100 marks',
}

export const A1_HERO: HeroSection = {
    kind: 'hero',
    eyebrow: 'Assessment 1',
    title: 'Prototype 1',
    subtitle: 'The first KAS prototype — a gothic 3D platformer with double jump, glide and I-frames.',
    meta: META_A1,
    status: 'complete',
    actions: [{ label: 'Play KAS', kind: 'game', icon: 'play' }],
}

export const ASSESSMENT_1_BRIEF: BriefSection = {
    kind: 'brief',
    id: 'brief',
    meta: META_A1,
    deliverables: [
        'A team-built prototype incorporating features from the weekly briefs (1–3).',
        'Submitted as a standalone build (project files provided on request).',
        'An individual interactive oral debrief.',
    ],
    learningOutcomes: [
        'Collaborate to efficiently produce and manage a game project.',
        'Utilise iterative prototyping techniques then discover and implement optimal game pipelines.',
        'Critically reflect on project management methods and outcomes with a view to informing future game development projects.',
    ],
}
