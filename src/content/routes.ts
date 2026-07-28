// Single source of truth for route paths. Used by the router, the nav, and any
// CTA that links to another page.

export const ROUTES = {
    home: '/',
    assessment1: '/assessment-1',
    assessment2: '/assessment-2',
    assessment3: '/assessment-3',
} as const

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES]
