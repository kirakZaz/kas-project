const GOLD = '#c4a44a'
const GOLD_DIM = 'rgba(196, 164, 74, 0.15)'
const GOLD_BORDER = 'rgba(196, 164, 74, 0.3)'
const CARD_BG = 'rgba(10, 8, 5, 0.85)'

export const styles = {
    section: {
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 4, md: 8 },
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(5,4,2,0) 0%, rgba(8,6,3,0.6) 100%)',
    },
    grid: {
        mt: 2,
    },
    memberCard: {
        background: CARD_BG,
        border: `1px solid ${GOLD_BORDER}`,
        borderRadius: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backdropFilter: 'blur(8px)',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        '&:hover': {
            borderColor: GOLD,
            boxShadow: `0 0 24px rgba(196, 164, 74, 0.2)`,
        },
    },
    memberCardContent: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        p: 3,
        flex: 1,
    },
    memberHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: 2,
    },
    avatar: {
        width: 56,
        height: 56,
        bgcolor: GOLD_DIM,
        border: `2px solid ${GOLD}`,
        color: GOLD,
        fontFamily: "'Cinzel', serif",
        fontWeight: 700,
        fontSize: '1.1rem',
    },
    memberName: {
        fontFamily: "'Cinzel', serif",
        fontSize: '1.15rem',
        fontWeight: 700,
        color: GOLD,
        lineHeight: 1.2,
    },
    memberRole: {
        color: 'rgba(255,255,255,0.55)',
        fontSize: '0.78rem',
        fontStyle: 'italic',
        mt: 0.25,
    },
    contributionsLabel: {
        color: GOLD,
        fontSize: '0.65rem',
        letterSpacing: '0.12em',
        display: 'block',
        mb: 1,
    },
    chipContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 0.75,
    },
    chip: {
        bgcolor: GOLD_DIM,
        color: 'rgba(255,255,255,0.85)',
        border: `1px solid ${GOLD_BORDER}`,
        fontSize: '0.7rem',
        height: 24,
        '& .MuiChip-label': { px: 1 },
    },
    carouselWrapper: {
        mt: 6,
    },
    carouselHeaderBox: {
        mb: 3,
    },
    carouselTitle: {
        fontFamily: "'Cinzel', serif",
        color: GOLD,
        fontSize: { xs: '1.1rem', md: '1.35rem' },
        fontWeight: 600,
        mb: 0.5,
    },
    carouselSubtitle: {
        color: 'rgba(255,255,255,0.45)',
        fontSize: '0.85rem',
    },
    carouselDivider: {
        mt: 1.5,
        width: 48,
        height: 2,
        bgcolor: GOLD,
        borderRadius: 1,
    },
    carouselImageBox: {
        height: { xs: 180, sm: 210, md: 240 },
        borderRadius: 2,
        overflow: 'hidden',
        border: `1px solid ${GOLD_BORDER}`,
        bgcolor: 'rgba(0,0,0,0.5)',
        transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
        '&:hover': {
            borderColor: GOLD,
            transform: 'scale(1.03)',
            boxShadow: '0 0 18px rgba(196,164,74,0.25)',
        },
    },
}
