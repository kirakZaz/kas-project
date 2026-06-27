import React, { useRef, useCallback, useState } from 'react'
import { Box, Typography, Card, CardContent } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '../../atoms/SectionTitle/SectionTitle'
import SlideGallery from '../../atoms/SlideGallery/SlideGallery'
import { useImageViewer } from '../../../context/ImageViewerContext'
import { styles } from './Gallery.styles'

const VIDEOS = [
    { title: 'Latest Build',       src: '/assets/video/gameplay-11.mp4' },
    { title: 'Early Prototype',    src: '/assets/video/REC-20260617183338.mp4' },
    { title: 'Movement Test',      src: '/assets/video/REC-20260617192624.mp4' },
    { title: 'Level Build',        src: '/assets/video/2026-06-18 19-09-34.mp4' },
    { title: 'Glide Mechanic',     src: '/assets/video/2026-06-20 14-09-41.mp4' },
    { title: 'VFX & Polish',       src: '/assets/video/REC-20260622171403.mp4' },
    { title: 'Final Build',        src: '/assets/video/REC-20260622181803.mp4' },
    { title: 'Baking Process',     src: '/assets/video/gameplay-7.mp4' },
    { title: 'KAS Movement',       src: '/assets/video/gameplay-8.mp4' },
    { title: 'Character Proto',    src: '/assets/video/gameplay-9.mp4' },
    { title: 'Character Proto v2', src: '/assets/video/gameplay-10.mp4' },
]

interface VideoCardProps {
    title: string
    src: string
}

const VideoCard = React.memo(function VideoCard({ title, src }: VideoCardProps) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isHovered, setIsHovered] = useState(false)
    const { openVideo } = useImageViewer()

    const handleMouseEnter = useCallback(() => {
        setIsHovered(true)
        const el = videoRef.current
        if (el) {
            el.currentTime = 0
            el.play().catch(() => {})
        }
    }, [])

    const handleMouseLeave = useCallback(() => {
        setIsHovered(false)
        const el = videoRef.current
        if (el) {
            el.pause()
            el.currentTime = 0
        }
    }, [])

    const handleClick = useCallback(() => {
        const el = videoRef.current
        if (el) el.pause()
        openVideo(src, title)
    }, [src, title, openVideo])

    return (
        <Card
            data-cursor="pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            sx={styles.card}
        >
            <Box sx={styles.videoWrapper}>
                <Box
                    ref={videoRef}
                    component="video"
                    src={src}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    sx={{ ...styles.video, transform: isHovered ? 'scale(1.03)' : 'scale(1)' }}
                />
                <Box sx={{ ...styles.overlay, opacity: isHovered ? 0 : 1 }}>
                    <Box sx={styles.playIcon} />
                </Box>
            </Box>
            <CardContent sx={styles.cardContent}>
                <Typography variant="body2" sx={styles.cardTitle}>
                    {title}
                </Typography>
            </CardContent>
        </Card>
    )
})

const MotionBox = motion.create(Box)

const Gallery = React.memo(function Gallery() {
    const { ref: sectionRef, inView } = useInView({ threshold: 0.1, triggerOnce: true })

    return (
        <MotionBox
            id="gallery"
            ref={sectionRef}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as const }}
            sx={styles.section}
        >
            <SectionTitle
                title="Gallery"
                subtitle="Gameplay videos from development"
            />

            <SlideGallery itemWidth={{ xs: 300, sm: 380, md: 440 }}>
                {VIDEOS.map((video) => (
                    <VideoCard key={video.title} title={video.title} src={video.src} />
                ))}
            </SlideGallery>
        </MotionBox>
    )
})

export default Gallery
