import React from 'react'
import { Box, Typography } from '@mui/material'
import HourglassEmptyRoundedIcon from '@mui/icons-material/HourglassEmptyRounded'
import Section from '../Section/Section'
import MetaChips from '../../molecules/MetaChips/MetaChips'
import type { ComingSoonBlockProps } from './ComingSoonBlock.types'
import { styles } from './ComingSoonBlock.styles'

const ComingSoonBlock = React.memo(function ComingSoonBlock({ section }: ComingSoonBlockProps) {
    return (
        <Section id={section.id}>
            <Box sx={styles.wrap}>
                <HourglassEmptyRoundedIcon sx={styles.icon} />
                <Typography sx={styles.title}>{section.title}</Typography>
                <Typography sx={styles.message}>{section.message}</Typography>
                {section.meta && (
                    <Box sx={styles.metaWrap}>
                        <MetaChips meta={section.meta} align="center" />
                    </Box>
                )}
            </Box>
        </Section>
    )
})

export default ComingSoonBlock
