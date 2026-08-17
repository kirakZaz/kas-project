import type { PageContent } from '../types/content.types'
import { SUBJECT } from './subject'
import { TEAM_CARDS } from './team'
import { ROUTES } from './routes'

// Home page. About the subject, what's expected, and about KAS (the game and the
// character), the team, and links into the three assessments. All text is drawn
// from the subject outline, the briefs and the README.
export const HOME: PageContent = {
    sections: [
        // The animated KAS hero from Assessment 1, reused at the top of Home.
        { kind: 'kas-hero' },

        {
            kind: 'prose',
            id: 'about-subject',
            eyebrow: `${SUBJECT.code} · ${SUBJECT.university}`,
            title: SUBJECT.title,
            align: 'center',
            paragraphs: [
                `${SUBJECT.term} — a team-based subject built around rapid game prototyping, showcased here through the game KAS.`,
            ],
        },

        {
            kind: 'prose',
            id: 'subject',
            eyebrow: 'The Subject',
            title: 'Subject Introduction',
            paragraphs: [SUBJECT.introduction],
        },

        {
            kind: 'features',
            id: 'learn',
            title: 'What we learn',
            columns: 2,
            items: [
                { title: 'Collaborate & manage', description: SUBJECT.learningOutcomes[0] },
                { title: 'Iterative prototyping', description: SUBJECT.learningOutcomes[1] },
                { title: 'Critical reflection', description: SUBJECT.learningOutcomes[2] },
                { title: 'Middleware & tech', description: SUBJECT.learningOutcomes[3] },
            ],
        },

        {
            kind: 'prose',
            id: 'expectations',
            eyebrow: 'The Subject',
            title: 'Student Expectations',
            paragraphs: [...SUBJECT.expectations],
        },

        {
            kind: 'rich-team',
            id: 'team',
            title: 'The Team',
            subtitle: 'A cross-disciplinary team of three across programming, art and design.',
            members: TEAM_CARDS,
        },

        {
            kind: 'assessment-cards',
            id: 'assessments',
            title: 'The Assessments',
            subtitle: 'Three prototypes across the trimester.',
            items: [
                {
                    label: 'Assessment 1',
                    title: 'Prototype 1',
                    weight: '25%',
                    status: 'complete',
                    to: ROUTES.assessment1,
                    blurb: 'The first KAS prototype — a gothic 3D platformer with double jump, glide and I-frames.',
                },
                {
                    label: 'Assessment 2',
                    title: 'Prototype 2',
                    weight: '35%',
                    status: 'complete',
                    to: ROUTES.assessment2,
                    blurb: 'Crafting, inventory and a rune-based interaction & puzzle system built on top of KAS.',
                },
                {
                    label: 'Assessment 3',
                    title: 'Vertical Slice',
                    weight: '40%',
                    status: 'complete',
                    to: ROUTES.assessment3,
                    blurb: 'A polished vertical slice building on the previous prototypes, plus a written postmortem.',
                },
            ],
        },

        {
            kind: 'cta',
            id: 'play',
            title: 'Play the KAS prototype',
            subtitle: 'The Unity WebGL build runs directly in your browser — no installation.',
            actions: [
                { label: 'Play KAS', kind: 'game', icon: 'play' },
            ],
        },
    ],
}
