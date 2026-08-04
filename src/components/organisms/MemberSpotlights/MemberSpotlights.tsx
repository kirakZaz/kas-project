import React from 'react'
import { Box, Typography, Chip, Tabs, Tab } from '@mui/material'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '../../atoms/SectionTitle/SectionTitle'
import SlideGallery from '../../atoms/SlideGallery/SlideGallery'
import { useImageViewer } from '../../../context/ImageViewerContext'
import { styles } from './MemberSpotlights.styles'

// ─── Data model ───────────────────────────────────────────────────────────────
// One tab per team member. Each tab carries that member's own header and a single
// carousel holding ALL of their media — the lists are deliberately uneven, since
// each member owned a different slice of the prototype. Add more by dropping a
// file in /public/assets/a2/members/<name>/ and appending an entry to `media`.

export interface SpotlightMedia {
    src: string
    caption: string
    /** how the image sits in its card — 'contain' for transparent renders */
    fit?: 'cover' | 'contain'
}

export interface SpotlightMember {
    name: string
    role: string
    accent: string
    lead: string
    focus: string[]
    /** optional gameplay clip, shown as the first card in the carousel */
    video?: { src: string; title: string }
    media: SpotlightMedia[]
}

const MotionDiv = motion.div

// ─── Image card ───────────────────────────────────────────────────────────────

function ImageCard({ media, accent }: { media: SpotlightMedia; accent: string }) {
    const { openImage } = useImageViewer()
    const fit = media.fit ?? 'cover'
    return (
        <Box
            data-cursor="pointer"
            onClick={() => openImage(media.src, media.caption)}
            sx={styles.card(accent)}
        >
            <Box sx={styles.cardMediaBox}>
                <Box
                    component="img"
                    src={media.src}
                    alt={media.caption}
                    loading="lazy"
                    sx={styles.cardImg(fit, fit === 'contain')}
                />
            </Box>
            <Box sx={styles.cardContent}>
                <Typography variant="body2" sx={styles.cardTitle}>
                    {media.caption}
                </Typography>
            </Box>
        </Box>
    )
}

// ─── Video card (leads the carousel when a member has a clip) ─────────────────

function VideoCard({ video, accent }: { video: { src: string; title: string }; accent: string }) {
    const { openVideo } = useImageViewer()
    return (
        <Box
            data-cursor="pointer"
            onClick={() => openVideo(video.src, video.title)}
            sx={styles.card(accent)}
        >
            <Box sx={styles.videoBadge(accent)}>
                <PlayArrowRoundedIcon /> Video
            </Box>
            <Box sx={styles.cardMediaBox}>
                <Box
                    component="video"
                    src={video.src}
                    muted
                    loop
                    autoPlay
                    playsInline
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', pointerEvents: 'none' }}
                />
            </Box>
            <Box sx={styles.cardContent}>
                <Typography variant="body2" sx={styles.cardTitle}>
                    {video.title}
                </Typography>
            </Box>
        </Box>
    )
}

// ─── Member panel (header + full carousel) ────────────────────────────────────

function MemberPanel({ member }: { member: SpotlightMember }) {
    const count = member.media.length + (member.video ? 1 : 0)
    return (
        <Box>
            <Box sx={styles.header}>
                <Typography component="span" sx={styles.role(member.accent)}>
                    {member.role}
                </Typography>
                <Typography variant="h3" sx={styles.name(member.accent)}>
                    {member.name}
                </Typography>
                <Typography sx={styles.lead}>{member.lead}</Typography>
                <Box sx={styles.focusRow}>
                    {member.focus.map((f) => (
                        <Chip key={f} label={f} size="small" sx={styles.focusChip(member.accent)} />
                    ))}
                </Box>
            </Box>

            <Typography sx={styles.countTag}>{count} items — scroll to explore →</Typography>

            <SlideGallery itemWidth={{ xs: 260, sm: 300, md: 340 }}>
                {member.video && <VideoCard video={member.video} accent={member.accent} />}
                {member.media.map((m) => (
                    <ImageCard key={m.src} media={m} accent={member.accent} />
                ))}
            </SlideGallery>
        </Box>
    )
}

// ─── Section ──────────────────────────────────────────────────────────────────

interface MemberSpotlightsProps {
    id?: string
    title?: string
    subtitle?: string
    members: SpotlightMember[]
}

const MemberSpotlights = React.memo(function MemberSpotlights({
    id = 'contributions',
    title = 'Individual Contributions',
    subtitle = 'Three people, three disciplines — how the prototype came together',
    members,
}: MemberSpotlightsProps) {
    const [active, setActive] = React.useState(0)
    const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })

    const handleChange = React.useCallback((_: React.SyntheticEvent, value: number) => {
        setActive(value)
    }, [])

    const current = members[active]
    const accent = current?.accent ?? '#c4a44a'

    return (
        <Box
            id={id}
            ref={ref}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as const }}
            sx={styles.section}
        >
            <SectionTitle title={title} subtitle={subtitle} />

            <Box sx={styles.tabsBarBox}>
                <Tabs
                    value={active}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    allowScrollButtonsMobile
                    sx={styles.tabs(accent)}
                >
                    {members.map((m, i) => (
                        <Tab key={m.name} label={m.name} id={`member-tab-${i}`} sx={styles.tab(m.accent)} />
                    ))}
                </Tabs>
            </Box>

            <AnimatePresence mode="wait">
                <MotionDiv
                    key={active}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                >
                    {current && <MemberPanel member={current} />}
                </MotionDiv>
            </AnimatePresence>
        </Box>
    )
})

export default MemberSpotlights
