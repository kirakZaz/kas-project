import type { TeamMember } from '../types/content.types'
import type { TeamMember as TeamCard } from '../components/organisms/Team/Team'

// High-level team cards for Home — global, without per-assessment detail.
export const TEAM_CARDS: TeamCard[] = [
    {
        name: 'Kira Zakirov',
        initials: 'KZ',
        role: 'Lead Developer',
        contributions: ['Game mechanics', 'Unity programming', 'Level design', 'UI', 'WebGL build', 'Website'],
    },
    {
        name: 'Sarah Assiri',
        initials: 'SA',
        role: '3D Artist & Animator',
        contributions: ['Character modeling', 'Rigging', 'Animation', 'Texturing', 'VFX'],
    },
    {
        name: 'Alexander Ramic',
        initials: 'AR',
        role: 'Game Designer & Sound Designer',
        contributions: ['Mechanics documents', 'Concept art', 'Enemy design', 'Sound effects'],
    },
]

// Team roster — taken from the project README.
export const TEAM: TeamMember[] = [
    {
        name: 'Kira Zakirov',
        role: 'Lead Developer',
        contributions: 'Game mechanics, Unity programming, level design, UI, WebGL build, website',
    },
    {
        name: 'Sarah Assiri',
        role: '3D Artist & Animator',
        contributions: 'Character modeling, rigging, animation, texturing, VFX',
    },
    {
        name: 'Alexander Ramic',
        role: 'Game Designer & Sound Designer',
        contributions: 'Mechanics documents, concept art, enemy design, sound effects',
    },
]
