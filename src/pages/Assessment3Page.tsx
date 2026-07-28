import React from 'react'
import PageLayout from '../ui/templates/PageLayout/PageLayout'
import ContentPage from '../ui/templates/ContentPage/ContentPage'
import { ASSESSMENT_3 } from '../content/assessments/a3'

const Assessment3Page = React.memo(function Assessment3Page() {
    return (
        <PageLayout>
            <ContentPage content={ASSESSMENT_3} />
        </PageLayout>
    )
})

export default Assessment3Page
