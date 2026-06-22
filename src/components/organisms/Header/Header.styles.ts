import type { Theme } from '@mui/material/styles'

export const styles = {
    appBar: {
        bgcolor: 'rgba(10, 10, 15, 0.9)',
        backdropFilter: 'blur(12px)',
        borderBottom: (t: Theme) => `1px solid ${t.palette.divider}`
    },
    toolbar: {
        maxWidth: 1200,
        width: '100%',
        mx: 'auto',
        px: { xs: 2, md: 3 }
    },
    logo: {
        fontWeight: 800,
        letterSpacing: '0.12em',
        color: 'primary.main',
        mr: 4
    },
    nav: {
        display: { xs: 'none', md: 'flex' },
        gap: 1,
        flex: 1
    },
    navButton: {
        color: 'text.secondary',
        fontSize: '0.8rem',
        '&:hover': {
            color: 'primary.main'
        }
    },
    playButton: {
        px: 3,
        py: 1
    }
}
