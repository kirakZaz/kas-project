
export const styles = {
    wrapper: {
        textAlign: 'center',
        mb: 6,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1.5,
    } satisfies any,

    title: {
        fontFamily: "'Cinzel', serif",
        color: '#c4a44a',
        fontSize: { xs: '1.8rem', sm: '2.4rem', md: '2.8rem' },
        fontWeight: 700,
        letterSpacing: '0.08em',
        textShadow: '0 0 12px rgba(196,164,74,0.55), 0 0 28px rgba(196,164,74,0.25)',
        lineHeight: 1.2,
        m: 0,
    } satisfies any,

    decorLine: {
        position: 'relative',
        width: '60px',
        height: '2px',
        transformOrigin: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    } satisfies any,

    decorLineLeft: {
        position: 'absolute',
        left: 0,
        right: '50%',
        top: 0,
        height: '2px',
        background: 'linear-gradient(to right, rgba(196,164,74,0.2), rgba(196,164,74,0.9))',
        mr: '6px',
    } satisfies any,

    decorLineRight: {
        position: 'absolute',
        left: '50%',
        right: 0,
        top: 0,
        height: '2px',
        background: 'linear-gradient(to left, rgba(196,164,74,0.2), rgba(196,164,74,0.9))',
        ml: '6px',
    } satisfies any,

    diamond: {
        position: 'relative',
        zIndex: 1,
        width: '8px',
        height: '8px',
        backgroundColor: '#c4a44a',
        transform: 'rotate(45deg)',
        boxShadow: '0 0 6px rgba(196,164,74,0.7)',
        flexShrink: 0,
    } satisfies any,

    subtitle: {
        fontFamily: "'Raleway', sans-serif",
        color: '#8a8580',
        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' },
        fontWeight: 400,
        letterSpacing: '0.04em',
        maxWidth: '560px',
        lineHeight: 1.7,
        mt: 0.5,
    } satisfies any,
}
