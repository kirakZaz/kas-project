import React from 'react'
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material'
import SectionTitle from '../../atoms/SectionTitle/SectionTitle'
import ImageViewer from '../../atoms/ImageViewer/ImageViewer'
import { styles } from './Process.styles'

const WEEKS = [
    {
        week: 'Week 1',
        title: 'Prototype & Double Jump',
        description: 'Core movement system, single and double jump mechanics, placeholder geometry, camera controller.',
        image: '/assets/sprints/week-1.png'
    },
    {
        week: 'Week 2',
        title: 'I-Frame System',
        description: 'Shield-based invincibility frames, damage system, health UI, hit feedback and visual effects.',
        image: '/assets/sprints/week-2.png'
    },
    {
        week: 'Week 3',
        title: 'Glide Mechanic',
        description: 'Glide input combo (jump + hold LMB + double jump), forward arc movement, feather particle trail, glide audio.',
        image: '/assets/sprints/week-3.png'
    },
    {
        week: 'Week 4',
        title: 'Assessment 1 Prep',
        description: 'Level assembly, turret AI, blade traps, 3D models integration, texturing, polish and playtesting.',
        image: '/assets/sprints/week-4.png'
    }
]

const Process = React.memo(function Process() {
    const [viewerImage, setViewerImage] = React.useState<{ image: string; alt: string } | null>(null)

    const handleImageClick = React.useCallback((image: string, alt: string) => {
        setViewerImage({ image, alt })
    }, [])

    const handleCloseViewer = React.useCallback(() => {
        setViewerImage(null)
    }, [])

    return (
        <Box id="process" sx={styles.section}>
            <SectionTitle
                title="Process"
                subtitle="Weekly sprint progress"
            />
            <Box sx={styles.timeline}>
                {WEEKS.map((item, index) => (
                    <Box key={item.week} sx={styles.timelineItem}>
                        <Box sx={styles.dot} />
                        {index < WEEKS.length - 1 && <Box sx={styles.line} />}
                        <Card
                            sx={styles.card}
                            onClick={() => handleImageClick(item.image, `${item.week} — ${item.title}`)}
                        >
                            <Box sx={styles.cardInner}>
                                <CardMedia
                                    component="img"
                                    image={item.image}
                                    alt={item.title}
                                    sx={styles.cardImage}
                                />
                                <CardContent sx={styles.cardContent}>
                                    <Typography variant="body2" sx={styles.weekLabel}>
                                        {item.week}
                                    </Typography>
                                    <Typography variant="h3" sx={styles.cardTitle}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" sx={styles.cardDesc}>
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Box>
                ))}
            </Box>
            <ImageViewer
                image={viewerImage?.image ?? ''}
                alt={viewerImage?.alt ?? ''}
                isOpen={viewerImage !== null}
                onClose={handleCloseViewer}
            />
        </Box>
    )
})

export default Process
