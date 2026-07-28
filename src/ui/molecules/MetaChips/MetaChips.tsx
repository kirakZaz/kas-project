import React from 'react'
import { Box, Chip } from '@mui/material'
import { briefChips } from '../../../utils/brief'
import type { MetaChipsProps } from './MetaChips.types'
import { styles } from './MetaChips.styles'

const MetaChips = React.memo(function MetaChips({ meta, align = 'flex-start' }: MetaChipsProps) {
    return (
        <Box sx={styles.row(align)}>
            {briefChips(meta).map((label) => (
                <Chip key={label} label={label} size="small" sx={styles.chip} />
            ))}
        </Box>
    )
})

export default MetaChips
