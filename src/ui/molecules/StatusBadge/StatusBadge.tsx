import React from 'react'
import { Box, Typography } from '@mui/material'
import { STATUS_LABELS, STATUS_COLORS } from '../../../utils/status'
import type { StatusBadgeProps } from './StatusBadge.types'
import { styles } from './StatusBadge.styles'

const StatusBadge = React.memo(function StatusBadge({ status }: StatusBadgeProps) {
    const color = STATUS_COLORS[status]
    return (
        <Box sx={styles.badge}>
            <Box sx={styles.dot(color)} />
            <Typography component="span" sx={styles.label(color)}>
                {STATUS_LABELS[status]}
            </Typography>
        </Box>
    )
})

export default StatusBadge
