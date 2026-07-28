export const styles = {
    figure: {
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
    } satisfies any,

    frame: {
        position: 'relative',
        borderRadius: '6px',
        overflow: 'hidden',
        border: '1px solid rgba(196,164,74,0.12)',
        bgcolor: '#0e0e18',
        transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
        '&:hover': {
            border: '1px solid rgba(196,164,74,0.35)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.45), 0 0 18px rgba(196,164,74,0.08)',
        },
        '&:hover .media-zoom': { opacity: 1 },
    } satisfies any,

    media: {
        display: 'block',
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
    } satisfies any,

    zoom: {
        position: 'absolute',
        top: 8,
        right: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        borderRadius: '50%',
        color: '#c4a44a',
        bgcolor: 'rgba(6,6,12,0.7)',
        opacity: 0,
        transition: 'opacity 0.3s',
        pointerEvents: 'none',
    } satisfies any,

    caption: {
        fontFamily: "'Raleway', sans-serif",
        fontSize: '0.8rem',
        lineHeight: 1.5,
        color: '#8a8580',
        px: 0.5,
    } satisfies any,
}
