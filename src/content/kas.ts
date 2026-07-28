import type { FeatureItem } from '../types/content.types'

// About the game and the character. Facts taken from the project README.
export const KAS = {
    tagline: 'A gothic 3D platformer prototype.',

    about: [
        'KAS is a 3D platformer set in a dark gothic world. Players control Kas — a bird-like ' +
        'creature navigating through ancient architecture, deadly traps, and mysterious turrets.',
        'Every asset in the game — character models, textures, environment, sound effects — was ' +
        'created from scratch by the team over a rapid prototyping sprint cycle.',
    ],

    character: {
        name: 'Kas',
        description:
            'Kas is a bird-like creature — the character the player controls. Using a double jump, ' +
            'a feathered glide, and invincibility frames, Kas moves through gothic spires, chasms, ' +
            'and blade traps.',
    },

    mechanics: [
        { title: 'Double Jump', description: 'Precise platforming through gothic spires.' },
        { title: 'Glide', description: 'Spread feathered wings to soar across chasms.' },
        { title: 'I-Frames', description: 'Activate invincibility shields to survive blade traps.' },
    ] satisfies FeatureItem[],
} as const
