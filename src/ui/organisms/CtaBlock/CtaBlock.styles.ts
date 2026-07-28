export const styles = {
    wrap: {
        maxWidth: 720,
        mx: 'auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
    } satisfies any,

    title: {
        fontFamily: "'Cinzel', serif",
        fontSize: { xs: '1.6rem', md: '2.1rem' },
        fontWeight: 700,
        color: '#c4a44a',
        letterSpacing: '0.03em',
    } satisfies any,

    subtitle: {
        fontFamily: "'Raleway', sans-serif",
        fontSize: { xs: '0.95rem', md: '1.05rem' },
        lineHeight: 1.7,
        color: '#a8a29b',
        textWrap: 'balance',
    } satisfies any,

    actions: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1.5,
        justifyContent: 'center',
        mt: 1,
    } satisfies any,
}
