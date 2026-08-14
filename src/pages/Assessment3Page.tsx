import React from 'react'
import PageLayout from '../ui/templates/PageLayout/PageLayout'
import PageHero from '../ui/organisms/PageHero/PageHero'
import BriefHeader from '../ui/organisms/BriefHeader/BriefHeader'
import FeaturesBlock from '../ui/organisms/FeaturesBlock/FeaturesBlock'
import CtaBlock from '../ui/organisms/CtaBlock/CtaBlock'
// Same reusable showcase components used by A1 / A2, rendered with A3 data.
import Overview from '../components/organisms/Overview/Overview'
import Concept from '../components/organisms/Concept/Concept'
import Gallery from '../components/organisms/Gallery/Gallery'
import {
    A3_HERO, A3_BRIEF, A3_OVERVIEW, A3_PROCESS, A3_TASKS, A3_CONTROLS, A3_GALLERY, A3_CTA,
} from '../content/assessments/a3'

const Assessment3Page = React.memo(function Assessment3Page() {
    return (
        <PageLayout>
            <PageHero section={A3_HERO} />
            <BriefHeader section={A3_BRIEF} />
            <Overview
                id="what-we-refined"
                title={A3_OVERVIEW.title}
                subtitle={A3_OVERVIEW.subtitle}
                description={A3_OVERVIEW.description}
                items={A3_OVERVIEW.items}
            />
            <Concept
                id="process"
                title={A3_PROCESS.title}
                subtitle={A3_PROCESS.subtitle}
                tabs={A3_PROCESS.tabs}
            />
            <FeaturesBlock section={A3_TASKS} />
            <Gallery
                id="gallery"
                title={A3_GALLERY.title}
                subtitle={A3_GALLERY.subtitle}
                videos={A3_GALLERY.videos}
            />
            <FeaturesBlock section={A3_CONTROLS} />
            <CtaBlock section={A3_CTA} />
        </PageLayout>
    )
})

export default Assessment3Page
