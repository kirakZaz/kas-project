import React from 'react'
import { Card, Typography, Box } from '@mui/material'
import { useTilt } from '../../../hooks/useTilt'
import type { FeatureCardProps } from './FeatureCard.types'
import { styles } from './FeatureCard.styles'

const FeatureCard = React.memo(function FeatureCard({ item }: FeatureCardProps) {
    const { ref, handleMouseMove, handleMouseLeave } = useTilt(6)
    return (
        <Card ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} sx={styles.card}>
            <Typography sx={styles.title}>{item.title}</Typography>
            <Typography sx={styles.description}>{item.description}</Typography>
            {item.points && item.points.length > 0 && (
                <Box component="ul" sx={styles.list}>
                    {item.points.map((point) => (
                        <Box component="li" key={point} sx={styles.listItem}>{point}</Box>
                    ))}
                </Box>
            )}
        </Card>
    )
})

export default FeatureCard
