import React from 'react'
import { Box, IconButton } from '@mui/material'
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'

interface SlideGalleryProps {
    children: React.ReactNode
    itemWidth?: number | { xs: number; sm?: number; md?: number }
}

const GOLD = '#c4a44a'

const SlideGallery = React.memo(function SlideGallery({ children, itemWidth = { xs: 280, sm: 320, md: 360 } }: SlideGalleryProps) {
    const scrollRef = React.useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = React.useState(false)
    const [canScrollRight, setCanScrollRight] = React.useState(true)

    const checkScroll = React.useCallback(() => {
        const el = scrollRef.current
        if (!el) return
        setCanScrollLeft(el.scrollLeft > 10)
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
    }, [])

    React.useEffect(() => {
        const el = scrollRef.current
        if (!el) return
        checkScroll()
        el.addEventListener('scroll', checkScroll, { passive: true })
        window.addEventListener('resize', checkScroll)
        return () => {
            el.removeEventListener('scroll', checkScroll)
            window.removeEventListener('resize', checkScroll)
        }
    }, [checkScroll, children])

    const scroll = React.useCallback((dir: 'left' | 'right') => {
        const el = scrollRef.current
        if (!el) return
        const amount = el.clientWidth * 0.7
        el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
    }, [])

    // Resolve responsive width to CSS
    const widthSx = typeof itemWidth === 'number'
        ? { width: itemWidth }
        : { width: { xs: itemWidth.xs, sm: itemWidth.sm ?? itemWidth.xs, md: itemWidth.md ?? itemWidth.sm ?? itemWidth.xs } }

    return (
        <Box sx={{ position: 'relative' }}>
            {/* Left arrow */}
            {canScrollLeft && (
                <IconButton
                    onClick={() => scroll('left')}
                    data-cursor="pointer"
                    sx={{
                        position: 'absolute',
                        left: -8,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        bgcolor: 'rgba(6,6,12,0.85)',
                        border: `1px solid rgba(196,164,74,0.3)`,
                        color: GOLD,
                        backdropFilter: 'blur(8px)',
                        width: 40, height: 40,
                        '&:hover': {
                            bgcolor: 'rgba(196,164,74,0.15)',
                            borderColor: GOLD,
                        },
                    }}
                >
                    <ChevronLeftRoundedIcon />
                </IconButton>
            )}

            {/* Right arrow */}
            {canScrollRight && (
                <IconButton
                    onClick={() => scroll('right')}
                    data-cursor="pointer"
                    sx={{
                        position: 'absolute',
                        right: -8,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        bgcolor: 'rgba(6,6,12,0.85)',
                        border: `1px solid rgba(196,164,74,0.3)`,
                        color: GOLD,
                        backdropFilter: 'blur(8px)',
                        width: 40, height: 40,
                        '&:hover': {
                            bgcolor: 'rgba(196,164,74,0.15)',
                            borderColor: GOLD,
                        },
                    }}
                >
                    <ChevronRightRoundedIcon />
                </IconButton>
            )}

            {/* Scrollable container */}
            <Box
                ref={scrollRef}
                sx={{
                    display: 'flex',
                    gap: 2.5,
                    overflowX: 'auto',
                    scrollSnapType: 'x mandatory',
                    pb: 1.5,
                    px: 1,
                    mx: -1,
                    scrollbarWidth: 'none',
                    '&::-webkit-scrollbar': { display: 'none' },
                    // children sizing
                    '& > *': {
                        flexShrink: 0,
                        scrollSnapAlign: 'start',
                        ...widthSx,
                    },
                    // Fade edges
                    maskImage: 'linear-gradient(90deg, transparent 0%, black 3%, black 97%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 3%, black 97%, transparent 100%)',
                }}
            >
                {children}
            </Box>
        </Box>
    )
})

export default SlideGallery
