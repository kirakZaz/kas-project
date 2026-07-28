import React from 'react'
import { Card, Typography, Box, Chip } from '@mui/material'
import { useTilt } from '../../../hooks/useTilt'
import { initials, splitList } from '../../../utils/text'
import type { TeamCardProps } from './TeamCard.types'
import { styles } from './TeamCard.styles'

const TeamCard = React.memo(function TeamCard({ member }: TeamCardProps) {
    const { ref, handleMouseMove, handleMouseLeave } = useTilt(5)
    const contributions = splitList(member.contributions)

    return (
        <Card ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} sx={styles.card}>
            <Box sx={styles.header}>
                <Box sx={styles.avatar}>{initials(member.name)}</Box>
                <Box sx={styles.identity}>
                    <Typography sx={styles.name}>{member.name}</Typography>
                    <Typography sx={styles.role}>{member.role}</Typography>
                </Box>
            </Box>
            {contributions.length > 0 && (
                <Box sx={styles.chips}>
                    {contributions.map((item) => (
                        <Chip key={item} label={item} size="small" sx={styles.chip} />
                    ))}
                </Box>
            )}
        </Card>
    )
})

export default TeamCard
