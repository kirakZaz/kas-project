export const styles = {
    card: {
        height: '100%',
        p: { xs: 2.5, md: 3 },
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
    } satisfies any,

    title: {
        fontFamily: "'Cinzel', serif",
        fontSize: '1.15rem',
        fontWeight: 700,
        color: '#c4a44a',
        letterSpacing: '0.04em',
    } satisfies any,

    description: {
        fontFamily: "'Raleway', sans-serif",
        fontSize: '0.92rem',
        lineHeight: 1.7,
        color: '#c9c4be',
    } satisfies any,

    list: {
        m: 0,
        pl: 2.2,
        display: 'flex',
        flexDirection: 'column',
        gap: 0.6,
    } satisfies any,

    listItem: {
        fontFamily: "'Raleway', sans-serif",
        fontSize: '0.85rem',
        lineHeight: 1.55,
        color: '#8a8580',
    } satisfies any,
}
