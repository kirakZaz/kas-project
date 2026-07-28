export const styles = {
    wrap: {
        maxWidth: 640,
        mx: 'auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2.5,
        py: { xs: 4, md: 6 },
    } satisfies any,

    icon: {
        fontSize: '3rem',
        color: '#c4a44a',
        opacity: 0.85,
    } satisfies any,

    title: {
        fontFamily: "'Cinzel', serif",
        fontSize: { xs: '1.8rem', md: '2.4rem' },
        fontWeight: 700,
        color: '#c4a44a',
        letterSpacing: '0.04em',
    } satisfies any,

    message: {
        fontFamily: "'Raleway', sans-serif",
        fontSize: { xs: '0.95rem', md: '1.05rem' },
        lineHeight: 1.8,
        color: '#a8a29b',
        textWrap: 'balance',
    } satisfies any,

    metaWrap: {
        mt: 1,
    } satisfies any,
}
