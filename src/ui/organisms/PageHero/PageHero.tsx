import React from 'react'
import { Box, Typography } from '@mui/material'
import { MotionBox } from '../../motion'
import { fadeUp } from '../../../hooks/useScrollAnimation'
import MetaChips from '../../molecules/MetaChips/MetaChips'
import StatusBadge from '../../molecules/StatusBadge/StatusBadge'
import CtaButton from '../../molecules/CtaButton/CtaButton'
import type { PageHeroProps } from './PageHero.types'
import { styles } from './PageHero.styles'

const PageHero = React.memo(function PageHero({ section }: PageHeroProps) {
    return (
        <Box component="section" sx={styles.hero}>
            <MotionBox sx={styles.inner} variants={fadeUp} initial="hidden" animate="visible">
                {section.eyebrow && <Typography sx={styles.eyebrow}>{section.eyebrow}</Typography>}
                {section.status && <StatusBadge status={section.status} />}
                <Typography component="h1" sx={styles.title}>{section.title}</Typography>
                {section.subtitle && <Typography sx={styles.subtitle}>{section.subtitle}</Typography>}
                {section.meta && (
                    <Box sx={styles.metaWrap}>
                        <MetaChips meta={section.meta} align="center" />
                    </Box>
                )}
                {section.actions && section.actions.length > 0 && (
                    <Box sx={styles.actions}>
                        {section.actions.map((action) => (
                            <CtaButton key={action.label} action={action} />
                        ))}
                    </Box>
                )}
            </MotionBox>
        </Box>
    )
})

export default PageHero
