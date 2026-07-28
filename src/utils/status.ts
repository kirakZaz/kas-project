import type { AssessmentStatus } from '../types/content.types'

// Global lookups for assessment status → display label / accent colour.
export const STATUS_LABELS: Record<AssessmentStatus, string> = {
    complete: 'Complete',
    'in-progress': 'In Progress',
    'coming-soon': 'Coming Soon',
}

export const STATUS_COLORS: Record<AssessmentStatus, string> = {
    complete: '#7bc47f',
    'in-progress': '#c4a44a',
    'coming-soon': '#8a8580',
}
