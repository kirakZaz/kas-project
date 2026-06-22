export const styles = {
    section: {
        py: 10,
        px: { xs: 3, md: 6 },
        maxWidth: 1000,
        mx: 'auto'
    },
    grid: {
        justifyContent: 'center'
    },
    card: {
        textAlign: 'center',
        transition: 'all 200ms ease',
        '&:hover': {
            borderColor: 'primary.main'
        }
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 4
    },
    avatar: {
        width: 72,
        height: 72,
        bgcolor: 'primary.main',
        color: 'background.default',
        fontWeight: 700,
        fontSize: '1.5rem',
        mb: 2
    },
    name: {
        color: 'text.primary',
        mb: 0.5
    },
    role: {
        color: 'text.secondary'
    }
}
