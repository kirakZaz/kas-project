import React from 'react'
import { Typography, Box } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { styles } from './SectionTitle.styles'

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
        <Box ref={ref} sx={styles.wrapper}>
            {/* Title */}
            <MotionTypography
                variant="h2"
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                sx={styles.title}
            >
                {title}
            </MotionTypography>

            {/* Decorative line with center diamond */}
            <MotionBox
                variants={lineExpand}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                sx={styles.decorLine}
            >
                {/* Left segment */}
                <Box sx={styles.decorLineLeft} />
                {/* Right segment */}
                <Box sx={styles.decorLineRight} />
                {/* Diamond */}
                <Box sx={styles.diamond} />
            </MotionBox>

            {/* Subtitle */}
            {subtitle && (
                <MotionTypography
                    variant="body1"
                    custom={0.15}
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    sx={styles.subtitle}
                >
                    {subtitle}
                </MotionTypography>
            )}
        </Box>
    )
})

export default SectionTitle
