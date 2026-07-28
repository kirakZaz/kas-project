import React, { useRef } from 'react'
import { Box, Typography, Card, useMediaQuery, useTheme } from '@mui/material'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useImageViewer } from '../../../context/ImageViewerContext'
import { styles } from './Process.styles'

// ─── Data ────────────────────────────────────────────────────────────────────

export interface Sprint {
    name: string
    subtitle: string
    dates: string
    jira: string
    images: string[]
    description: string
}

const SPRINTS: Sprint[] = [
    {
        name: 'Sprint 1',
        subtitle: 'Init + Double Jump',
        dates: '1 – 7 Jun',
        jira: '/assets/sprints/sprint1-backlog.png',
        images: [
            '/assets/timeline1/tl1-1.png',
            '/assets/timeline1/tl1-2.jpg',
            '/assets/timeline1/tl1-3.png',
        ],
        description:
            'Character concept sketches, initial 3D modeling in Blender, double jump mechanic implementation, and first playable prototype.',
    },
    {
        name: 'Sprint 2',
        subtitle: 'I-Frames',
        dates: '8 – 14 Jun',
        jira: '/assets/sprints/sprint2-iframe.png',
        images: [
            '/assets/timeline2/tl2-1.png',
            '/assets/timeline2/tl2-2.png',
            '/assets/timeline2/tl2-3.png',
        ],
        description:
            '3D asset creation (shield, sword, turret), sound effects production, I-Frame mechanic with orbiting shields, and mechanics documentation.',
    },
    {
        name: 'Sprint 3',
        subtitle: 'Glide',
        dates: '15 – 21 Jun',
        jira: '/assets/sprints/sprint3-glide.png',
        images: [
            '/assets/timeline3/tl3-1.png',
            '/assets/timeline3/tl3-2.png',
            '/assets/timeline3/tl3-3.png',
        ],
        description:
            'Character topology rework by Sarah, texturing all assets, glide mechanic implementation, VFX effects, and environment building.',
    },
    {
        name: 'Sprint 4',
        subtitle: 'Assessment',
        dates: '22 – 28 Jun',
        jira: '/assets/sprints/sprint4-assessment.png',
        images: [
            '/assets/blender/kas-final-1.png',
            '/assets/screenshots/process-1.png',
            '/assets/blender/turret-textured-4.png',
        ],
        description:
            'Final polish, level design, materials setup in Unity, bug fixes, WebGL build, and website creation.',
    },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

const GOLD = '#c4a44a'
const GOLD_GLOW = '0 0 12px rgba(196,164,74,0.6), 0 0 24px rgba(196,164,74,0.3)'

interface SprintImageProps {
    src: string
    alt: string
    wide?: boolean
}

const SprintImage: React.FC<SprintImageProps> = ({ src, alt, wide }) => {
    const { openImage } = useImageViewer()
    return (
        <Box
            component="img"
            src={src}
            alt={alt}
            data-cursor="pointer"
            onClick={() => openImage(src, alt)}
            sx={{
                ...styles.sprintImageBase,
                ...(wide ? styles.sprintImageWide : styles.sprintImageThumb),
            }}
        />
    )
}

interface SprintCardProps {
    sprint: Sprint
    isRight: boolean
}

const SprintCard: React.FC<SprintCardProps> = ({ sprint, isRight }) => {
    const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

    const initial = { opacity: 0, x: isRight ? 60 : -60, y: 20 }
    const animate = inView ? { opacity: 1, x: 0, y: 0 } : initial

    return (
        <motion.div
            ref={ref}
            initial={initial}
            animate={animate}
            transition={{ duration: 0.65, ease: [0, 0, 0.2, 1] as const, delay: 0.05 }}
            style={{ width: '100%' }}
        >
            <Card sx={styles.sprintCard}>
                {/* Header */}
                <Box sx={styles.sprintCardHeader}>
                    <Typography sx={styles.sprintCardTitle}>
                        {sprint.name}
                        {' — '}
                        <Box component="span" sx={styles.sprintCardTitleSubSpan}>
                            {sprint.subtitle}
                        </Box>
                    </Typography>
                    <Typography sx={styles.sprintCardDates}>
                        {sprint.dates}
                    </Typography>
                </Box>

                <Box sx={styles.sprintCardBody}>
                    {/* Jira screenshot */}
                    <Box>
                        <Typography sx={styles.sprintCardSectionLabel}>
                            Jira Board
                        </Typography>
                        <SprintImage src={sprint.jira} alt={`${sprint.name} Jira board`} wide />
                    </Box>

                    {/* Work images */}
                    <Box>
                        <Typography sx={styles.sprintCardSectionLabel}>
                            Work
                        </Typography>
                        <Box sx={styles.sprintCardImageGrid}>
                            {sprint.images.map((img, i) => (
                                <SprintImage
                                    key={i}
                                    src={img}
                                    alt={`${sprint.name} work image ${i + 1}`}
                                />
                            ))}
                        </Box>
                    </Box>

                    {/* Description */}
                    <Typography variant="body2" sx={styles.sprintCardDescription}>
                        {sprint.description}
                    </Typography>
                </Box>
            </Card>
        </motion.div>
    )
}

// ─── Animated timeline dot ────────────────────────────────────────────────────

interface TimelineDotProps {
    inView: boolean
}

const TimelineDot: React.FC<TimelineDotProps> = ({ inView }) => (
    <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as const, delay: 0.1 }}
        style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: 18,
            height: 18,
            borderRadius: '50%',
            background: GOLD,
            boxShadow: GOLD_GLOW,
            zIndex: 3,
            flexShrink: 0,
        }}
    />
)

// ─── Animated line using scroll progress ──────────────────────────────────────

const AnimatedTimelineLine: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 85%', 'end 15%'],
    })
    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

    return (
        <Box ref={ref} sx={styles.timelineLineTrack}>
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(180deg, ${GOLD} 0%, rgba(196,164,74,0.4) 100%)`,
                    boxShadow: GOLD_GLOW,
                    transformOrigin: 'top',
                    scaleY,
                }}
            />
        </Box>
    )
}

// ─── Sprint row ───────────────────────────────────────────────────────────────

interface SprintRowProps {
    sprint: Sprint
    index: number
    isMobile: boolean
}

const SprintRow: React.FC<SprintRowProps> = ({ sprint, index, isMobile }) => {
    const isRight = index % 2 !== 0
    const { ref: dotRef, inView: dotInView } = useInView({ threshold: 0.5, triggerOnce: true })

    if (isMobile) {
        return (
            <Box ref={dotRef} sx={styles.sprintRowMobileOuter}>
                {/* Mobile: dot on left, card full width */}
                <Box sx={styles.sprintRowMobileInner}>
                    {/* Dot column */}
                    <Box sx={styles.sprintRowMobileDotCol}>
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={dotInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as const, delay: 0.1 }}
                            style={{
                                width: 14,
                                height: 14,
                                borderRadius: '50%',
                                background: GOLD,
                                boxShadow: GOLD_GLOW,
                            }}
                        />
                    </Box>
                    {/* Card */}
                    <Box sx={styles.sprintRowMobileCardCol}>
                        <SprintCard sprint={sprint} isRight={false} />
                    </Box>
                </Box>
            </Box>
        )
    }

    return (
        <Box ref={dotRef} sx={styles.sprintRowDesktopGrid}>
            {/* Left slot */}
            <Box sx={styles.sprintRowLeftSlot}>
                {!isRight && <SprintCard sprint={sprint} isRight={false} />}
            </Box>

            {/* Center dot */}
            <Box sx={styles.sprintRowCenterDot}>
                <TimelineDot inView={dotInView} />
            </Box>

            {/* Right slot */}
            <Box sx={styles.sprintRowRightSlot}>
                {isRight && <SprintCard sprint={sprint} isRight={true} />}
            </Box>
        </Box>
    )
}

// ─── Main component ───────────────────────────────────────────────────────────

interface ProcessProps {
    id?: string
    title?: string
    subtitle?: string
    sprints?: Sprint[]
}

const Process: React.FC<ProcessProps> = ({
    id = 'timeline',
    title = 'Development Timeline',
    subtitle = '4 Sprints · Iterative Prototyping · Agile Workflow',
    sprints = SPRINTS,
}) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const timelineRef = useRef<HTMLDivElement>(null)

    return (
        <Box id={id} sx={styles.processSection}>
            {/* Section heading */}
            <motion.div
                initial={{ opacity: 0, y: -24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] as const }}
            >
                <Box sx={styles.processHeadingBox}>
                    <Typography component="h2" sx={styles.processHeadingTitle}>
                        {title}
                    </Typography>
                    <Box sx={styles.processHeadingDivider} />
                    <Typography sx={styles.processHeadingSubtitle}>
                        {subtitle}
                    </Typography>
                </Box>
            </motion.div>

            {/* Timeline container */}
            <Box
                ref={timelineRef}
                sx={isMobile ? styles.timelineContainerMobile : styles.timelineContainerDesktop}
            >
                {/* Desktop animated line */}
                {!isMobile && <AnimatedTimelineLine />}

                {sprints.map((sprint, index) => (
                    <SprintRow
                        key={sprint.name}
                        sprint={sprint}
                        index={index}
                        isMobile={isMobile}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default Process
