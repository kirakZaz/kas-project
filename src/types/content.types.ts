// Global content model. Every page (Home + the three assessments) is described
// as data using these types, then rendered through a single SectionRenderer.
// No component defines its own content-shape types locally — they all live here.

export type AssessmentStatus = 'complete' | 'in-progress' | 'coming-soon'

export type MediaKind = 'image' | 'video'

export interface MediaItem {
    src: string
    alt: string
    caption?: string
    kind?: MediaKind
}

export interface NavItem {
    label: string
    to: string
}

export type CtaKind = 'route' | 'game' | 'external'
export type CtaIcon = 'play' | 'arrow' | 'github'

export interface CtaAction {
    label: string
    kind: CtaKind
    to?: string
    icon?: CtaIcon
}

export interface BriefMeta {
    code: string        // 'RGP204'
    label: string       // 'Assessment 2'
    title: string       // 'Prototype 2'
    format: string      // 'Individual / Group'
    weight: string      // '35%'
    due?: string        // 'Week 8'
    marks?: string      // '100 marks'
}

export interface FeatureItem {
    title: string
    description: string
    points?: string[]
}

export interface TeamMember {
    name: string
    role: string
    contributions?: string
}

export interface AssessmentCardData {
    label: string       // 'Assessment 1'
    title: string       // 'Prototype 1'
    weight: string
    status: AssessmentStatus
    to: string
    blurb: string
}

// ---- Section variants (discriminated union on `kind`) ----

export interface KasHeroSection {
    kind: 'kas-hero'
}

export interface HeroSection {
    kind: 'hero'
    eyebrow?: string
    title: string
    subtitle?: string
    meta?: BriefMeta
    status?: AssessmentStatus
    actions?: CtaAction[]
}

export interface BriefSection {
    kind: 'brief'
    id?: string
    meta: BriefMeta
    learningOutcomes?: string[]
    deliverables?: string[]
    note?: string
}

export interface ProseSection {
    kind: 'prose'
    id?: string
    eyebrow?: string
    title?: string
    subtitle?: string
    align?: 'left' | 'center'
    paragraphs: string[]
}

export interface FeaturesSection {
    kind: 'features'
    id?: string
    title?: string
    subtitle?: string
    columns?: number
    items: FeatureItem[]
}

export interface MechanicItem {
    title: string
    description: string
    icon?: string
    color: string
}

export interface OverviewSection {
    kind: 'overview'
    id?: string
    title?: string
    subtitle?: string
    description?: string
    items?: MechanicItem[]
}

export interface EvidenceSection {
    kind: 'evidence'
    id?: string
    title: string
    subtitle?: string
    description?: string
    items: MediaItem[]
    columns?: number
    collapsible?: boolean
    defaultCollapsed?: boolean
}

export interface TeamSection {
    kind: 'team'
    id?: string
    title?: string
    subtitle?: string
    members: TeamMember[]
}

export interface AssessmentCardsSection {
    kind: 'assessment-cards'
    id?: string
    title?: string
    subtitle?: string
    items: AssessmentCardData[]
}

export interface CtaSection {
    kind: 'cta'
    id?: string
    title: string
    subtitle?: string
    actions: CtaAction[]
}

export interface ComingSoonSection {
    kind: 'coming-soon'
    id?: string
    title: string
    message: string
    meta?: BriefMeta
}

export type PageSection =
    | KasHeroSection
    | HeroSection
    | OverviewSection
    | BriefSection
    | ProseSection
    | FeaturesSection
    | EvidenceSection
    | TeamSection
    | AssessmentCardsSection
    | CtaSection
    | ComingSoonSection

export interface PageContent {
    sections: PageSection[]
}
