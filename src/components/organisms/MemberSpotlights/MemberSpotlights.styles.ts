// Soft radial so transparent PNG renders (elements, coins, runes) read against
// the dark card without looking like they float in a void.
const TILE_BG =
    'radial-gradient(circle at 50% 42%, rgba(196,164,74,0.07) 0%, rgba(0,0,0,0.6) 72%)'

export const styles = {
    section: {
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 4, md: 8 },
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(5,4,2,0) 0%, rgba(9,7,3,0.55) 100%)',
    },

    // ── tabs ────────────────────────────────────────────────────────
    tabsBarBox: {
        mt: { xs: 4, md: 5 },
        mb: 4,
        borderBottom: '1px solid rgba(196,164,74,0.2)',
    },
    tabs: (accent: string) => ({
        minHeight: 48,
        '& .MuiTabs-indicator': { backgroundColor: accent, height: 2 },
        '& .MuiTabs-scrollButtons': { color: 'rgba(196,164,74,0.7)' },
    }),
    tab: (accent: string) => ({
        fontFamily: "'Cinzel', serif",
        fontWeight: 600,
        fontSize: { xs: '0.78rem', md: '0.92rem' },
        letterSpacing: '0.05em',
        textTransform: 'none',
        color: 'rgba(200,180,120,0.6)',
        minHeight: 48,
        px: { xs: 1.5, md: 2.5 },
        transition: 'color 0.2s ease',
        '&.Mui-selected': { color: accent },
        '&:hover': { color: 'rgba(212,175,55,0.9)' },
    }),

    // ── member header ───────────────────────────────────────────────
    header: {
        maxWidth: 760,
        mb: { xs: 3.5, md: 4.5 },
    },
    role: (accent: string) => ({
        display: 'block',
        color: accent,
        fontSize: '0.72rem',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        mb: 1,
    }),
    name: (accent: string) => ({
        fontFamily: "'Cinzel', serif",
        fontWeight: 700,
        color: accent,
        fontSize: { xs: '1.55rem', md: '2rem' },
        lineHeight: 1.1,
        mb: 2,
    }),
    lead: {
        color: 'rgba(255,255,255,0.72)',
        fontSize: { xs: '0.95rem', md: '1.02rem' },
        lineHeight: 1.85,
        mb: 2.5,
    },
    focusRow: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1,
    },
    focusChip: (accent: string) => ({
        bgcolor: 'rgba(196,164,74,0.06)',
        color: 'rgba(255,255,255,0.82)',
        border: `1px solid ${accent}44`,
        fontSize: '0.7rem',
        height: 26,
        '& .MuiChip-label': { px: 1.25 },
    }),
    countTag: {
        color: 'rgba(255,255,255,0.4)',
        fontSize: '0.75rem',
        letterSpacing: '0.04em',
        mb: 2,
    },

    // ── carousel card ───────────────────────────────────────────────
    card: (accent: string) => ({
        position: 'relative',
        cursor: 'pointer',
        background: 'rgba(18, 10, 4, 0.72)',
        border: '1px solid rgba(196,164,74,0.18)',
        borderRadius: '10px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxShadow: '0 4px 24px rgba(0,0,0,0.55)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
        '&:hover': {
            transform: 'translateY(-5px)',
            borderColor: `${accent}73`,
            boxShadow: `0 12px 40px rgba(0,0,0,0.7), 0 0 20px ${accent}2e`,
        },
    }),
    cardMediaBox: {
        aspectRatio: '4 / 3',
        width: '100%',
        flexShrink: 0,
        overflow: 'hidden',
    },
    cardImg: (fit: 'cover' | 'contain', soft?: boolean) => ({
        width: '100%',
        height: '100%',
        objectFit: fit,
        objectPosition: fit === 'cover' ? 'center top' : 'center',
        display: 'block',
        background: soft ? TILE_BG : 'transparent',
        p: fit === 'contain' ? 1 : 0,
    }),
    cardContent: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        py: 1.25,
        px: 1.5,
        background: 'rgba(10, 5, 2, 0.55)',
        borderTop: '1px solid rgba(196,164,74,0.12)',
    },
    cardTitle: {
        color: 'rgba(240,220,170,0.9)',
        fontWeight: 500,
        fontSize: '0.78rem',
        letterSpacing: '0.02em',
        lineHeight: 1.35,
    },

    // ── video card ──────────────────────────────────────────────────
    videoBadge: (accent: string) => ({
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
        px: 1,
        py: 0.4,
        borderRadius: 1,
        fontSize: '0.62rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: accent,
        background: 'rgba(6,6,12,0.72)',
        border: `1px solid ${accent}66`,
        backdropFilter: 'blur(4px)',
        pointerEvents: 'none',
        '& svg': { fontSize: 15 },
    }),
}
