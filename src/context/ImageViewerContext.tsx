import React from 'react'
import { Dialog, Box, IconButton } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

const MotionBox = motion.create(Box)

interface ViewerState {
    src: string
    alt: string
    type: 'image' | 'video'
}

interface ImageViewerContextValue {
    openImage: (image: string, alt: string) => void
    openVideo: (src: string, title: string) => void
}

const ImageViewerContext = React.createContext<ImageViewerContextValue>({
    openImage: () => {},
    openVideo: () => {},
})

export function useImageViewer() {
    return React.useContext(ImageViewerContext)
}

export function ImageViewerProvider({ children }: { children: React.ReactNode }) {
    const [viewer, setViewer] = React.useState<ViewerState | null>(null)

    const openImage = React.useCallback((src: string, alt: string) => {
        setViewer({ src, alt, type: 'image' })
    }, [])

    const openVideo = React.useCallback((src: string, title: string) => {
        setViewer({ src, alt: title, type: 'video' })
    }, [])

    const close = React.useCallback(() => {
        setViewer(null)
    }, [])

    return (
        <ImageViewerContext.Provider value={{ openImage, openVideo }}>
            {children}
            <AnimatePresence>
                {viewer && (
                    <Dialog
                        open
                        onClose={close}
                        maxWidth={false}
                        slotProps={{
                            backdrop: {
                                sx: { backgroundColor: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(8px)' }
                            }
                        }}
                        sx={{
                            zIndex: 1500,
                            '& .MuiDialog-paper': {
                                background: 'transparent',
                                boxShadow: 'none',
                                maxWidth: '92vw',
                                maxHeight: '92vh',
                                overflow: 'visible',
                                border: 'none',
                            },
                        }}
                    >
                        <IconButton
                            onClick={close}
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
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                        >
                            {viewer.type === 'image' ? (
                                <Box
                                    component="img"
                                    src={viewer.src}
                                    alt={viewer.alt}
                                    sx={{
                                        maxWidth: '88vw',
                                        maxHeight: '88vh',
                                        objectFit: 'contain',
                                        borderRadius: 1,
                                        boxShadow: '0 0 60px rgba(0,0,0,0.5), 0 0 30px rgba(196,164,74,0.1)',
                                    }}
                                />
                            ) : (
                                <Box
                                    component="video"
                                    src={viewer.src}
                                    controls
                                    autoPlay
                                    sx={{
                                        maxWidth: '88vw',
                                        maxHeight: '88vh',
                                        borderRadius: 1,
                                        boxShadow: '0 0 60px rgba(0,0,0,0.5), 0 0 30px rgba(196,164,74,0.1)',
                                        outline: 'none',
                                    }}
                                />
                            )}
                        </MotionBox>
                    </Dialog>
                )}
            </AnimatePresence>
        </ImageViewerContext.Provider>
    )
}
