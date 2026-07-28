import React from 'react'
import PageLayout from '../ui/templates/PageLayout/PageLayout'
import PageHero from '../ui/organisms/PageHero/PageHero'
import BriefHeader from '../ui/organisms/BriefHeader/BriefHeader'
import { A1_HERO, ASSESSMENT_1_BRIEF } from '../content/assessments/a1'
// The reusable A1 showcase components, rendered here with their default (A1) data.
import Overview from '../components/organisms/Overview/Overview'
import Process from '../components/organisms/Process/Process'
import Concept from '../components/organisms/Concept/Concept'
import Gallery from '../components/organisms/Gallery/Gallery'
import Team from '../components/organisms/Team/Team'

const Assessment1Page = React.memo(function Assessment1Page() {
    return (
        <PageLayout>
            <PageHero section={A1_HERO} />
            <BriefHeader section={ASSESSMENT_1_BRIEF} />
            <Overview />
            <Process />
            <Concept />
            <Gallery />
            <Team />
        </PageLayout>
    )
})

export default Assessment1Page
