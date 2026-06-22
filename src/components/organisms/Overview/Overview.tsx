import React from 'react'
import { Box, Card, CardContent, Typography, Grid } from '@mui/material'
import SectionTitle from '../../atoms/SectionTitle/SectionTitle'
import { styles } from './Overview.styles'

const FEATURES = [
    {
        title: 'Combat & Traps',
        description: 'Navigate through spinning blade traps and dodge projectiles fired from gothic turrets.'
    },
    {
        title: 'Glide System',
        description: 'Double jump and hold to glide — soar through the air with Kas\'s feathered wings.'
    },
    {
        title: 'Gothic World',
        description: 'Explore a dark world of stained glass, bleeding stone, and ancient architecture.'
    }
]

const Overview = React.memo(function Overview() {
    return (
        <Box id="overview" sx={styles.section}>
            <SectionTitle
                title="Overview"
                subtitle="A 3D platformer set in a dark gothic world"
            />
            <Grid container spacing={3} sx={styles.grid}>
                {FEATURES.map((feature) => (
                    <Grid size={{ xs: 12, md: 4 }} key={feature.title}>
                        <Card sx={styles.card}>
                            <CardContent>
                                <Typography variant="h3" sx={styles.cardTitle}>
                                    {feature.title}
                                </Typography>
                                <Typography variant="body2" sx={styles.cardDesc}>
                                    {feature.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
})

export default Overview
