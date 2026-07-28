import type { PageContent, BriefMeta } from '../../types/content.types'

// Assessment 3 — Vertical Slice. Not started yet, so the page describes the
// assessment and shows an honest "coming soon" status. Facts from the brief.

const META: BriefMeta = {
    code: 'RGP204',
    label: 'Assessment 3',
    title: 'Vertical Slice',
    format: 'Individual / Group',
    weight: '40%',
    due: 'Week 12',
    marks: '100 marks',
}

export const ASSESSMENT_3: PageContent = {
    sections: [
        {
            kind: 'hero',
            eyebrow: 'Assessment 3',
            title: 'Vertical Slice',
            subtitle: 'A polished vertical slice building on the previous prototypes, plus a written postmortem.',
            meta: META,
            status: 'coming-soon',
        },

        {
            kind: 'brief',
            id: 'brief',
            meta: META,
            deliverables: [
                'A polished vertical slice refining at least two mechanics from the previous prototypes.',
                'Submitted as a standalone build (project files provided on request).',
                'A 750-word reflective postmortem.',
            ],
            learningOutcomes: [
                'Collaborate to efficiently produce and manage a game project.',
                'Utilise iterative prototyping techniques then discover and implement optimal game pipelines.',
                'Critically reflect on project management methods and outcomes with a view to informing future game development projects.',
                'Investigate and implement middleware and other technologies to assist in accelerated and efficient development of games.',
            ],
            note: 'Assessed on Design & Functionality (40%), Aesthetics & Polish (30%) and Postmortem (30%).',
        },

        {
            kind: 'prose',
            id: 'about',
            eyebrow: 'The Assessment',
            title: 'What is a vertical slice?',
            paragraphs: [
                'A vertical slice is a complete, polished sample of what the finished game would look like — ' +
                'a single representative piece where everything acts, looks and feels the way it would in the ' +
                'final product.',
                'For this assessment the slice must build on work already completed: at least two mechanics ' +
                'from the previous prototypes are refined, polished and augmented rather than replaced.',
            ],
        },

        {
            kind: 'coming-soon',
            id: 'status',
            title: 'Coming Soon',
            message:
                'We haven’t started Assessment 3 yet. As work begins, the vertical slice and evidence of our ' +
                'process will appear here.',
        },

        {
            kind: 'cta',
            id: 'next',
            title: 'See the work so far',
            actions: [
                { label: 'Assessment 1', kind: 'route', to: '/assessment-1', icon: 'arrow' },
                { label: 'Assessment 2', kind: 'route', to: '/assessment-2', icon: 'arrow' },
            ],
        },
    ],
}
