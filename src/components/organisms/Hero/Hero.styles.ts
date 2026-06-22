export const styles = {
    wrapper: {
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: { xs: 3, md: 6 },
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at center, rgba(196, 162, 101, 0.05) 0%, transparent 70%)'
    },
    featherDecor: {
        position: 'absolute',
        top: '10%',
        right: '15%',
        transform: 'rotate(25deg)',
        pointerEvents: 'none'
    },
    title: {
        color: 'primary.main',
        fontSize: { xs: '3rem', md: '5rem' },
        mb: 1
    },
    subtitle: {
        color: 'text.secondary',
        fontWeight: 400,
        letterSpacing: '0.06em',
        mb: 3
    },
    description: {
        color: 'text.secondary',
        maxWidth: 550,
        mb: 4
    },
    cta: {
        px: 5,
        py: 1.5,
        fontSize: '1rem'
    }
}
