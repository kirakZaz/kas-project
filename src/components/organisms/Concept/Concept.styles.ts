
export const styles = {
    // ─── Main section Box ────────────────────────────────────────────────────
    section: {
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4, md: 6 },
        maxWidth: 1280,
        mx: 'auto',
    },

    // ─── Tabs bar wrapper Box ────────────────────────────────────────────────
    tabsBarBox: {
        mb: 4,
        borderBottom: '1px solid rgba(212,175,55,0.2)',
    },

    // ─── Tabs component ──────────────────────────────────────────────────────
    tabs: {
        minHeight: 44,
        '& .MuiTabs-indicator': {
            backgroundColor: '#D4AF37',
            height: 2,
        },
        '& .MuiTabs-scrollButtons': {
            color: 'rgba(212,175,55,0.7)',
        },
    },

    // ─── Individual Tab ──────────────────────────────────────────────────────
    tab: {
        fontFamily: 'Raleway, sans-serif',
        fontWeight: 600,
        fontSize: '0.82rem',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'rgba(200,180,120,0.65)',
        minHeight: 44,
        px: 2,
        transition: 'color 0.2s ease',
        '&.Mui-selected': {
            color: '#D4AF37',
        },
        '&:hover': {
            color: 'rgba(212,175,55,0.9)',
        },
    },

    // ─── TiltCard — Card ─────────────────────────────────────────────────────
    tiltCard: {
        position: 'relative',
        cursor: 'pointer',
        background: 'rgba(18, 10, 4, 0.72)',
        border: '1px solid rgba(212, 175, 55, 0.18)',
        borderRadius: '10px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        willChange: 'transform',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.18s ease, box-shadow 0.18s ease',
        boxShadow: '0 4px 24px rgba(0,0,0,0.55)',
        '&:hover': {
            boxShadow: '0 12px 40px rgba(212,175,55,0.22), 0 4px 24px rgba(0,0,0,0.7)',
            borderColor: 'rgba(212,175,55,0.45)',
        },
    },

    // ─── TiltCard — CardMedia ────────────────────────────────────────────────
    tiltCardMedia: {
        aspectRatio: '4/3',
        width: '100%',
        objectFit: 'cover',
        objectPosition: 'center top',
        display: 'block',
        flexShrink: 0,
    },

    // ─── TiltCard — CardContent ──────────────────────────────────────────────
    tiltCardContent: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        py: '10px !important',
        px: 1.5,
        background: 'rgba(10, 5, 2, 0.55)',
        borderTop: '1px solid rgba(212,175,55,0.12)',
    },

    // ─── TiltCard — title Typography ─────────────────────────────────────────
    tiltCardTitle: {
        color: 'rgba(240,220,170,0.9)',
        fontFamily: 'Raleway, sans-serif',
        fontWeight: 500,
        fontSize: '0.78rem',
        letterSpacing: '0.03em',
        lineHeight: 1.35,
    },
}
