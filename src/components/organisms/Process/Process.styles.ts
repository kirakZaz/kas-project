export const styles = {
    section: {
        py: 10,
        px: { xs: 3, md: 6 },
        maxWidth: 1000,
        mx: 'auto'
    },
    timeline: {
        display: 'flex',
        flexDirection: 'column'
    },
    timelineItem: {
        position: 'relative',
        pl: 5,
        pb: 4
    },
    dot: {
        position: 'absolute',
        left: 0,
        top: 8,
        width: 14,
        height: 14,
        borderRadius: '50%',
        bgcolor: 'primary.main',
        border: '3px solid',
        borderColor: 'background.default',
        zIndex: 1
    },
    line: {
        position: 'absolute',
        left: 6,
        top: 22,
        bottom: 0,
        width: 2,
        bgcolor: 'divider'
    },
    card: {
        ml: 1,
        cursor: 'pointer',
        transition: 'all 200ms ease',
        '&:hover': {
            borderColor: 'primary.main',
            transform: 'translateY(-2px)'
        }
    },
    cardInner: {
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }
    },
    cardImage: {
        width: { xs: '100%', sm: 280 },
        height: { xs: 180, sm: 'auto' },
        minHeight: { sm: 160 },
        objectFit: 'cover',
        bgcolor: '#1a1a24',
        flexShrink: 0
    },
    cardContent: {
        flex: 1,
        py: 2
    },
    weekLabel: {
        color: 'primary.main',
        fontWeight: 700,
        letterSpacing: '0.04em',
        mb: 0.5
    },
    cardTitle: {
        color: 'text.primary',
        mb: 1
    },
    cardDesc: {
        color: 'text.secondary'
    }
}
