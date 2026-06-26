import React from 'react'
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Avatar,
    Chip,
} from '@mui/material'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '../../atoms/SectionTitle/SectionTitle'
import SlideGallery from '../../atoms/SlideGallery/SlideGallery'
import { useImageViewer } from '../../../context/ImageViewerContext'

const GOLD = '#c4a44a'
const GOLD_DIM = 'rgba(196, 164, 74, 0.15)'
const GOLD_BORDER = 'rgba(196, 164, 74, 0.3)'
const CARD_BG = 'rgba(10, 8, 5, 0.85)'

interface TeamMember {
    name: string
    initials: string
    role: string
    contributions: string[]
}

const MEMBERS: TeamMember[] = [
    {
        name: 'Kira Zakirov',
        initials: 'KZ',
        role: 'Lead Developer & Technical Artist',
        contributions: [
            'All game mechanics — Double Jump, I-Frames, Glide',
            'Unity C# programming & integration',
            'Level design, layout & scene building',
            'UI system & HUD implementation',
            'Texture application & materials setup',
            'Sound implementation in Unity',
            'WebGL build & deployment',
            'Website development',
        ],
    },
    {
        name: 'Sarah Assiri',
        initials: 'SA',
        role: '3D Artist, Animator & Level Designer',
        contributions: [
            'Kas character modeling & topology rework (43k to 609 tris)',
            'Character rigging & all animation clips',
            'Enemy concept art (Reapers, Creatures, Angel)',
            'Level design & layout',
            'Texturing for map & assets',
            'VFX particle effects',
            'Health feather models for UI',
        ],
    },
    {
        name: 'Alexander Ramic',
        initials: 'AR',
        role: 'Game Designer, 3D Modeller & Sound Designer',
        contributions: [
            'Game mechanic design documents (Double Jump, I-Frames, Glide)',
            '3D asset modeling (shield, sword, turrets)',
            'Character design concepts & iterations',
            'Environment & character moodboards',
            'Sound effects — blade, shield, damage, jump',
            'Team coordination & sprint planning',
        ],
    },
]

const CHAT_IMAGES = Array.from(
    { length: 18 },
    (_, i) => `/assets/team-chat/chat-${i + 1}.png`
)

const SARAH_IMAGES = Array.from(
    { length: 8 },
    (_, i) => `/assets/sarah-work/sarah-${i + 1}.png`
)

const MotionBox = motion.create(Box)
const MotionCard = motion.create(Card)

function useFadeInWhenVisible(threshold = 0.15) {
    const controls = useAnimation()
    const { ref, inView } = useInView({ threshold, triggerOnce: true })
    React.useEffect(() => {
        if (inView) controls.start('visible')
    }, [inView, controls])
    return { ref, controls }
}

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.15, ease: [0, 0, 0.2, 1] as const },
    }),
}

interface MemberCardProps {
    member: TeamMember
    index: number
}

const MemberCard: React.FC<MemberCardProps> = ({ member, index }) => {
    const { ref, controls } = useFadeInWhenVisible(0.1)

    return (
        <MotionCard
            ref={ref}
            custom={index}
            initial="hidden"
            animate={controls}
            variants={fadeUp}
            sx={{
                background: CARD_BG,
                border: `1px solid ${GOLD_BORDER}`,
                borderRadius: 2,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                backdropFilter: 'blur(8px)',
                transition: 'border-color 0.3s, box-shadow 0.3s',
                '&:hover': {
                    borderColor: GOLD,
                    boxShadow: `0 0 24px rgba(196, 164, 74, 0.2)`,
                },
            }}
        >
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    p: 3,
                    flex: 1,
                }}
            >
                {/* Header */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar
                        sx={{
                            width: 56,
                            height: 56,
                            bgcolor: GOLD_DIM,
                            border: `2px solid ${GOLD}`,
                            color: GOLD,
                            fontFamily: "'Cinzel', serif",
                            fontWeight: 700,
                            fontSize: '1.1rem',
                        }}
                    >
                        {member.initials}
                    </Avatar>
                    <Box>
                        <Typography
                            variant="h3"
                            sx={{
                                fontFamily: "'Cinzel', serif",
                                fontSize: '1.15rem',
                                fontWeight: 700,
                                color: GOLD,
                                lineHeight: 1.2,
                            }}
                        >
                            {member.name}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'rgba(255,255,255,0.55)',
                                fontSize: '0.78rem',
                                fontStyle: 'italic',
                                mt: 0.25,
                            }}
                        >
                            {member.role}
                        </Typography>
                    </Box>
                </Box>

                {/* Contributions */}
                <Box>
                    <Typography
                        variant="overline"
                        sx={{
                            color: GOLD,
                            fontSize: '0.65rem',
                            letterSpacing: '0.12em',
                            display: 'block',
                            mb: 1,
                        }}
                    >
                        Contributions
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                        {member.contributions.map((c) => (
                            <Chip
                                key={c}
                                label={c}
                                size="small"
                                sx={{
                                    bgcolor: GOLD_DIM,
                                    color: 'rgba(255,255,255,0.85)',
                                    border: `1px solid ${GOLD_BORDER}`,
                                    fontSize: '0.7rem',
                                    height: 24,
                                    '& .MuiChip-label': { px: 1 },
                                }}
                            />
                        ))}
                    </Box>
                </Box>

            </CardContent>
        </MotionCard>
    )
}

interface ImageCarouselProps {
    title: string
    subtitle: string
    images: string[]
    altPrefix: string
}

function ImageCarousel({ title, subtitle, images, altPrefix }: ImageCarouselProps) {
    const { ref: sectionRef, controls } = useFadeInWhenVisible(0.1)
    const { openImage } = useImageViewer()

    return (
        <MotionBox
            ref={sectionRef}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0, 0, 0.2, 1] as const } },
            }}
            sx={{ mt: 6 }}
        >
            <Box sx={{ mb: 3 }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: "'Cinzel', serif",
                        color: GOLD,
                        fontSize: { xs: '1.1rem', md: '1.35rem' },
                        fontWeight: 600,
                        mb: 0.5,
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem' }}
                >
                    {subtitle}
                </Typography>
                <Box sx={{ mt: 1.5, width: 48, height: 2, bgcolor: GOLD, borderRadius: 1 }} />
            </Box>

            <SlideGallery itemWidth={{ xs: 260, sm: 300, md: 340 }}>
                {images.map((src, i) => (
                    <Box
                        key={i}
                        data-cursor="pointer"
                        onClick={() => openImage(src, `${altPrefix} ${i + 1}`)}
                        sx={{
                            height: { xs: 180, sm: 210, md: 240 },
                            borderRadius: 2,
                            overflow: 'hidden',
                            border: `1px solid ${GOLD_BORDER}`,
                            bgcolor: 'rgba(0,0,0,0.5)',
                            transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                borderColor: GOLD,
                                transform: 'scale(1.03)',
                                boxShadow: '0 0 18px rgba(196,164,74,0.25)',
                            },
                        }}
                    >
                        <img
                            src={src}
                            alt={`${altPrefix} ${i + 1}`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                                pointerEvents: 'none',
                            }}
                        />
                    </Box>
                ))}
            </SlideGallery>
        </MotionBox>
    )
}

const Team = React.memo(function Team() {
    return (
        <Box
            id="team"
            sx={{
                py: { xs: 8, md: 12 },
                px: { xs: 2, sm: 4, md: 8 },
                position: 'relative',
                background:
                    'linear-gradient(180deg, rgba(5,4,2,0) 0%, rgba(8,6,3,0.6) 100%)',
            }}
        >
            <SectionTitle
                title="Team & Collaboration"
                subtitle="Team KAS — Torrens University RGP204"
            />

            <Grid container spacing={3} sx={{ mt: 2 }}>
                {MEMBERS.map((member, index) => (
                    <Grid
                        key={member.name}
                        size={{ xs: 12, sm: 6, md: 4 }}
                    >
                        <MemberCard member={member} index={index} />
                    </Grid>
                ))}
            </Grid>

            <ImageCarousel
                title="Sarah's Modeling Process"
                subtitle="Character topology, rigging, and animation work in Blender"
                images={SARAH_IMAGES}
                altPrefix="Sarah work"
            />

            <ImageCarousel
                title="Team Iterations"
                subtitle="Discord communication & collaboration throughout development"
                images={CHAT_IMAGES}
                altPrefix="Team chat"
            />
        </Box>
    )
})

export default Team
