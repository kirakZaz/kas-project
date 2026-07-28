import React from 'react'
import { Box } from '@mui/material'
import SectionTitle from '../../../components/atoms/SectionTitle/SectionTitle'
import { MotionBox } from '../../motion'
import { fadeIn } from '../../../hooks/useScrollAnimation'
import type { SectionProps } from './Section.types'
import { styles } from './Section.styles'

// Layout primitive: consistent vertical rhythm, centered container, optional
// animated section title, and a scroll-reveal on its body. Every content block
// is wrapped in a Section.
const Section = React.memo(function Section({ id, title, subtitle, tone = 'default', children }: SectionProps) {
    return (
        <Box component="section" id={id} sx={styles.section(tone)}>
            <Box sx={styles.inner}>
                {title && <SectionTitle title={title} subtitle={subtitle} />}
                <MotionBox
                    sx={title ? styles.bodyWithTitle : styles.body}
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {children}
                </MotionBox>
            </Box>
        </Box>
    )
})

export default Section
