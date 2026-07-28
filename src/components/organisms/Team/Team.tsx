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
import { styles } from './Team.styles'

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
            sx={styles.memberCard}
        >
            <CardContent sx={styles.memberCardContent}>
                <Box sx={styles.memberHeader}>
                    <Avatar sx={styles.avatar}>
                        {member.initials}
                    </Avatar>
                    <Box>
                        <Typography variant="h3" sx={styles.memberName}>
                            {member.name}
                        </Typography>
                        <Typography variant="body2" sx={styles.memberRole}>
                            {member.role}
                        </Typography>
                    </Box>
                </Box>

                <Box>
                    <Typography variant="overline" sx={styles.contributionsLabel}>
                        Contributions
                    </Typography>
                    <Box sx={styles.chipContainer}>
                        {member.contributions.map((c) => (
                            <Chip key={c} label={c} size="small" sx={styles.chip} />
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
            sx={styles.carouselWrapper}
        >
            <Box sx={styles.carouselHeaderBox}>
                <Typography variant="h4" sx={styles.carouselTitle}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={styles.carouselSubtitle}>
                    {subtitle}
                </Typography>
                <Box sx={styles.carouselDivider} />
            </Box>

            <SlideGallery itemWidth={{ xs: 260, sm: 300, md: 340 }}>
                {images.map((src, i) => (
                    <Box
                        key={i}
                        data-cursor="pointer"
                        onClick={() => openImage(src, `${altPrefix} ${i + 1}`)}
                        sx={styles.carouselImageBox}
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

interface CarouselData {
    title: string
    subtitle: string
    images: string[]
    altPrefix: string
}

const DEFAULT_CAROUSELS: CarouselData[] = [
    {
        title: "Sarah's Modeling Process",
        subtitle: 'Character topology, rigging, and animation work in Blender',
        images: SARAH_IMAGES,
        altPrefix: 'Sarah work',
    },
    {
        title: 'Team Iterations',
        subtitle: 'Discord communication & collaboration throughout development',
        images: CHAT_IMAGES,
        altPrefix: 'Team chat',
    },
]

interface TeamProps {
    id?: string
    title?: string
    subtitle?: string
    members?: TeamMember[]
    carousels?: CarouselData[]
}

const Team = React.memo(function Team({
    id = 'team',
    title = 'Team & Collaboration',
    subtitle = 'Team KAS — Torrens University RGP204',
    members = MEMBERS,
    carousels = DEFAULT_CAROUSELS,
}: TeamProps) {
    return (
        <Box id={id} sx={styles.section}>
            <SectionTitle
                title={title}
                subtitle={subtitle}
            />

            <Grid container spacing={3} sx={styles.grid}>
                {members.map((member, index) => (
                    <Grid key={member.name} size={{ xs: 12, sm: 6, md: 4 }}>
                        <MemberCard member={member} index={index} />
                    </Grid>
                ))}
            </Grid>

            {carousels.map((carousel) => (
                <ImageCarousel
                    key={carousel.title}
                    title={carousel.title}
                    subtitle={carousel.subtitle}
                    images={carousel.images}
                    altPrefix={carousel.altPrefix}
                />
            ))}
        </Box>
    )
})

export default Team
