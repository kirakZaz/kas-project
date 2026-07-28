export const styles = {
    hero: {
        position: 'relative',
        minHeight: { xs: '58vh', md: '66vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 2.5, md: 4 },
        pt: { xs: 12, md: 14 },
        pb: { xs: 6, md: 8 },
        textAlign: 'center',
        overflow: 'hidden',
        '&::after': {
            content: '""',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '40%',
            background: 'linear-gradient(to top, #06060c, transparent)',
            pointerEvents: 'none',
        },
    } satisfies any,

    inner: {
        position: 'relative',
        zIndex: 1,
        maxWidth: 900,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2.5,
    } satisfies any,

    eyebrow: {
        fontFamily: "'Raleway', sans-serif",
        fontSize: { xs: '0.75rem', md: '0.85rem' },
        fontWeight: 700,
        letterSpacing: '0.28em',
        textTransform: 'uppercase',
        color: '#c4a44a',
    } satisfies any,

    title: {
        fontFamily: "'Cinzel', serif",
        fontSize: { xs: '2.4rem', sm: '3.2rem', md: '4.2rem' },
        fontWeight: 900,
        letterSpacing: '0.06em',
        color: '#e8e4df',
        lineHeight: 1.1,
        textShadow: '0 0 30px rgba(196,164,74,0.35), 0 0 60px rgba(196,164,74,0.15)',
        m: 0,
    } satisfies any,

    subtitle: {
        fontFamily: "'Raleway', sans-serif",
        fontSize: { xs: '1rem', md: '1.15rem' },
        lineHeight: 1.7,
        color: '#a8a29b',
        maxWidth: 680,
        textWrap: 'balance',
    } satisfies any,

    metaWrap: {
        mt: 0.5,
    } satisfies any,

    actions: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1.5,
        justifyContent: 'center',
        mt: 1,
    } satisfies any,
}
