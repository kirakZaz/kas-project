import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { motion } from 'framer-motion'
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded'
import { styles } from './Hero.styles'

interface HeroProps {
    onPlayClick: () => void
}

const MotionBox = motion.create(Box)
const MotionTypography = motion.create(Typography)

const Hero = React.memo(function Hero({ onPlayClick }: HeroProps) {
    return (
        <Box
            id="home"
            sx={styles.root}
        >
            {/* Radial gradient background */}
            <Box sx={styles.radialBackground} />

            {/* Animated Kas image */}
            <MotionBox
                initial={{ opacity: 0, y: -120, scale: 0.7 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                sx={styles.kasImageWrapper}
            >
                <Box
                    component="img"
                    src="/assets/blender/kas-final-1.png"
                    alt="Kas Character"
                    sx={styles.kasImage}
                />
            </MotionBox>

            {/* Title - KAS with glow */}
            <MotionTypography
                variant="h1"
                initial={{ opacity: 0, scale: 0.5, letterSpacing: '0.6em' }}
                animate={{ opacity: 1, scale: 1, letterSpacing: '0.12em' }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                sx={styles.title}
            >
                KAS
            </MotionTypography>

            {/* Decorative line */}
            <MotionBox
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 120, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                sx={styles.decorativeLine}
            />

            {/* Subtitle */}
            <MotionTypography
                variant="h3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                sx={styles.subtitle}
            >
                A Gothic 3D Platformer
            </MotionTypography>

            {/* Description */}
            <MotionTypography
                variant="body1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.0 }}
                sx={styles.description}
            >
                Guide Kas through a dark gothic world filled with deadly traps,
                ancient turrets, and mysterious architecture. Glide through the air
                with feathered wings and fight to survive.
            </MotionTypography>

            {/* CTA Button */}
            <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.3 }}
                sx={styles.ctaWrapper}
            >
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<SportsEsportsRoundedIcon />}
                    onClick={onPlayClick}
                    data-cursor="pointer"
                    sx={styles.ctaButton}
                >
                    Play Now
                </Button>
            </MotionBox>

            {/* Scroll indicator */}
            <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                sx={styles.scrollIndicator}
            >
                <Typography variant="body2" sx={styles.scrollLabel}>
                    Scroll to explore
                </Typography>
                <Box sx={styles.scrollLine} />
            </MotionBox>
        </Box>
    )
})

export default Hero
