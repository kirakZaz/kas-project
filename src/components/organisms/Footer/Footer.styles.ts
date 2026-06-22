import type { Theme } from '@mui/material/styles'

export const styles = {
    footer: {
        py: 4,
        px: 3,
        textAlign: 'center',
        borderTop: (t: Theme) => `1px solid ${t.palette.divider}`
    },
    text: {
        color: 'text.secondary',
        mb: 0.5
    },
    subtext: {
        color: 'text.secondary',
        opacity: 0.6,
        fontSize: '0.75rem'
    }
}
