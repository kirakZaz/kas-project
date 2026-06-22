import React from 'react'
import { Box, Grid, Card, CardContent, Typography, Avatar } from '@mui/material'
import SectionTitle from '../../atoms/SectionTitle/SectionTitle'
import { styles } from './Team.styles'

const MEMBERS = [
    {
        name: 'Kira Zakirov',
        role: 'Programming & Web Development',
        initials: 'KZ'
    },
    {
        name: 'Sarah Assiri',
        role: '3D Modeling & Texturing',
        initials: 'SA'
    },
    {
        name: 'Alexander Ramic',
        role: 'Game Design & 3D Modeling',
        initials: 'AR'
    }
]

const Team = React.memo(function Team() {
    return (
        <Box id="team" sx={styles.section}>
            <SectionTitle
                title="Team"
                subtitle="Team KAS — Torrens University RGP204"
            />
            <Grid container spacing={3} sx={styles.grid}>
                {MEMBERS.map((member) => (
                    <Grid size={{ xs: 12, sm: 4 }} key={member.name}>
                        <Card sx={styles.card}>
                            <CardContent sx={styles.cardContent}>
                                <Avatar sx={styles.avatar}>
                                    {member.initials}
                                </Avatar>
                                <Typography variant="h3" sx={styles.name}>
                                    {member.name}
                                </Typography>
                                <Typography variant="body2" sx={styles.role}>
                                    {member.role}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
})

export default Team
