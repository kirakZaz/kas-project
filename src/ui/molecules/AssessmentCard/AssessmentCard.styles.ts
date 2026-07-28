export const styles = {
    card: {
        height: '100%',
        p: { xs: 2.5, md: 3 },
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
        textDecoration: 'none',
    } satisfies any,

    topRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 1,
    } satisfies any,

    label: {
        fontFamily: "'Raleway', sans-serif",
        fontSize: '0.72rem',
        fontWeight: 700,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: '#8a8580',
    } satisfies any,

    title: {
        fontFamily: "'Cinzel', serif",
        fontSize: '1.3rem',
        fontWeight: 700,
        color: '#c4a44a',
        letterSpacing: '0.03em',
    } satisfies any,

    blurb: {
        fontFamily: "'Raleway', sans-serif",
        fontSize: '0.88rem',
        lineHeight: 1.65,
        color: '#c9c4be',
        flexGrow: 1,
    } satisfies any,

    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 1,
        mt: 1,
        pt: 1.5,
        borderTop: '1px solid rgba(196,164,74,0.12)',
    } satisfies any,

    weight: {
        fontFamily: "'Raleway', sans-serif",
        fontSize: '0.8rem',
        fontWeight: 600,
        color: '#d4b87a',
    } satisfies any,

    enter: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.5,
        fontFamily: "'Raleway', sans-serif",
        fontSize: '0.75rem',
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: '#c4a44a',
    } satisfies any,
}
