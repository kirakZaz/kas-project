export const styles = {
    section: {
        py: 10,
        px: { xs: 3, md: 6 },
        maxWidth: 1200,
        mx: 'auto'
    },
    grid: {
        justifyContent: 'center'
    },
    card: {
        height: '100%',
        transition: 'all 200ms ease',
        '&:hover': {
            borderColor: 'primary.main',
            transform: 'translateY(-4px)'
        }
    },
    cardTitle: {
        color: 'primary.main',
        mb: 1
    },
    cardDesc: {
        color: 'text.secondary'
    }
}
