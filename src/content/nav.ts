import type { NavItem } from '../types/content.types'
import { ROUTES } from './routes'

// Header navigation. Home + one entry per assessment.
export const NAV_ITEMS: NavItem[] = [
    { label: 'Home', to: ROUTES.home },
    { label: 'Assessment 1', to: ROUTES.assessment1 },
    { label: 'Assessment 2', to: ROUTES.assessment2 },
    { label: 'Assessment 3', to: ROUTES.assessment3 },
]
