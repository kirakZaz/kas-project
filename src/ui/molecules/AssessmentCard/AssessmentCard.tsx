import React from 'react'
import { Card, Typography, Box } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import StatusBadge from '../StatusBadge/StatusBadge'
import type { AssessmentCardProps } from './AssessmentCard.types'
import { styles } from './AssessmentCard.styles'

const AssessmentCard = React.memo(function AssessmentCard({ data }: AssessmentCardProps) {
    return (
        <Card component={RouterLink} to={data.to} data-cursor="pointer" sx={styles.card}>
            <Box sx={styles.topRow}>
                <Typography sx={styles.label}>{data.label}</Typography>
                <StatusBadge status={data.status} />
            </Box>
            <Typography sx={styles.title}>{data.title}</Typography>
            <Typography sx={styles.blurb}>{data.blurb}</Typography>
            <Box sx={styles.footer}>
                <Typography sx={styles.weight}>Weight {data.weight}</Typography>
                <Box component="span" sx={styles.enter}>
                    View <ArrowForwardRoundedIcon sx={{ fontSize: 15 }} />
                </Box>
            </Box>
        </Card>
    )
})

export default AssessmentCard
