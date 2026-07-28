import React from 'react'
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
import Section from '../Section/Section'
import MetaChips from '../../molecules/MetaChips/MetaChips'
import type { BriefHeaderProps } from './BriefHeader.types'
import { styles } from './BriefHeader.styles'

const BriefHeader = React.memo(function BriefHeader({ section }: BriefHeaderProps) {
    const { meta, learningOutcomes, deliverables, note } = section
    const hasDetails = Boolean(learningOutcomes?.length || deliverables?.length || note)

    return (
        <Section id={section.id}>
            <Box sx={styles.plaque}>
                <Box>
                    <Typography sx={styles.code}>{meta.code} · {meta.label}</Typography>
                    <Typography sx={styles.title}>{meta.title}</Typography>
                </Box>

                <MetaChips meta={meta} />

                {hasDetails && (
                    <Accordion disableGutters sx={styles.accordion}>
                        <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />} sx={styles.summary}>
                            Brief details
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box sx={styles.detailsGroup}>
                                {deliverables && deliverables.length > 0 && (
                                    <Box>
                                        <Typography sx={styles.groupLabel}>What the brief asks for</Typography>
                                        <Box component="ul" sx={styles.list}>
                                            {deliverables.map((item) => (
                                                <Box component="li" key={item} sx={styles.listItem}>{item}</Box>
                                            ))}
                                        </Box>
                                    </Box>
                                )}
                                {learningOutcomes && learningOutcomes.length > 0 && (
                                    <Box>
                                        <Typography sx={styles.groupLabel}>Learning outcomes</Typography>
                                        <Box component="ul" sx={styles.list}>
                                            {learningOutcomes.map((item) => (
                                                <Box component="li" key={item} sx={styles.listItem}>{item}</Box>
                                            ))}
                                        </Box>
                                    </Box>
                                )}
                                {note && <Typography sx={styles.note}>{note}</Typography>}
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                )}
            </Box>
        </Section>
    )
})

export default BriefHeader
