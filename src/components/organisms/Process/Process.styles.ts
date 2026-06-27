
const GOLD = '#c4a44a'
const GOLD_GLOW = '0 0 12px rgba(196,164,74,0.6), 0 0 24px rgba(196,164,74,0.3)'

export const styles = {
    // ── SprintImage ───────────────────────────────────────────────────────────
    sprintImageBase: {
        width: '100%',
        borderRadius: '6px',
        border: `1px solid rgba(196,164,74,0.2)`,
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
        '&:hover': {
            transform: 'scale(1.03)',
            boxShadow: GOLD_GLOW,
            borderColor: GOLD,
        },
    },
    sprintImageWide: {
        maxHeight: 200,
        objectFit: 'contain',
        bgcolor: 'rgba(0,0,0,0.3)',
    },
    sprintImageThumb: {
        aspectRatio: '4/3',
        objectFit: 'cover',
    },

    // ── SprintCard – Card root ────────────────────────────────────────────────
    sprintCard: {
        background: 'linear-gradient(135deg, rgba(18,15,10,0.95) 0%, rgba(28,22,12,0.95) 100%)',
        border: `1px solid rgba(196,164,74,0.25)`,
        borderRadius: '12px',
        overflow: 'hidden',
        backdropFilter: 'blur(8px)',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
            borderColor: `rgba(196,164,74,0.55)`,
            boxShadow: `0 8px 40px rgba(196,164,74,0.12)`,
        },
    },

    // ── SprintCard – header bar ───────────────────────────────────────────────
    sprintCardHeader: {
        px: 3,
        py: 2,
        borderBottom: `1px solid rgba(196,164,74,0.2)`,
        background: `linear-gradient(90deg, rgba(196,164,74,0.08) 0%, transparent 100%)`,
        display: 'flex',
        alignItems: 'baseline',
        gap: 2,
        flexWrap: 'wrap',
    },
    sprintCardTitle: {
        fontFamily: 'Cinzel, serif',
        fontWeight: 700,
        fontSize: { xs: '1rem', md: '1.15rem' },
        color: GOLD,
        letterSpacing: '0.08em',
        textShadow: `0 0 8px rgba(196,164,74,0.5)`,
    },
    sprintCardTitleSubSpan: {
        fontWeight: 400,
    },
    sprintCardDates: {
        fontFamily: 'Cinzel, serif',
        fontSize: '0.78rem',
        color: 'rgba(196,164,74,0.6)',
        letterSpacing: '0.06em',
    },

    // ── SprintCard – body ─────────────────────────────────────────────────────
    sprintCardBody: {
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 2.5,
    },
    sprintCardSectionLabel: {
        fontFamily: 'Cinzel, serif',
        fontSize: '0.7rem',
        color: 'rgba(196,164,74,0.5)',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        mb: 1,
    },
    sprintCardImageGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 1.5,
    },
    sprintCardDescription: {
        color: 'rgba(255,255,255,0.72)',
        lineHeight: 1.75,
        fontSize: '0.9rem',
        borderLeft: `2px solid rgba(196,164,74,0.35)`,
        pl: 2,
    },

    // ── AnimatedTimelineLine ──────────────────────────────────────────────────
    timelineLineTrack: {
        position: 'absolute',
        left: '50%',
        top: 0,
        bottom: 0,
        width: '2px',
        transform: 'translateX(-50%)',
        background: 'rgba(196,164,74,0.12)',
        zIndex: 0,
    },

    // ── SprintRow – mobile ────────────────────────────────────────────────────
    sprintRowMobileOuter: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mb: 5,
        position: 'relative',
    },
    sprintRowMobileInner: {
        display: 'flex',
        alignItems: 'flex-start',
        width: '100%',
        gap: 2,
    },
    sprintRowMobileDotCol: {
        position: 'relative',
        width: 20,
        flexShrink: 0,
        mt: 2,
    },
    sprintRowMobileCardCol: {
        flex: 1,
    },

    // ── SprintRow – desktop ───────────────────────────────────────────────────
    sprintRowDesktopGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 48px 1fr',
        alignItems: 'center',
        mb: { md: 8 },
        position: 'relative',
        minHeight: '60px',
    },
    sprintRowLeftSlot: {
        pr: 3,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    sprintRowCenterDot: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        pt: 2,
    },
    sprintRowRightSlot: {
        pl: 3,
        display: 'flex',
        justifyContent: 'flex-start',
    },

    // ── Process – main section ────────────────────────────────────────────────
    processSection: {
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 4, md: 6 },
        maxWidth: '1200px',
        mx: 'auto',
    },
    processHeadingBox: {
        textAlign: 'center',
        mb: { xs: 6, md: 10 },
    },
    processHeadingTitle: {
        fontFamily: 'Cinzel, serif',
        fontWeight: 900,
        fontSize: { xs: '2rem', sm: '2.6rem', md: '3.2rem' },
        color: GOLD,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        textShadow: GOLD_GLOW,
        mb: 1.5,
    },
    processHeadingDivider: {
        width: 80,
        height: 2,
        background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
        mx: 'auto',
        mb: 2,
        boxShadow: GOLD_GLOW,
    },
    processHeadingSubtitle: {
        fontFamily: 'Cinzel, serif',
        fontSize: { xs: '0.85rem', md: '0.95rem' },
        color: 'rgba(196,164,74,0.6)',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
    },
    timelineContainerDesktop: {
        position: 'relative',
    },
    timelineContainerMobile: {
        position: 'relative',
        pl: '28px',
        '&::before': {
            content: '""',
            position: 'absolute',
            left: '9px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: `linear-gradient(180deg, ${GOLD} 0%, rgba(196,164,74,0.15) 100%)`,
            boxShadow: GOLD_GLOW,
        },
    },
}
