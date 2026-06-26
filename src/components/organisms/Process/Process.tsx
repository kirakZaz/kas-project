import React, { useRef } from 'react'
import { Box, Typography, Card, useMediaQuery, useTheme } from '@mui/material'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useImageViewer } from '../../../context/ImageViewerContext'

// ─── Data ────────────────────────────────────────────────────────────────────

interface Sprint {
    name: string
    dates: string
    jira: string
    images: string[]
    description: string
}

const SPRINTS: Sprint[] = [
    {
        name: 'Sprint 1',
        dates: '1 – 7 Jun',
        jira: '/assets/sprints/sprint1-backlog.png',
        images: [
            '/assets/sketches/sketch-1.jpg',
            '/assets/blender/kas-3d-1.png',
            '/assets/character/kas-design-v1.png',
        ],
        description:
            'Character concept sketches, initial 3D modeling in Blender, double jump mechanic implementation, and first playable prototype.',
    },
    {
        name: 'Sprint 2',
        dates: '8 – 14 Jun',
        jira: '/assets/sprints/sprint2-iframe.png',
        images: [
            '/assets/blender/assets-overview-1.png',
            '/assets/textures/shield-3d.png',
            '/assets/textures/sword-3d.png',
        ],
        description:
            '3D asset creation (shield, sword, turret), sound effects production, I-Frame mechanic with orbiting shields, and mechanics documentation.',
    },
    {
        name: 'Sprint 3',
        dates: '15 – 21 Jun',
        jira: '/assets/sprints/sprint3-glide.png',
        images: [
            '/assets/sarah-work/sarah-1.png',
            '/assets/blender/kas-textured-1.png',
            '/assets/blender/turret-textured-1.png',
        ],
        description:
            'Character topology rework by Sarah, texturing all assets, glide mechanic implementation, VFX effects, and environment building.',
    },
    {
        name: 'Sprint 4',
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
                width: '100%',
                ...(wide
                    ? { maxHeight: 200, objectFit: 'contain', bgcolor: 'rgba(0,0,0,0.3)' }
                    : { aspectRatio: '4/3', objectFit: 'cover' }),
                borderRadius: '6px',
                border: `1px solid rgba(196,164,74,0.2)`,
                transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: GOLD_GLOW,
                    borderColor: GOLD,
                },
            }}
        />
    )
}

interface SprintCardProps {
    sprint: Sprint
    index: number
    isRight: boolean
}

const SprintCard: React.FC<SprintCardProps> = ({ sprint, index, isRight }) => {
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
            <Card
                sx={{
                    background: 'linear-gradient(135deg, rgba(18,15,10,0.95) 0%, rgba(28,22,12,0.95) 100%)',
                    border: `1px solid rgba(196,164,74,0.25)`,
                    borderRadius: '12px',
                    overflow: 'hidden',
                    backdropFilter: 'blur(8px)',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                        borderColor: `rgba(196,164,74,0.55)`,
                        boxShadow: `0 8px 40px rgba(196,164,74,0.12)`,
                    },
                }}
            >
                {/* Header */}
                <Box
                    sx={{
                        px: 3,
                        py: 2,
                        borderBottom: `1px solid rgba(196,164,74,0.2)`,
                        background: `linear-gradient(90deg, rgba(196,164,74,0.08) 0%, transparent 100%)`,
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: 2,
                        flexWrap: 'wrap',
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Cinzel, serif',
                            fontWeight: 700,
                            fontSize: { xs: '1rem', md: '1.15rem' },
                            color: GOLD,
                            letterSpacing: '0.08em',
                            textShadow: `0 0 8px rgba(196,164,74,0.5)`,
                        }}
                    >
                        {sprint.name}
                        {' — '}
                        <Box component="span" sx={{ fontWeight: 400 }}>
                            {/* Sprint subtitle derived from jira filename */}
                            {index === 0 && 'Init + Double Jump'}
                            {index === 1 && 'I-Frames'}
                            {index === 2 && 'Glide'}
                            {index === 3 && 'Assessment'}
                        </Box>
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Cinzel, serif',
                            fontSize: '0.78rem',
                            color: 'rgba(196,164,74,0.6)',
                            letterSpacing: '0.06em',
                        }}
                    >
                        {sprint.dates}
                    </Typography>
                </Box>

                <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                    {/* Jira screenshot */}
                    <Box>
                        <Typography
                            sx={{
                                fontFamily: 'Cinzel, serif',
                                fontSize: '0.7rem',
                                color: 'rgba(196,164,74,0.5)',
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                mb: 1,
                            }}
                        >
                            Jira Board
                        </Typography>
                        <SprintImage src={sprint.jira} alt={`${sprint.name} Jira board`} wide />
                    </Box>

                    {/* Work images */}
                    <Box>
                        <Typography
                            sx={{
                                fontFamily: 'Cinzel, serif',
                                fontSize: '0.7rem',
                                color: 'rgba(196,164,74,0.5)',
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                mb: 1,
                            }}
                        >
                            Work
                        </Typography>
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)',
                                gap: 1.5,
                            }}
                        >
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
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'rgba(255,255,255,0.72)',
                            lineHeight: 1.75,
                            fontSize: '0.9rem',
                            borderLeft: `2px solid rgba(196,164,74,0.35)`,
                            pl: 2,
                        }}
                    >
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
        <Box
            ref={ref}
            sx={{
                position: 'absolute',
                left: '50%',
                top: 0,
                bottom: 0,
                width: '2px',
                transform: 'translateX(-50%)',
                background: 'rgba(196,164,74,0.12)',
                zIndex: 0,
            }}
        >
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
            <Box
                ref={dotRef}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mb: 5,
                    position: 'relative',
                }}
            >
                {/* Mobile: dot on left, card full width */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        width: '100%',
                        gap: 2,
                    }}
                >
                    {/* Dot column */}
                    <Box sx={{ position: 'relative', width: 20, flexShrink: 0, mt: 2 }}>
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
                    <Box sx={{ flex: 1 }}>
                        <SprintCard sprint={sprint} index={index} isRight={false} />
                    </Box>
                </Box>
            </Box>
        )
    }

    return (
        <Box
            ref={dotRef}
            sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 48px 1fr',
                alignItems: 'center',
                mb: { md: 8 },
                position: 'relative',
                minHeight: '60px',
            }}
        >
            {/* Left slot */}
            <Box sx={{ pr: 3, display: 'flex', justifyContent: 'flex-end' }}>
                {!isRight && <SprintCard sprint={sprint} index={index} isRight={false} />}
            </Box>

            {/* Center dot */}
            <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', pt: 2 }}>
                <TimelineDot inView={dotInView} />
            </Box>

            {/* Right slot */}
            <Box sx={{ pl: 3, display: 'flex', justifyContent: 'flex-start' }}>
                {isRight && <SprintCard sprint={sprint} index={index} isRight={true} />}
            </Box>
        </Box>
    )
}

// ─── Main component ───────────────────────────────────────────────────────────

const Process: React.FC = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const timelineRef = useRef<HTMLDivElement>(null)

    return (
        <Box
            id="timeline"
            sx={{
                py: { xs: 8, md: 12 },
                px: { xs: 2, sm: 4, md: 6 },
                maxWidth: '1200px',
                mx: 'auto',
            }}
        >
            {/* Section heading */}
            <motion.div
                initial={{ opacity: 0, y: -24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] as const }}
            >
                <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
                    <Typography
                        component="h2"
                        sx={{
                            fontFamily: 'Cinzel, serif',
                            fontWeight: 900,
                            fontSize: { xs: '2rem', sm: '2.6rem', md: '3.2rem' },
                            color: GOLD,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            textShadow: GOLD_GLOW,
                            mb: 1.5,
                        }}
                    >
                        Development Timeline
                    </Typography>
                    <Box
                        sx={{
                            width: 80,
                            height: 2,
                            background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
                            mx: 'auto',
                            mb: 2,
                            boxShadow: GOLD_GLOW,
                        }}
                    />
                    <Typography
                        sx={{
                            fontFamily: 'Cinzel, serif',
                            fontSize: { xs: '0.85rem', md: '0.95rem' },
                            color: 'rgba(196,164,74,0.6)',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                        }}
                    >
                        4 Sprints · Iterative Prototyping · Agile Workflow
                    </Typography>
                </Box>
            </motion.div>

            {/* Timeline container */}
            <Box
                ref={timelineRef}
                sx={{
                    position: 'relative',
                    // On mobile, shift line to the left alongside dots
                    ...(isMobile && {
                        pl: '28px',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            left: '9px',
                            top: 0,
                            bottom: 0,
                            width: '2px',
                            background: `linear-gradient(180deg, ${GOLD} 0%, rgba(196,164,74,0.15) 100%)`,
                            boxShadow: GOLD_GLOW,
                        },
                    }),
                }}
            >
                {/* Desktop animated line */}
                {!isMobile && <AnimatedTimelineLine />}

                {SPRINTS.map((sprint, index) => (
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
