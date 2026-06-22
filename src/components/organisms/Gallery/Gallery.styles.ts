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
            fontWeight: 600
        },
        '& .Mui-selected': {
            color: 'primary.main'
        },
        '& .MuiTabs-indicator': {
            bgcolor: 'primary.main'
        }
    },
    tab: {},
    card: {
        cursor: 'pointer',
        transition: 'all 200ms ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
            borderColor: 'primary.main',
            transform: 'translateY(-4px)'
        }
    },
    videoCard: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    video: {
        width: '100%',
        height: 280,
        objectFit: 'cover',
        bgcolor: '#0d0d14',
        display: 'block'
    },
    cardImage: {
        height: 220,
        objectFit: 'cover',
        bgcolor: '#1a1a24',
        flex: 'none'
    },
    cardContent: {
        py: 1.5
    },
    cardLabel: {
        color: 'text.secondary',
        textAlign: 'center'
    }
}
