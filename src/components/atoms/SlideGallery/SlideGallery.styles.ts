
export const styles = {
    root: {
        position: 'relative',
    } satisfies any,

    arrowLeft: {
        position: 'absolute',
        left: -8,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
        bgcolor: 'rgba(6,6,12,0.85)',
        border: '1px solid rgba(196,164,74,0.3)',
        color: '#c4a44a',
        backdropFilter: 'blur(8px)',
        width: 40,
        height: 40,
        '&:hover': {
            bgcolor: 'rgba(196,164,74,0.15)',
            borderColor: '#c4a44a',
        },
    } satisfies any,

    arrowRight: {
        position: 'absolute',
        right: -8,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
        bgcolor: 'rgba(6,6,12,0.85)',
        border: '1px solid rgba(196,164,74,0.3)',
        color: '#c4a44a',
        backdropFilter: 'blur(8px)',
        width: 40,
        height: 40,
        '&:hover': {
            bgcolor: 'rgba(196,164,74,0.15)',
            borderColor: '#c4a44a',
        },
    } satisfies any,

    scrollContainer: (widthSx: object) => ({
        display: 'flex',
        gap: 2.5,
        overflowX: 'auto',
        scrollSnapType: 'x mandatory',
        pb: 1.5,
        px: 1,
        mx: -1,
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': { display: 'none' },
        '& > *': {
            flexShrink: 0,
            scrollSnapAlign: 'start',
            ...widthSx,
        },
        maskImage: 'linear-gradient(90deg, transparent 0%, black 3%, black 97%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 3%, black 97%, transparent 100%)',
    }),
}
