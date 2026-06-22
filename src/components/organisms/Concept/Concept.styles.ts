export const styles = {
    section: {
        py: 10,
        px: { xs: 3, md: 6 },
        maxWidth: 1200,
        mx: 'auto'
    },
    tabsWrapper: {
        display: 'flex',
        justifyContent: 'center',
        mb: 4
    },
    tabs: {
        '& .MuiTab-root': {
            color: 'text.secondary',
            fontWeight: 600,
            letterSpacing: '0.04em'
        },
        '& .Mui-selected': {
            color: 'primary.main'
        },
        '& .MuiTabs-indicator': {
            bgcolor: 'primary.main'
        }
    },
    tab: {},
    grid: {},
    card: {
        transition: 'all 200ms ease',
        cursor: 'pointer',
        '&:hover': {
            borderColor: 'primary.main',
            transform: 'translateY(-4px)'
        }
    },
    cardImage: {
        height: 280,
        objectFit: 'contain',
        bgcolor: '#1a1a24',
        p: 1
    },
    cardContent: {
        py: 1.5
    },
    cardLabel: {
        color: 'text.secondary',
        textAlign: 'center'
    }
}
