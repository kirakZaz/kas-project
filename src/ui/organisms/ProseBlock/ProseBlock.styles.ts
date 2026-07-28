export const styles = {
    wrap: {
        maxWidth: 820,
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
    } satisfies any,

    eyebrow: {
        fontFamily: "'Raleway', sans-serif",
        fontSize: '0.75rem',
        fontWeight: 700,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: '#c4a44a',
        textAlign: 'center',
        mb: 1,
    } satisfies any,

    paragraph: {
        fontFamily: "'Raleway', sans-serif",
        fontSize: { xs: '0.95rem', md: '1.02rem' },
        lineHeight: 1.85,
        color: '#c9c4be',
        textWrap: 'pretty',
    } satisfies any,
}
