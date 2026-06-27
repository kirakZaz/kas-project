export const styles = {
    root: {
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        textAlign: 'center',
        px: 3,
    },

    radialBackground: {
        position: 'absolute',
        inset: 0,
        background:
            'radial-gradient(ellipse at 50% 30%, rgba(196,164,74,0.06) 0%, transparent 60%), radial-gradient(ellipse at 50% 80%, rgba(0,229,255,0.03) 0%, transparent 50%)',
        pointerEvents: 'none',
    },

    kasImageWrapper: {
        mb: 3,
        position: 'relative',
        zIndex: 2,
    },

    kasImage: {
        width: { xs: 220, md: 320 },
        height: 'auto',
        filter: 'drop-shadow(0 0 40px rgba(0,229,255,0.3)) drop-shadow(0 20px 60px rgba(0,0,0,0.6))',
        animation: 'heroFloat 4s ease-in-out infinite',
        '@keyframes heroFloat': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-16px)' },
        },
    },

    title: {
        fontFamily: '"Cinzel", serif',
        fontSize: 'clamp(4rem, 12vw, 8rem)',
        fontWeight: 900,
        color: '#c4a44a',
        textShadow:
            '0 0 60px rgba(196,164,74,0.5), 0 0 120px rgba(196,164,74,0.2), 0 4px 20px rgba(0,0,0,0.8)',
        position: 'relative',
        zIndex: 2,
        lineHeight: 1,
        mb: 1,
    },

    decorativeLine: {
        height: 2,
        background: 'linear-gradient(90deg, transparent, #c4a44a, transparent)',
        mb: 2,
        position: 'relative',
        zIndex: 2,
    },

    subtitle: {
        fontFamily: '"Cinzel", serif',
        color: '#8a8580',
        fontWeight: 400,
        letterSpacing: '0.15em',
        mb: 3,
        position: 'relative',
        zIndex: 2,
    },

    description: {
        maxWidth: 560,
        color: '#6a6560',
        mb: 5,
        position: 'relative',
        zIndex: 2,
        lineHeight: 1.9,
    },

    ctaWrapper: {
        position: 'relative',
        zIndex: 2,
    },

    ctaButton: {
        px: 5,
        py: 1.8,
        fontSize: '1rem',
        animation: 'pulseGlow 2s ease-in-out infinite',
        '@keyframes pulseGlow': {
            '0%, 100%': { boxShadow: '0 0 20px rgba(196,164,74,0.3)' },
            '50%': {
                boxShadow:
                    '0 0 40px rgba(196,164,74,0.6), 0 0 80px rgba(196,164,74,0.2)',
            },
        },
    },

    scrollIndicator: {
        position: 'absolute',
        bottom: 40,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
        zIndex: 2,
    },

    scrollLabel: {
        color: '#4a4540',
        letterSpacing: '0.2em',
        fontSize: '0.7rem',
        textTransform: 'uppercase',
    },

    scrollLine: {
        width: 1.5,
        height: 30,
        background: 'linear-gradient(to bottom, #c4a44a, transparent)',
        animation: 'scrollPulse 2s ease-in-out infinite',
        '@keyframes scrollPulse': {
            '0%, 100%': { opacity: 0.3, height: 30 },
            '50%': { opacity: 0.7, height: 40 },
        },
    },
}
