import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { motion } from 'framer-motion'
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded'

interface HeroProps {
    onPlayClick: () => void
}

const MotionBox = motion.create(Box)
const MotionTypography = motion.create(Typography)

const Hero = React.memo(function Hero({ onPlayClick }: HeroProps) {
    return (
        <Box
            id="home"
            sx={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                textAlign: 'center',
                px: 3,
            }}
        >
            {/* Radial gradient background */}
            <Box sx={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse at 50% 30%, rgba(196,164,74,0.06) 0%, transparent 60%), radial-gradient(ellipse at 50% 80%, rgba(0,229,255,0.03) 0%, transparent 50%)',
                pointerEvents: 'none',
            }} />

            {/* Animated Kas image */}
            <MotionBox
                initial={{ opacity: 0, y: -120, scale: 0.7 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                sx={{ mb: 3, position: 'relative', zIndex: 2 }}
            >
                <Box
                    component="img"
                    src="/assets/blender/kas-final-1.png"
                    alt="Kas Character"
                    sx={{
                        width: { xs: 220, md: 320 },
                        height: 'auto',
                        filter: 'drop-shadow(0 0 40px rgba(0,229,255,0.3)) drop-shadow(0 20px 60px rgba(0,0,0,0.6))',
                        animation: 'heroFloat 4s ease-in-out infinite',
                        '@keyframes heroFloat': {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-16px)' },
                        },
                    }}
                />
            </MotionBox>

            {/* Title - KAS with glow */}
            <MotionTypography
                variant="h1"
                initial={{ opacity: 0, scale: 0.5, letterSpacing: '0.6em' }}
                animate={{ opacity: 1, scale: 1, letterSpacing: '0.12em' }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                sx={{
                    fontFamily: '"Cinzel", serif',
                    fontSize: 'clamp(4rem, 12vw, 8rem)',
                    fontWeight: 900,
                    color: '#c4a44a',
                    textShadow: '0 0 60px rgba(196,164,74,0.5), 0 0 120px rgba(196,164,74,0.2), 0 4px 20px rgba(0,0,0,0.8)',
                    position: 'relative',
                    zIndex: 2,
                    lineHeight: 1,
                    mb: 1,
                }}
            >
                KAS
            </MotionTypography>

            {/* Decorative line */}
            <MotionBox
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 120, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                sx={{
                    height: 2,
                    background: 'linear-gradient(90deg, transparent, #c4a44a, transparent)',
                    mb: 2,
                    position: 'relative',
                    zIndex: 2,
                }}
            />

            {/* Subtitle */}
            <MotionTypography
                variant="h3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                sx={{
                    fontFamily: '"Cinzel", serif',
                    color: '#8a8580',
                    fontWeight: 400,
                    letterSpacing: '0.15em',
                    mb: 3,
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                A Gothic 3D Platformer
            </MotionTypography>

            {/* Description */}
            <MotionTypography
                variant="body1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.0 }}
                sx={{
                    maxWidth: 560,
                    color: '#6a6560',
                    mb: 5,
                    position: 'relative',
                    zIndex: 2,
                    lineHeight: 1.9,
                }}
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
                sx={{ position: 'relative', zIndex: 2 }}
            >
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<SportsEsportsRoundedIcon />}
                    onClick={onPlayClick}
                    data-cursor="pointer"
                    sx={{
                        px: 5, py: 1.8,
                        fontSize: '1rem',
                        animation: 'pulseGlow 2s ease-in-out infinite',
                        '@keyframes pulseGlow': {
                            '0%, 100%': { boxShadow: '0 0 20px rgba(196,164,74,0.3)' },
                            '50%': { boxShadow: '0 0 40px rgba(196,164,74,0.6), 0 0 80px rgba(196,164,74,0.2)' },
                        },
                    }}
                >
                    Play Now
                </Button>
            </MotionBox>

            {/* Scroll indicator */}
            <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                sx={{
                    position: 'absolute',
                    bottom: 40,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                    zIndex: 2,
                }}
            >
                <Typography variant="body2" sx={{ color: '#4a4540', letterSpacing: '0.2em', fontSize: '0.7rem', textTransform: 'uppercase' }}>
                    Scroll to explore
                </Typography>
                <Box sx={{
                    width: 1.5, height: 30,
                    background: 'linear-gradient(to bottom, #c4a44a, transparent)',
                    animation: 'scrollPulse 2s ease-in-out infinite',
                    '@keyframes scrollPulse': {
                        '0%, 100%': { opacity: 0.3, height: 30 },
                        '50%': { opacity: 0.7, height: 40 },
                    },
                }} />
            </MotionBox>
        </Box>
    )
})

export default Hero
