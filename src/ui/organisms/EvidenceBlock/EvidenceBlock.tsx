import React from 'react'
import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
import Section from '../Section/Section'
import MediaFigure from '../../molecules/MediaFigure/MediaFigure'
import { MotionBox } from '../../motion'
import { staggerContainer, staggerItem } from '../../../hooks/useScrollAnimation'
import type { EvidenceBlockProps } from './EvidenceBlock.types'
import { styles } from './EvidenceBlock.styles'

const EvidenceBlock = React.memo(function EvidenceBlock({ section }: EvidenceBlockProps) {
    const cols = section.columns ?? 3

    const grid = (
        <MotionBox
            sx={styles.grid(cols)}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
        >
            {section.items.map((item) => (
                <MotionBox key={item.src} variants={staggerItem} sx={styles.item}>
                    <MediaFigure item={item} />
                </MotionBox>
            ))}
        </MotionBox>
    )

    // Detailed / secondary evidence collapses into an accordion.
    if (section.collapsible) {
        return (
            <Section id={section.id}>
                <Accordion disableGutters defaultExpanded={!section.defaultCollapsed} sx={styles.accordion}>
                    <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />} sx={styles.summary}>
                        <Typography sx={styles.accTitle}>{section.title}</Typography>
                        {section.subtitle && <Typography sx={styles.accSubtitle}>{section.subtitle}</Typography>}
                    </AccordionSummary>
                    <AccordionDetails sx={styles.details}>
                        {section.description && <Typography sx={styles.description}>{section.description}</Typography>}
                        {grid}
                    </AccordionDetails>
                </Accordion>
            </Section>
        )
    }

    return (
        <Section id={section.id} title={section.title} subtitle={section.subtitle}>
            {section.description && <Typography sx={styles.description}>{section.description}</Typography>}
            {grid}
        </Section>
    )
})

export default EvidenceBlock
