import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#c4a265',
            light: '#d4b87a',
            dark: '#9a7d4e'
        },
        secondary: {
            main: '#6b8f9e',
            light: '#8bb0bf',
            dark: '#4a6e7d'
        },
        background: {
            default: '#0a0a0f',
            paper: '#12121a'
        },
        text: {
            primary: '#e8e4df',
            secondary: '#9a9590'
        },
        divider: 'rgba(196, 162, 101, 0.15)'
    },
    typography: {
        fontFamily: '"Raleway", "Segoe UI", sans-serif',
        h1: {
            fontSize: '3.5rem',
            fontWeight: 800,
            letterSpacing: '0.04em',
            textTransform: 'uppercase' as const
        },
        h2: {
            fontSize: '2.2rem',
            fontWeight: 700,
            letterSpacing: '0.02em'
        },
        h3: {
            fontSize: '1.5rem',
            fontWeight: 600
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.7
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.6
        }
    },
    shape: {
        borderRadius: 4
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    borderRadius: 2,
                    '&.MuiButton-containedPrimary': {
                        background: 'linear-gradient(135deg, #c4a265 0%, #9a7d4e 100%)',
                        '&:hover': {
                            background: 'linear-gradient(135deg, #d4b87a 0%, #c4a265 100%)'
                        }
                    }
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#16161f',
                    border: '1px solid rgba(196, 162, 101, 0.1)',
                    borderRadius: 8
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#0a0a0f',
                    border: '1px solid rgba(196, 162, 101, 0.2)'
                }
            }
        }
    }
})

export default theme
