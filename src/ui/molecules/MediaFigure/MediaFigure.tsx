import React from 'react'
import { Box, Typography } from '@mui/material'
import ZoomInRoundedIcon from '@mui/icons-material/ZoomInRounded'
import { useImageViewer } from '../../../context/ImageViewerContext'
import { useTilt } from '../../../hooks/useTilt'
import type { MediaFigureProps } from './MediaFigure.types'
import { styles } from './MediaFigure.styles'

const MediaFigure = React.memo(function MediaFigure({ item }: MediaFigureProps) {
    const { openImage, openVideo } = useImageViewer()
    const { ref, handleMouseMove, handleMouseLeave } = useTilt(6)
    const isVideo = item.kind === 'video'

    const handleOpen = React.useCallback(() => {
        if (isVideo) openVideo(item.src, item.alt)
        else openImage(item.src, item.alt)
    }, [isVideo, item.src, item.alt, openImage, openVideo])

    return (
        <Box sx={styles.figure}>
            <Box
                ref={ref}
                sx={styles.frame}
                data-cursor="pointer"
                onClick={handleOpen}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {isVideo ? (
                    <Box component="video" src={item.src} muted sx={styles.media} />
                ) : (
                    <Box component="img" src={item.src} alt={item.alt} loading="lazy" sx={styles.media} />
                )}
                <Box className="media-zoom" sx={styles.zoom}>
                    <ZoomInRoundedIcon fontSize="small" />
                </Box>
            </Box>
            {item.caption && (
                <Typography sx={styles.caption}>{item.caption}</Typography>
            )}
        </Box>
    )
})

export default MediaFigure
