import React from 'react'
import { Dialog, Box, IconButton } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import type { ImageViewerProps } from './ImageViewer.types'

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
                            sx: { backgroundColor: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(8px)' }
                        }
                    }}
                    sx={{
                        '& .MuiDialog-paper': {
                            background: 'transparent',
                            boxShadow: 'none',
                            maxWidth: '90vw',
                            maxHeight: '90vh',
                            overflow: 'visible',
                            border: 'none',
                        },
                    }}
                >
                    <IconButton
                        onClick={onClose}
                        data-cursor="pointer"
                        sx={{
                            position: 'absolute',
                            top: -40, right: -10,
                            color: '#c4a44a',
                            zIndex: 10,
                            '&:hover': { color: '#fff' },
                        }}
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
                            sx={{
                                maxWidth: '85vw',
                                maxHeight: '85vh',
                                objectFit: 'contain',
                                borderRadius: 1,
                                boxShadow: '0 0 60px rgba(0,0,0,0.5), 0 0 30px rgba(196,164,74,0.1)',
                            }}
                        />
                    </MotionBox>
                </Dialog>
            )}
        </AnimatePresence>
    )
})

export default ImageViewer
