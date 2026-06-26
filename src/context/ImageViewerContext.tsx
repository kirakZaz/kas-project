import React from 'react'
import ImageViewer from '../components/atoms/ImageViewer/ImageViewer'

interface ImageViewerContextValue {
    openImage: (image: string, alt: string) => void
}

const ImageViewerContext = React.createContext<ImageViewerContextValue>({
    openImage: () => {},
})

export function useImageViewer() {
    return React.useContext(ImageViewerContext)
}

export function ImageViewerProvider({ children }: { children: React.ReactNode }) {
    const [viewer, setViewer] = React.useState<{ image: string; alt: string } | null>(null)

    const openImage = React.useCallback((image: string, alt: string) => {
        setViewer({ image, alt })
    }, [])

    const closeImage = React.useCallback(() => {
        setViewer(null)
    }, [])

    return (
        <ImageViewerContext.Provider value={{ openImage }}>
            {children}
            <ImageViewer
                image={viewer?.image ?? ''}
                alt={viewer?.alt ?? ''}
                isOpen={viewer !== null}
                onClose={closeImage}
            />
        </ImageViewerContext.Provider>
    )
}
