import React from 'react'
import { Dialog, Box, IconButton } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import type { ImageViewerProps } from './ImageViewer.types'
import { styles } from './ImageViewer.styles'

const MotionBox = motion.create(Box)

const ImageViewer = React.memo(function ImageViewer({ image, alt, isOpen, onClose }: ImageViewerProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <Dialog
                    open={isOpen}
                    onClose={onClose}
                    maxWidth={false}
                    slotProps={{
                        backdrop: {
                            sx: styles.backdropSx,
                        }
                    }}
                    sx={styles.dialog}
                >
                    <IconButton
                        onClick={onClose}
                        data-cursor="pointer"
                        sx={styles.closeButton}
                    >
                        <CloseRoundedIcon />
                    </IconButton>
                    <MotionBox
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Box
                            component="img"
                            src={image}
                            alt={alt}
                            sx={styles.image}
                        />
                    </MotionBox>
                </Dialog>
            )}
        </AnimatePresence>
    )
})

export default ImageViewer
