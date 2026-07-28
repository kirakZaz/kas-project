import React from 'react'
import { Box, Typography } from '@mui/material'
import Section from '../Section/Section'
import CtaButton from '../../molecules/CtaButton/CtaButton'
import type { CtaBlockProps } from './CtaBlock.types'
import { styles } from './CtaBlock.styles'

const CtaBlock = React.memo(function CtaBlock({ section }: CtaBlockProps) {
    return (
        <Section id={section.id} tone="alt">
            <Box sx={styles.wrap}>
                <Typography sx={styles.title}>{section.title}</Typography>
                {section.subtitle && <Typography sx={styles.subtitle}>{section.subtitle}</Typography>}
                <Box sx={styles.actions}>
                    {section.actions.map((action) => (
                        <CtaButton key={action.label} action={action} />
                    ))}
                </Box>
            </Box>
        </Section>
    )
})

export default CtaBlock
