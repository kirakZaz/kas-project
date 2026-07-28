import React from 'react'
import type { PageSection } from '../../../types/content.types'
import KasHero from '../../organisms/KasHero/KasHero'
import PageHero from '../../organisms/PageHero/PageHero'
import Overview from '../../../components/organisms/Overview/Overview'
import Team from '../../../components/organisms/Team/Team'
import BriefHeader from '../../organisms/BriefHeader/BriefHeader'
import ProseBlock from '../../organisms/ProseBlock/ProseBlock'
import FeaturesBlock from '../../organisms/FeaturesBlock/FeaturesBlock'
import EvidenceBlock from '../../organisms/EvidenceBlock/EvidenceBlock'
import TeamBlock from '../../organisms/TeamBlock/TeamBlock'
import AssessmentCardsBlock from '../../organisms/AssessmentCardsBlock/AssessmentCardsBlock'
import CtaBlock from '../../organisms/CtaBlock/CtaBlock'
import ComingSoonBlock from '../../organisms/ComingSoonBlock/ComingSoonBlock'

// Maps one data section to its organism. This is the single switch that lets any
// page be assembled from data — add a section kind here and everywhere gets it.
const SectionRenderer = React.memo(function SectionRenderer({ section }: { section: PageSection }) {
    switch (section.kind) {
        case 'kas-hero': return <KasHero />
        case 'hero': return <PageHero section={section} />
        case 'overview': return (
            <Overview
                id={section.id}
                title={section.title}
                subtitle={section.subtitle}
                description={section.description}
                items={section.items}
            />
        )
        case 'brief': return <BriefHeader section={section} />
        case 'prose': return <ProseBlock section={section} />
        case 'features': return <FeaturesBlock section={section} />
        case 'evidence': return <EvidenceBlock section={section} />
        case 'team': return <TeamBlock section={section} />
        case 'rich-team': return (
            <Team
                id={section.id}
                title={section.title}
                subtitle={section.subtitle}
                members={section.members}
                carousels={[]}
            />
        )
        case 'assessment-cards': return <AssessmentCardsBlock section={section} />
        case 'cta': return <CtaBlock section={section} />
        case 'coming-soon': return <ComingSoonBlock section={section} />
        default: return null
    }
})

export default SectionRenderer
