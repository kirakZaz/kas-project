import React from 'react'
import SectionRenderer from '../SectionRenderer/SectionRenderer'
import type { ContentPageProps } from './ContentPage.types'

// Renders a full page from its data description. Every page (Home + assessments)
// goes through here, so they all share one format.
const ContentPage = React.memo(function ContentPage({ content }: ContentPageProps) {
    return (
        <>
            {content.sections.map((section, i) => (
                <SectionRenderer key={`${section.kind}-${i}`} section={section} />
            ))}
        </>
    )
})

export default ContentPage
