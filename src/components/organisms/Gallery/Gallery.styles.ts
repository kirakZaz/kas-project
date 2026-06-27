
export const styles = {
    section: {
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4, md: 6 },
        maxWidth: 1280,
        mx: 'auto',
    },

    card: {
        background: 'rgba(10,10,10,0.75)',
        border: '1px solid rgba(212,175,55,0.18)',
        borderRadius: 2,
        overflow: 'hidden',
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
        '&:hover': {
            boxShadow: '0 0 18px rgba(212,175,55,0.35), 0 4px 24px rgba(0,0,0,0.6)',
            borderColor: 'rgba(212,175,55,0.55)',
        },
    },

    videoWrapper: {
        position: 'relative',
        width: '100%',
        aspectRatio: '16/9',
        overflow: 'hidden',
    },

    video: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        transition: 'transform 0.4s ease',
    },

    overlay: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.35)',
        transition: 'opacity 0.3s ease',
        pointerEvents: 'none',
    },

    playIcon: {
        width: 0,
        height: 0,
        borderTop: '18px solid transparent',
        borderBottom: '18px solid transparent',
        borderLeft: '30px solid rgba(212,175,55,0.92)',
        filter: 'drop-shadow(0 0 8px rgba(212,175,55,0.7))',
        ml: '4px',
    },

    cardContent: {
        py: 1.2,
        px: 2,
        '&:last-child': { pb: 1.4 },
    },

    cardTitle: {
        color: 'rgba(212,175,55,0.85)',
        fontFamily: '"Cinzel", serif',
        fontSize: '0.78rem',
        letterSpacing: '0.04em',
        textAlign: 'center',
    },
}
