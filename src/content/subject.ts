// Subject-level facts. Text is taken verbatim from the RGP204 subject outline
// (Subject Introduction / Student Expectations screenshots) and the assessment
// briefs (Learning Outcomes). Nothing here is invented.

export const SUBJECT = {
    code: 'RGP204',
    title: 'Rapid Game Prototype',
    university: 'Torrens University Australia',
    term: 'Trimester 2, 2026',

    introduction:
        'The goal of this subject is to provide the students with an opportunity to collaborate ' +
        'on a series of projects, and enhance collaborative skills working within a team of people ' +
        'across multiple disciplines. Additionally, the assignments in this subject will challenge ' +
        'the student in finding creative solutions to project management and small scale rapid game ' +
        'creation. In teams, students will be asked to create and present various game prototypes ' +
        'over the duration of the subject.',

    expectations: [
        'Participate in all scheduled Collaborate or face-to-face classes.',
        'This time is intended to be used by students and their lecturer to work through activities and engage in discussion about the weekly content.',
        'These sessions provide a space for students to raise questions and seek guidance on writing their assessments.',
        'Students will review and explore more deeply the information presented in the learning material.',
        'Students are also expected to have worked through the learning material for this module before attending the class – this enables informed discussion and full participation in learning activities.',
    ],

    learningOutcomes: [
        'Collaborate to efficiently produce and manage a game project.',
        'Utilise iterative prototyping techniques then discover and implement optimal game pipelines.',
        'Critically reflect on project management methods and outcomes with a view to informing future game development projects.',
        'Investigate and implement middleware and other technologies to assist in accelerated and efficient development of games.',
    ],
} as const
