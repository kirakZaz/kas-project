import React from 'react'
import PageLayout from '../ui/templates/PageLayout/PageLayout'
import ContentPage from '../ui/templates/ContentPage/ContentPage'
import { HOME } from '../content/home'

const HomePage = React.memo(function HomePage() {
    return (
        <PageLayout>
            <ContentPage content={HOME} />
        </PageLayout>
    )
})

export default HomePage
