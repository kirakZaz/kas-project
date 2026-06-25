import React from 'react'
import { Box, Grid, Card, CardMedia, CardContent, Typography, Tabs, Tab } from '@mui/material'
import SectionTitle from '../../atoms/SectionTitle/SectionTitle'
import ImageViewer from '../../atoms/ImageViewer/ImageViewer'
import { styles } from './Concept.styles'

const TABS = [
    {
        label: 'Character',
        items: [
            { title: 'Kas Textured — Front', image: '/assets/character/kas-textured-1.png' },
            { title: 'Kas Textured — Back', image: '/assets/character/kas-textured-2.png' },
            { title: 'Kas Character Design', image: '/assets/character/kas-design.png' },
            { title: 'Kas Animations Guide', image: '/assets/character/kas-animations.png' },
            { title: 'Kas Texture (Albedo)', image: '/assets/textures/kas-albedo.png' }
        ]
    },
    {
        label: 'Environment',
        items: [
            { title: 'Environment Concepts Pt.1', image: '/assets/concept/env-concepts-1.png' },
            { title: 'Environment Concepts Pt.2', image: '/assets/concept/env-concepts-2.png' },
            { title: 'Gothic Turret Texture', image: '/assets/textures/turret-albedo.png' }
        ]
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
            { title: 'Glide Mechanic', image: '/assets/ui/mechanic-combo.png' }
        ]
    },
    {
        label: 'Moodboards',
        items: [
            { title: 'Kas Character References', image: '/assets/moodboards/kas-refs.png' },
            { title: 'Environment References', image: '/assets/moodboards/env-refs-1.png' },
            { title: 'Environment References Pt.2', image: '/assets/moodboards/env-refs-2.png' }
        ]
    },
    {
        label: 'Enemies',
        items: [
            { title: 'Enemy Concepts — Reapers', image: '/assets/enemies/enemy-1.png' },
            { title: 'Enemy Concepts — Creatures', image: '/assets/enemies/enemy-2.png' },
            { title: 'Enemy Sketches', image: '/assets/enemies/enemy-sketch.png' }
        ]
    },
    {
        label: 'Assets',
        items: [
            { title: 'Stained Glass Shield', image: '/assets/textures/shield-albedo.png' },
            { title: 'Shield 3D Model', image: '/assets/textures/shield-3d.png' },
            { title: 'Silver Blade', image: '/assets/textures/sword-albedo.png' },
            { title: 'Sword 3D Model', image: '/assets/textures/sword-3d.png' },
            { title: 'Gothic Turret Base', image: '/assets/textures/turret-albedo.png' },
            { title: 'Turret Base — Front', image: '/assets/textures/turret-base-1.png' },
            { title: 'Turret Base — Back', image: '/assets/textures/turret-base-2.png' },
            { title: 'Gothic Turret 3D', image: '/assets/textures/turret-3d.png' }
        ]
    }
]

const Concept = React.memo(function Concept() {
    const [activeTab, setActiveTab] = React.useState(0)
    const [viewerImage, setViewerImage] = React.useState<{ image: string; alt: string } | null>(null)

    const handleTabChange = React.useCallback((_: React.SyntheticEvent, value: number) => {
        setActiveTab(value)
    }, [])

    const handleCardClick = React.useCallback((image: string, alt: string) => {
        setViewerImage({ image, alt })
    }, [])

    const handleCloseViewer = React.useCallback(() => {
        setViewerImage(null)
    }, [])

    const currentItems = TABS[activeTab].items

    return (
        <Box id="concept" sx={styles.section}>
            <SectionTitle
                title="Concept & Design"
                subtitle="Character design, environment concepts, mechanics documentation, and moodboards"
            />
            <Box sx={styles.tabsWrapper}>
                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={styles.tabs}
                >
                    {TABS.map((tab) => (
                        <Tab key={tab.label} label={tab.label} sx={styles.tab} />
                    ))}
                </Tabs>
            </Box>
            <Grid container spacing={3}>
                {currentItems.map((item) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.title}>
                        <Card
                            sx={styles.card}
                            onClick={() => handleCardClick(item.image, item.title)}
                        >
                            <CardMedia
                                component="img"
                                image={item.image}
                                alt={item.title}
                                sx={styles.cardImage}
                            />
                            <CardContent sx={styles.cardContent}>
                                <Typography variant="body2" sx={styles.cardLabel}>
                                    {item.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <ImageViewer
                image={viewerImage?.image ?? ''}
                alt={viewerImage?.alt ?? ''}
                isOpen={viewerImage !== null}
                onClose={handleCloseViewer}
            />
        </Box>
    )
})

export default Concept
