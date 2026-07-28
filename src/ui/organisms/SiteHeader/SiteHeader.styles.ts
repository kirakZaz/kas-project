export const styles = {
    appBar: {
        bgcolor: 'rgba(6,6,12,0.82)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(196,164,74,0.12)',
        zIndex: 1100,
    } satisfies any,

    toolbar: {
        maxWidth: 1400,
        mx: 'auto',
        width: '100%',
        justifyContent: 'space-between',
        py: 0.5,
        gap: 1,
    } satisfies any,

    logo: {
        fontFamily: "'Cinzel', serif",
        fontWeight: 900,
        fontSize: '1.3rem',
        color: '#c4a44a',
        letterSpacing: '0.15em',
        textShadow: '0 0 20px rgba(196,164,74,0.3)',
        textDecoration: 'none',
        cursor: 'none',
    } satisfies any,

    navBox: {
        display: { xs: 'none', md: 'flex' },
        gap: 0.5,
    } satisfies any,

    navLink: {
        color: '#8a8580',
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        px: 2,
        py: 0.6,
        borderRadius: '3px',
        transition: 'color 0.25s ease, background-color 0.25s ease',
        // Hover + active: full-width gold fill with black text.
        '&:hover, &.active, &.Mui-focusVisible': {
            color: '#06060c !important',
            backgroundColor: '#c4a44a !important',
        },
    } satisfies any,

    actionsBox: {
        display: 'flex',
        alignItems: 'center',
        gap: 1,
    } satisfies any,

    playButton: {
        fontSize: '0.7rem',
        px: 2.5,
        py: 0.8,
        display: { xs: 'none', sm: 'flex' },
    } satisfies any,

    menuButton: {
        display: { xs: 'inline-flex', md: 'none' },
        color: '#c4a44a',
    } satisfies any,

    menuPaper: {
        bgcolor: 'rgba(10,10,18,0.97)',
        border: '1px solid rgba(196,164,74,0.18)',
        backdropFilter: 'blur(12px)',
        mt: 1,
    } satisfies any,

    menuItem: {
        fontFamily: "'Raleway', sans-serif",
        fontSize: '0.85rem',
        fontWeight: 600,
        letterSpacing: '0.08em',
        color: '#c9c4be',
        '&.active': { color: '#c4a44a' },
    } satisfies any,
}
