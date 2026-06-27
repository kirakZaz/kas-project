import React from 'react'
import { Box, Typography, Card, CardMedia, CardContent, Tabs, Tab } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '../../atoms/SectionTitle/SectionTitle'
import SlideGallery from '../../atoms/SlideGallery/SlideGallery'
import { useImageViewer } from '../../../context/ImageViewerContext'

// ─── Tab data ────────────────────────────────────────────────────────────────

interface ConceptItem {
    title: string
    image: string
}

interface ConceptTab {
    label: string
    items: ConceptItem[]
}

const TABS: ConceptTab[] = [
    {
        label: 'Character',
        items: [
            // kas-char-1 = Animations Guide
            { title: 'Kas Animations Guide', image: '/assets/character/kas-char-1.png' },
            // kas-char-2 = Design Done Alt
            { title: 'Kas Design — Alt', image: '/assets/character/kas-char-2.png' },
            // kas-char-3..8 = Blender 3D untextured (various angles)
            { title: 'Kas 3D — Side View', image: '/assets/character/kas-char-3.png' },
            { title: 'Kas 3D — Back View', image: '/assets/character/kas-char-4.png' },
            { title: 'Kas 3D — T-Pose', image: '/assets/character/kas-char-5.png' },
            { title: 'Kas 3D — Front Detail', image: '/assets/character/kas-char-6.png' },
            { title: 'Kas 3D — Close Up', image: '/assets/character/kas-char-7.png' },
            { title: 'Kas 3D — Angle View', image: '/assets/character/kas-char-8.png' },
            // kas-char-9 = Blender animation setup (walk)
            { title: 'Blender — Walk Animation', image: '/assets/character/kas-char-9.png' },
            // kas-char-10 = Blender animation list (jump wing)
            { title: 'Blender — Animation List', image: '/assets/character/kas-char-10.png' },
            // kas-char-11..16 = More Blender work screenshots
            { title: 'Blender — Rigging', image: '/assets/character/kas-char-11.png' },
            { title: 'Blender — Topology', image: '/assets/character/kas-char-12.png' },
            { title: 'Blender — Close Detail', image: '/assets/character/kas-char-13.png' },
            { title: 'Blender — Sculpt View', image: '/assets/character/kas-char-14.png' },
            { title: 'Blender — Side Angle', image: '/assets/character/kas-char-15.png' },
            // kas-char-16 = Early prototype in Unity
            { title: 'Early Prototype — Unity', image: '/assets/character/kas-char-16.png' },
            // kas-char-17 = Textured front
            { title: 'Kas Textured — Front', image: '/assets/character/kas-char-17.png' },
            // kas-char-18 = Textured glide pose
            { title: 'Kas Textured — Glide Pose', image: '/assets/character/kas-char-18.png' },
            // kas-char-19 = Textured T-pose
            { title: 'Kas Textured — T-Pose', image: '/assets/character/kas-char-19.png' },
        ],
    },
    {
        label: 'Enemies',
        items: [
            { title: 'Enemy Concepts — Reapers', image: '/assets/enemies/enemy-1.png' },
            { title: 'Enemy Concepts — Creatures', image: '/assets/enemies/enemy-2.png' },
            { title: 'Enemy Sketches', image: '/assets/enemies/enemy-sketch.png' },
        ],
    },
    {
        label: 'Environment',
        items: [
            { title: 'Level — Lanterns & Platforms', image: '/assets/concept-env/env-8.png' },
            { title: 'Level — Overview', image: '/assets/concept-env/env-7.png' },
            { title: 'Level — Editor View', image: '/assets/concept-env/env-9.png' },
            { title: 'Environment Concepts Pt.1', image: '/assets/concept-env/env-1.png' },
            { title: 'Environment Concepts Pt.2', image: '/assets/concept-env/env-2.png' },
            { title: 'Level Scene — Rain & Lighting', image: '/assets/concept-env/env-3.png' },
            { title: 'VFX & Particle Effects', image: '/assets/concept-env/env-4.png' },
            { title: 'Turret Script — Unity Inspector', image: '/assets/concept-env/env-5.png' },
            { title: 'Environment Options — Concept Art', image: '/assets/concept-env/env-6.png' },
            // process screenshots (Unity editor)
            { title: 'Unity — Materials Setup', image: '/assets/screenshots/process-1.png' },
            { title: 'In-Game — Gothic Level', image: '/assets/screenshots/process-2.png' },
            { title: 'Level Overview', image: '/assets/screenshots/process-3.png' },
        ],
    },
    {
        label: 'Mechanics',
        items: [
            { title: 'Double Jump Pg.1', image: '/assets/mechanics/double-jump-1.png' },
            { title: 'Double Jump Pg.2', image: '/assets/mechanics/double-jump-2.png' },
            { title: 'Double Jump Pg.3', image: '/assets/mechanics/double-jump-3.png' },
            { title: 'Double Jump Pg.4', image: '/assets/mechanics/double-jump-4.png' },
            { title: 'Double Jump Pg.5', image: '/assets/mechanics/double-jump-5.png' },
            { title: 'I-Frames Pg.1', image: '/assets/mechanics/iframes-1.png' },
            { title: 'I-Frames Pg.2', image: '/assets/mechanics/iframes-2.png' },
            { title: 'I-Frames Pg.3', image: '/assets/mechanics/iframes-3.png' },
        ],
    },
    {
        label: 'Moodboards',
        items: [
            { title: 'Kas Character References', image: '/assets/moodboards/mood-3.png' },
            { title: 'Environment References', image: '/assets/moodboards/mood-2.png' },
            { title: 'Environment References Pt.2', image: '/assets/moodboards/mood-1.png' },
            { title: 'Style Reference 1', image: '/assets/moodboards/mood-4.jpg' },
            { title: 'Style Reference 2', image: '/assets/moodboards/mood-5.jpg' },
            { title: 'Style Reference 3', image: '/assets/moodboards/mood-6.jpg' },
            { title: 'Nightmare Creatures Ref', image: '/assets/moodboards/mood-7.jpg' },
            { title: 'Gothic Style Ref', image: '/assets/moodboards/mood-8.png' },
        ],
    },
    {
        label: 'Assets',
        items: [
            // assets-3d folder (Blender screenshots of all 3D assets)
            { title: 'Turret — High Res', image: '/assets/assets-3d/asset-1.png' },
            { title: 'Turret — Low Res', image: '/assets/assets-3d/asset-2.png' },
            { title: 'All Assets — Overview', image: '/assets/assets-3d/asset-3.png' },
            { title: 'Assets — Detail View', image: '/assets/assets-3d/asset-4.png' },
            { title: 'Assets — Wireframe', image: '/assets/assets-3d/asset-5.png' },
            { title: 'Assets — WIP 1', image: '/assets/assets-3d/asset-6.png' },
            { title: 'Assets — WIP 2', image: '/assets/assets-3d/asset-7.png' },
            { title: 'Turret Untextured', image: '/assets/assets-3d/asset-8.png' },
            { title: 'Turret — Angle 1', image: '/assets/assets-3d/asset-9.png' },
            { title: 'Turret — Angle 2', image: '/assets/assets-3d/asset-10.png' },
            { title: 'Turret — Side View', image: '/assets/assets-3d/asset-11.png' },
            { title: 'Shield & Sword — View 1', image: '/assets/assets-3d/asset-12.png' },
            { title: 'Shield & Sword — View 2', image: '/assets/assets-3d/asset-13.png' },
            { title: 'Block Asset', image: '/assets/assets-3d/asset-14.png' },
            { title: 'Turret Assembly', image: '/assets/assets-3d/asset-15.png' },
            { title: 'Turret Textured — Front', image: '/assets/assets-3d/asset-16.png' },
            { title: 'Turret Textured — Side', image: '/assets/assets-3d/asset-17.png' },
            { title: 'Turret Textured — Detail', image: '/assets/assets-3d/asset-18.png' },
            { title: 'Turret Textured — Full', image: '/assets/assets-3d/asset-19.png' },
            // Textures
            { title: 'Shield — Albedo', image: '/assets/textures/shield-albedo.png' },
            { title: 'Shield — 3D', image: '/assets/textures/shield-3d.png' },
            { title: 'Sword — Albedo', image: '/assets/textures/sword-albedo.png' },
            { title: 'Sword — 3D', image: '/assets/textures/sword-3d.png' },
            { title: 'Turret — Albedo', image: '/assets/textures/turret-albedo.png' },
            { title: 'Turret — 3D', image: '/assets/textures/turret-3d.png' },
            { title: 'Kas — Albedo', image: '/assets/textures/kas-albedo.png' },
            { title: 'UI — Lyre (Jump Indicator)', image: '/assets/ui/jump-indicator.png' },
        ],
    },
    {
        label: 'Sketches',
        items: [
            { title: 'Kas Design — Character Notes', image: '/assets/sketches/sketch-1.jpg' },
            { title: 'Kas Design — Iteration', image: '/assets/sketches/sketch-2.jpg' },
            { title: 'References & Details', image: '/assets/sketches/sketch-3.jpg' },
            { title: 'Props & Accessories', image: '/assets/sketches/sketch-4.jpg' },
            { title: 'UI & Indicator Ideas', image: '/assets/sketches/sketch-5.jpg' },
        ],
    },
]

// ─── TiltCard ────────────────────────────────────────────────────────────────

interface TiltCardProps {
    item: ConceptItem
    onClick: (image: string, title: string) => void
}

const TiltCard = React.memo(function TiltCard({ item, onClick }: TiltCardProps) {
    const cardRef = React.useRef<HTMLDivElement>(null)
    const glareRef = React.useRef<HTMLDivElement>(null)
    const rafRef = React.useRef<number | null>(null)

    const handleMouseMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)

        rafRef.current = requestAnimationFrame(() => {
            const card = cardRef.current
            const glare = glareRef.current
            if (!card || !glare) return

            const rect = card.getBoundingClientRect()
            const x = e.clientX - rect.left   // px from left
            const y = e.clientY - rect.top    // px from top
            const cx = rect.width / 2
            const cy = rect.height / 2

            // Normalise to -1 … +1
            const nx = (x - cx) / cx
            const ny = (y - cy) / cy

            const rotateY = nx * 14   // max ±14 deg
            const rotateX = -ny * 10  // max ±10 deg

            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03,1.03,1.03)`

            // Glare: position moves diagonally opposite to tilt
            const glareX = (nx + 1) / 2 * 100
            const glareY = (ny + 1) / 2 * 100
            glare.style.opacity = '1'
            glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,215,0,0.18) 0%, transparent 65%)`
        })
    }, [])

    const handleMouseLeave = React.useCallback(() => {
        if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)

        const card = cardRef.current
        const glare = glareRef.current
        if (!card || !glare) return

        card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
        glare.style.opacity = '0'
        glare.style.background = 'none'
    }, [])

    // Cleanup on unmount
    React.useEffect(() => {
        return () => {
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
        }
    }, [])

    return (
            <Card
                ref={cardRef}
                data-cursor="pointer"
                onClick={() => onClick(item.image, item.title)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                sx={{
                    position: 'relative',
                    cursor: 'pointer',
                    background: 'rgba(18, 10, 4, 0.72)',
                    border: '1px solid rgba(212, 175, 55, 0.18)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    willChange: 'transform',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.18s ease, box-shadow 0.18s ease',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.55)',
                    '&:hover': {
                        boxShadow: '0 12px 40px rgba(212,175,55,0.22), 0 4px 24px rgba(0,0,0,0.7)',
                        borderColor: 'rgba(212,175,55,0.45)',
                    },
                }}
            >
                {/* Glare overlay */}
                <div
                    ref={glareRef}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: 2,
                        pointerEvents: 'none',
                        opacity: 0,
                        transition: 'opacity 0.2s ease',
                        borderRadius: 'inherit',
                    }}
                />

                <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    sx={{
                        aspectRatio: '4/3',
                        width: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        display: 'block',
                        flexShrink: 0,
                    }}
                />

                <CardContent
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        alignItems: 'center',
                        py: '10px !important',
                        px: 1.5,
                        background: 'rgba(10, 5, 2, 0.55)',
                        borderTop: '1px solid rgba(212,175,55,0.12)',
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'rgba(240,220,170,0.9)',
                            fontFamily: 'Raleway, sans-serif',
                            fontWeight: 500,
                            fontSize: '0.78rem',
                            letterSpacing: '0.03em',
                            lineHeight: 1.35,
                        }}
                    >
                        {item.title}
                    </Typography>
                </CardContent>
            </Card>
    )
})

// ─── Main component ───────────────────────────────────────────────────────────

const Concept = React.memo(function Concept() {
    const [activeTab, setActiveTab] = React.useState(0)
    const { openImage } = useImageViewer()

    const { ref: sectionRef, inView } = useInView({ threshold: 0.08, triggerOnce: true })

    const handleTabChange = React.useCallback((_: React.SyntheticEvent, value: number) => {
        setActiveTab(value)
    }, [])

    const handleCardClick = React.useCallback((image: string, alt: string) => {
        openImage(image, alt)
    }, [openImage])

    const currentItems = TABS[activeTab].items

    return (
        <Box
            id="concept"
            ref={sectionRef}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as const }}
            sx={{
                py: { xs: 6, md: 10 },
                px: { xs: 2, sm: 4, md: 6 },
                maxWidth: 1280,
                mx: 'auto',
            }}
        >
            <SectionTitle
                title="Concept & Design"
                subtitle="Character design, environment concepts, mechanics documentation, and moodboards"
            />

            {/* Tabs bar */}
            <Box
                sx={{
                    mb: 4,
                    borderBottom: '1px solid rgba(212,175,55,0.2)',
                }}
            >
                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    allowScrollButtonsMobile
                    sx={{
                        minHeight: 44,
                        '& .MuiTabs-indicator': {
                            backgroundColor: '#D4AF37',
                            height: 2,
                        },
                        '& .MuiTabs-scrollButtons': {
                            color: 'rgba(212,175,55,0.7)',
                        },
                    }}
                >
                    {TABS.map((tab, index) => (
                        <Tab
                            key={tab.label}
                            label={tab.label}
                            id={`concept-tab-${index}`}
                            aria-controls={`concept-tabpanel-${index}`}
                            sx={{
                                fontFamily: 'Raleway, sans-serif',
                                fontWeight: 600,
                                fontSize: '0.82rem',
                                letterSpacing: '0.06em',
                                textTransform: 'uppercase',
                                color: 'rgba(200,180,120,0.65)',
                                minHeight: 44,
                                px: 2,
                                transition: 'color 0.2s ease',
                                '&.Mui-selected': {
                                    color: '#D4AF37',
                                },
                                '&:hover': {
                                    color: 'rgba(212,175,55,0.9)',
                                },
                            }}
                        />
                    ))}
                </Tabs>
            </Box>

            {/* Slide gallery per tab */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                    role="tabpanel"
                    id={`concept-tabpanel-${activeTab}`}
                    aria-labelledby={`concept-tab-${activeTab}`}
                >
                    <SlideGallery itemWidth={{ xs: 260, sm: 300, md: 340 }}>
                        {currentItems.map((item) => (
                            <TiltCard key={item.title} item={item} onClick={handleCardClick} />
                        ))}
                    </SlideGallery>
                </motion.div>
            </AnimatePresence>

        </Box>
    )
})

export default Concept
