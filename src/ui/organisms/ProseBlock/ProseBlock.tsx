import React from 'react'
import { Box, Typography } from '@mui/material'
import Section from '../Section/Section'
import type { ProseBlockProps } from './ProseBlock.types'
import { styles } from './ProseBlock.styles'

const ProseBlock = React.memo(function ProseBlock({ section }: ProseBlockProps) {
    return (
        <Section id={section.id} title={section.title} subtitle={section.subtitle}>
            <Box sx={styles.wrap}>
                {section.eyebrow && <Typography sx={styles.eyebrow}>{section.eyebrow}</Typography>}
                {section.paragraphs.map((paragraph, i) => (
                    <Typography key={i} sx={{ ...styles.paragraph, textAlign: section.align ?? 'left' }}>{paragraph}</Typography>
                ))}
            </Box>
        </Section>
    )
})

export default ProseBlock
