import React from 'react'
import { Typography, Box } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface SectionTitleProps {
    title: string
    subtitle?: string
}

const MotionBox = motion.create(Box)
const MotionTypography = motion.create(Typography)

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
            delay,
        },
    }),
}

const lineExpand = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
        scaleX: 1,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
            delay: 0.35,
        },
    },
}

const SectionTitle = React.memo(function SectionTitle({ title, subtitle }: SectionTitleProps) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 })

    return (
        <Box
            ref={ref}
            sx={{
                textAlign: 'center',
                mb: 6,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1.5,
            }}
        >
            {/* Title */}
            <MotionTypography
                variant="h2"
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                sx={{
                    fontFamily: "'Cinzel', serif",
                    color: '#c4a44a',
                    fontSize: { xs: '1.8rem', sm: '2.4rem', md: '2.8rem' },
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textShadow:
                        '0 0 12px rgba(196,164,74,0.55), 0 0 28px rgba(196,164,74,0.25)',
                    lineHeight: 1.2,
                    m: 0,
                }}
            >
                {title}
            </MotionTypography>

            {/* Decorative line with center diamond */}
            <MotionBox
                variants={lineExpand}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                sx={{
                    position: 'relative',
                    width: '60px',
                    height: '2px',
                    transformOrigin: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/* Left segment */}
                <Box
                    sx={{
                        position: 'absolute',
                        left: 0,
                        right: '50%',
                        top: 0,
                        height: '2px',
                        background:
                            'linear-gradient(to right, rgba(196,164,74,0.2), rgba(196,164,74,0.9))',
                        mr: '6px',
                    }}
                />
                {/* Right segment */}
                <Box
                    sx={{
                        position: 'absolute',
                        left: '50%',
                        right: 0,
                        top: 0,
                        height: '2px',
                        background:
                            'linear-gradient(to left, rgba(196,164,74,0.2), rgba(196,164,74,0.9))',
                        ml: '6px',
                    }}
                />
                {/* Diamond */}
                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 1,
                        width: '8px',
                        height: '8px',
                        backgroundColor: '#c4a44a',
                        transform: 'rotate(45deg)',
                        boxShadow: '0 0 6px rgba(196,164,74,0.7)',
                        flexShrink: 0,
                    }}
                />
            </MotionBox>

            {/* Subtitle */}
            {subtitle && (
                <MotionTypography
                    variant="body1"
                    custom={0.15}
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    sx={{
                        fontFamily: "'Raleway', sans-serif",
                        color: '#8a8580',
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' },
                        fontWeight: 400,
                        letterSpacing: '0.04em',
                        maxWidth: '560px',
                        lineHeight: 1.7,
                        mt: 0.5,
                    }}
                >
                    {subtitle}
                </MotionTypography>
            )}
        </Box>
    )
})

export default SectionTitle
