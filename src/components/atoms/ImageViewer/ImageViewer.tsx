import React from 'react'
import { Dialog, Box, IconButton } from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { styles } from './ImageViewer.styles'
import type { ImageViewerProps } from './ImageViewer.types'

const ImageViewer = React.memo(function ImageViewer({ image, alt, isOpen, onClose }: ImageViewerProps) {
    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            maxWidth={false}
            sx={styles.dialog}
        >
            <IconButton onClick={onClose} sx={styles.closeButton}>
                <CloseRoundedIcon />
            </IconButton>
            <Box sx={styles.content}>
                <Box
                    component="img"
                    src={image}
                    alt={alt}
                    sx={styles.image}
                />
            </Box>
        </Dialog>
    )
})

export default ImageViewer
