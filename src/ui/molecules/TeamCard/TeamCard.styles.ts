export const styles = {
    card: {
        height: '100%',
        p: { xs: 2.5, md: 3 },
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
    } satisfies any,

    header: {
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
    } satisfies any,

    avatar: {
        width: 48,
        height: 48,
        borderRadius: '50%',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Cinzel', serif",
        fontWeight: 700,
        fontSize: '0.95rem',
        color: '#0e0e18',
        background: 'linear-gradient(135deg, #d4b87a 0%, #9a7d4e 100%)',
        boxShadow: '0 0 18px rgba(196,164,74,0.35)',
    } satisfies any,

    identity: {
        display: 'flex',
        flexDirection: 'column',
    } satisfies any,

    name: {
        fontFamily: "'Cinzel', serif",
        fontSize: '1.05rem',
        fontWeight: 700,
        color: '#e8e4df',
        letterSpacing: '0.03em',
        lineHeight: 1.2,
    } satisfies any,

    role: {
        fontFamily: "'Raleway', sans-serif",
        fontSize: '0.72rem',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: '#c4a44a',
    } satisfies any,

    chips: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 0.75,
    } satisfies any,

    chip: {
        fontFamily: "'Raleway', sans-serif",
        fontSize: '0.68rem',
        fontWeight: 600,
        letterSpacing: '0.02em',
        color: '#c9c4be',
        bgcolor: 'rgba(196,164,74,0.06)',
        border: '1px solid rgba(196,164,74,0.18)',
        borderRadius: '2px',
        height: 24,
    } satisfies any,
}
