import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#c4a44a',
            light: '#d4b87a',
            dark: '#9a7d4e'
        },
        secondary: {
            main: '#00e5ff',
            light: '#6effff',
            dark: '#00b2cc'
        },
        background: {
            default: '#06060c',
            paper: '#0e0e18'
        },
        text: {
            primary: '#e8e4df',
            secondary: '#8a8580'
        },
        divider: 'rgba(196, 164, 74, 0.12)'
    },
    typography: {
        fontFamily: '"Raleway", "Segoe UI", sans-serif',
        h1: {
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 900,
            letterSpacing: '0.12em',
            textTransform: 'uppercase' as const
        },
        h2: {
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 700,
            letterSpacing: '0.04em'
        },
        h3: {
            fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
            fontWeight: 600
        },
        h4: {
            fontSize: '1.1rem',
            fontWeight: 600,
            letterSpacing: '0.02em'
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.8
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
        MuiCssBaseline: {
            styleOverrides: {
                '*': {
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#c4a44a33 transparent',
                },
                '*::-webkit-scrollbar': {
                    width: 6,
                },
                '*::-webkit-scrollbar-track': {
                    background: 'transparent',
                },
                '*::-webkit-scrollbar-thumb': {
                    background: '#c4a44a33',
                    borderRadius: 3,
                },
                html: {
                    scrollBehavior: 'smooth',
                },
                body: {
                    overflowX: 'hidden',
                },
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    borderRadius: 2,
                    position: 'relative' as const,
                    overflow: 'hidden',
                    '&.MuiButton-containedPrimary': {
                        background: 'linear-gradient(135deg, #c4a44a 0%, #9a7d4e 100%)',
                        boxShadow: '0 0 20px rgba(196, 164, 74, 0.3)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            background: 'linear-gradient(135deg, #d4b87a 0%, #c4a44a 100%)',
                            boxShadow: '0 0 40px rgba(196, 164, 74, 0.5)',
                            transform: 'translateY(-2px)',
                        }
                    }
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#0e0e18',
                    border: '1px solid rgba(196, 164, 74, 0.08)',
                    borderRadius: 8,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                        border: '1px solid rgba(196, 164, 74, 0.25)',
                        boxShadow: '0 8px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(196, 164, 74, 0.08)',
                        transform: 'translateY(-4px)',
                    }
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#06060c',
                    border: '1px solid rgba(196, 164, 74, 0.2)'
                }
            }
        }
    }
})

export default theme
