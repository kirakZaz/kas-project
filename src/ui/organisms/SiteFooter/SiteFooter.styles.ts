export const styles = {
    footer: {
        borderTop: '1px solid rgba(196,164,74,0.12)',
        bgcolor: 'rgba(6,6,12,0.6)',
        px: { xs: 2.5, md: 4 },
        py: { xs: 4, md: 5 },
    } satisfies any,

    inner: {
        maxWidth: 1200,
        mx: 'auto',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'flex-start', sm: 'center' },
        gap: 2,
    } satisfies any,

    brand: {
        fontFamily: "'Cinzel', serif",
        fontSize: '1.1rem',
        fontWeight: 700,
        color: '#c4a44a',
        letterSpacing: '0.1em',
    } satisfies any,

    subject: {
        fontFamily: "'Raleway', sans-serif",
        fontSize: '0.8rem',
        color: '#8a8580',
        mt: 0.5,
    } satisfies any,

    nav: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
    } satisfies any,

    link: {
        fontFamily: "'Raleway', sans-serif",
        fontSize: '0.78rem',
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: '#8a8580',
        textDecoration: 'none',
        transition: 'color 0.3s',
        '&:hover': { color: '#c4a44a' },
        '&.active': { color: '#c4a44a' },
    } satisfies any,

    copyright: {
        fontFamily: "'Raleway', sans-serif",
        fontSize: '0.72rem',
        color: '#5a564f',
    } satisfies any,
}
