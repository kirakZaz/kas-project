import React, { useRef, useCallback, useState } from 'react'
import { Box, Typography, Card, CardContent } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '../../atoms/SectionTitle/SectionTitle'
import SlideGallery from '../../atoms/SlideGallery/SlideGallery'

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

    return (
        <Card
            data-cursor="pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
                background: 'rgba(10,10,10,0.75)',
                border: '1px solid rgba(212,175,55,0.18)',
                borderRadius: 2,
                overflow: 'hidden',
                transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                '&:hover': {
                    boxShadow: '0 0 18px rgba(212,175,55,0.35), 0 4px 24px rgba(0,0,0,0.6)',
                    borderColor: 'rgba(212,175,55,0.55)',
                },
            }}
        >
            <Box sx={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
                <Box
                    ref={videoRef}
                    component="video"
                    src={src}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.4s ease',
                        transform: isHovered ? 'scale(1.03)' : 'scale(1)',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(0,0,0,0.35)',
                        opacity: isHovered ? 0 : 1,
                        transition: 'opacity 0.3s ease',
                        pointerEvents: 'none',
                    }}
                >
                    <Box
                        sx={{
                            width: 0, height: 0,
                            borderTop: '18px solid transparent',
                            borderBottom: '18px solid transparent',
                            borderLeft: '30px solid rgba(212,175,55,0.92)',
                            filter: 'drop-shadow(0 0 8px rgba(212,175,55,0.7))',
                            ml: '4px',
                        }}
                    />
                </Box>
            </Box>
            <CardContent sx={{ py: 1.2, px: 2, '&:last-child': { pb: 1.4 } }}>
                <Typography
                    variant="body2"
                    sx={{
                        color: 'rgba(212,175,55,0.85)',
                        fontFamily: '"Cinzel", serif',
                        fontSize: '0.78rem',
                        letterSpacing: '0.04em',
                        textAlign: 'center',
                    }}
                >
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
            sx={{
                py: { xs: 6, md: 10 },
                px: { xs: 2, sm: 4, md: 6 },
                maxWidth: 1280,
                mx: 'auto',
            }}
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
