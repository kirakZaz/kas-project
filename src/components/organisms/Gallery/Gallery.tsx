import React from 'react'
import { Box, Grid, Card, CardContent, Typography, Tabs, Tab } from '@mui/material'
import SectionTitle from '../../atoms/SectionTitle/SectionTitle'
import ImageViewer from '../../atoms/ImageViewer/ImageViewer'
import { styles } from './Gallery.styles'

const SCREENSHOTS = [
    { title: 'Unity Editor — Materials Setup', image: '/assets/screenshots/process-1.png' },
    { title: 'Kas In-Game — Gothic Level', image: '/assets/screenshots/process-2.png' },
    { title: 'Level Overview — Full Scene', image: '/assets/screenshots/process-3.png' }
]

const VIDEOS = [
    { title: 'Early Prototype', src: '/assets/video/gameplay-1.mp4' },
    { title: 'Movement & Jump Test', src: '/assets/video/gameplay-2.mp4' },
    { title: 'Level Iteration', src: '/assets/video/gameplay-3.mp4' },
    { title: 'Mechanics Progress', src: '/assets/video/gameplay-4.mp4' },
    { title: 'Glide & VFX', src: '/assets/video/gameplay-5.mp4' },
    { title: 'Latest Build', src: '/assets/video/gameplay-6.mp4' }
]

const Gallery = React.memo(function Gallery() {
    const [activeTab, setActiveTab] = React.useState(0)
    const [viewerImage, setViewerImage] = React.useState<{ image: string; alt: string } | null>(null)

    const handleTabChange = React.useCallback((_: React.SyntheticEvent, value: number) => {
        setActiveTab(value)
    }, [])

    const handleImageClick = React.useCallback((image: string, alt: string) => {
        setViewerImage({ image, alt })
    }, [])

    const handleCloseViewer = React.useCallback(() => {
        setViewerImage(null)
    }, [])

    return (
        <Box id="gallery" sx={styles.section}>
            <SectionTitle
                title="Gallery"
                subtitle="Screenshots and gameplay videos from development"
            />
            <Box sx={styles.tabsWrapper}>
                <Tabs value={activeTab} onChange={handleTabChange} sx={styles.tabs}>
                    <Tab label="Videos" sx={styles.tab} />
                    <Tab label="Screenshots" sx={styles.tab} />
                </Tabs>
            </Box>

            {activeTab === 0 && (
                <Grid container spacing={3}>
                    {VIDEOS.map((video) => (
                        <Grid size={{ xs: 12, sm: 6 }} key={video.title}>
                            <Card sx={styles.videoCard}>
                                <Box
                                    component="video"
                                    controls
                                    preload="metadata"
                                    sx={styles.video}
                                >
                                    <source src={video.src} type="video/mp4" />
                                </Box>
                                <CardContent sx={styles.cardContent}>
                                    <Typography variant="body2" sx={styles.cardLabel}>
                                        {video.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}

            {activeTab === 1 && (
                <Grid container spacing={3}>
                    {SCREENSHOTS.map((item) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.title}>
                            <Card
                                sx={styles.card}
                                onClick={() => handleImageClick(item.image, item.title)}
                            >
                                <Box
                                    component="img"
                                    src={item.image}
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
            )}

            <ImageViewer
                image={viewerImage?.image ?? ''}
                alt={viewerImage?.alt ?? ''}
                isOpen={viewerImage !== null}
                onClose={handleCloseViewer}
            />
        </Box>
    )
})

export default Gallery
