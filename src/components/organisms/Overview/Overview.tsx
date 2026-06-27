import React from 'react'
import { Box, Typography, Grid, Card, CardContent } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '../../atoms/SectionTitle/SectionTitle'
import { styles, getMechCardSx, getMechTitleSx } from './Overview.styles'

const MotionCard = motion.create(Card)

const MECHANICS = [
    {
        title: 'Double Jump',
        description: 'Leap through gothic spires with a powerful double jump, designed with precise physics for tight platforming.',
        icon: '/assets/ui/jump-indicator.png',
        color: '#c4a44a',
    },
    {
        title: 'Glide',
        description: 'Spread feathered wings to glide across vast chasms. Control your descent and reach distant platforms.',
        icon: '/assets/ui/feather.png',
        color: '#00e5ff',
    },
    {
        title: 'I-Frames',
        description: 'Time your shields perfectly to become invulnerable. Four glass shields orbit Kas during the invincibility window.',
        icon: '/assets/textures/shield-3d.png',
        color: '#e54040',
    },
]

const Overview = React.memo(function Overview() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

    return (
        <Box id="about" ref={ref} sx={styles.section}>
            <SectionTitle
                title="About the Game"
                subtitle="A gothic 3D platformer built with Unity, featuring hand-crafted assets and unique mechanics"
            />

            <Typography variant="body1" sx={styles.description}>
                KAS is a rapid prototype developed over 4 weeks in a team of 3. The game follows
                a bird-like creature named Kas through a dark, gothic world. Every asset — from
                character models to textures and sound effects — was created from scratch.
            </Typography>

            <Grid container spacing={4}>
                {MECHANICS.map((mech, i) => (
                    <Grid size={{ xs: 12, md: 4 }} key={mech.title}>
                        <MotionCard
                            initial={{ opacity: 0, y: 60 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                            data-cursor="pointer"
                            sx={getMechCardSx(mech.color)}
                        >
                            <CardContent sx={styles.cardContent}>
                                <Box
                                    component="img"
                                    className="mech-icon"
                                    src={mech.icon}
                                    alt={mech.title}
                                    sx={styles.mechIcon}
                                />
                                <Typography variant="h4" sx={getMechTitleSx(mech.color)}>
                                    {mech.title}
                                </Typography>
                                <Typography variant="body2" sx={styles.mechDescription}>
                                    {mech.description}
                                </Typography>
                            </CardContent>
                        </MotionCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
})

export default Overview
