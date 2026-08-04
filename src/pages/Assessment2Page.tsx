import React from 'react'
import PageLayout from '../ui/templates/PageLayout/PageLayout'
import PageHero from '../ui/organisms/PageHero/PageHero'
import BriefHeader from '../ui/organisms/BriefHeader/BriefHeader'
import { A2_HERO, A2_BRIEF, A2_OVERVIEW, A2_PROCESS, A2_CONCEPT, A2_GALLERY, A2_SPOTLIGHTS, A2_TEAM } from '../content/assessments/a2'
// Same reusable A1 showcase components, rendered with Assessment 2 data.
import Overview from '../components/organisms/Overview/Overview'
import Process from '../components/organisms/Process/Process'
import Concept from '../components/organisms/Concept/Concept'
import Gallery from '../components/organisms/Gallery/Gallery'
import MemberSpotlights from '../components/organisms/MemberSpotlights/MemberSpotlights'
import Team from '../components/organisms/Team/Team'

const Assessment2Page = React.memo(function Assessment2Page() {
    return (
        <PageLayout>
            <PageHero section={A2_HERO} />
            <BriefHeader section={A2_BRIEF} />
            <Overview
                id="what-we-built"
                title={A2_OVERVIEW.title}
                subtitle={A2_OVERVIEW.subtitle}
                description={A2_OVERVIEW.description}
                items={A2_OVERVIEW.items}
            />
            <Process
                id="process"
                title={A2_PROCESS.title}
                subtitle={A2_PROCESS.subtitle}
                sprints={A2_PROCESS.sprints}
            />
            <Concept
                id="design"
                title={A2_CONCEPT.title}
                subtitle={A2_CONCEPT.subtitle}
                tabs={A2_CONCEPT.tabs}
            />
            <Gallery
                id="gallery"
                title={A2_GALLERY.title}
                subtitle={A2_GALLERY.subtitle}
                videos={A2_GALLERY.videos}
            />
            <MemberSpotlights
                id="contributions"
                title={A2_SPOTLIGHTS.title}
                subtitle={A2_SPOTLIGHTS.subtitle}
                members={A2_SPOTLIGHTS.members}
            />
            <Team
                id="team"
                title="Team & Collaboration"
                subtitle="Coordination and design threads across the Assessment 2 sprint"
                members={[]}
                carousels={A2_TEAM.carousels}
            />
        </PageLayout>
    )
})

export default Assessment2Page
