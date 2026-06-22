import React from 'react'
import { Typography, Box } from '@mui/material'
import { styles } from './SectionTitle.styles'
import type { SectionTitleProps } from './SectionTitle.types'

const SectionTitle = React.memo(function SectionTitle({ title, subtitle }: SectionTitleProps) {
    return (
        <Box sx={styles.wrapper}>
            <Typography variant="h2" sx={styles.title}>
                {title}
            </Typography>
            {subtitle && (
                <Typography variant="body1" sx={styles.subtitle}>
                    {subtitle}
                </Typography>
            )}
            <Box sx={styles.divider} />
        </Box>
    )
})

export default SectionTitle
