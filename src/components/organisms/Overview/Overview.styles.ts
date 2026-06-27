
export const styles = {
    section: {
        py: { xs: 10, md: 14 },
        px: { xs: 2, md: 6 },
        maxWidth: 1200,
        mx: 'auto',
    },

    description: {
        textAlign: 'center',
        maxWidth: 700,
        mx: 'auto',
        mb: 8,
        color: 'text.secondary',
        lineHeight: 2,
    },

    cardContent: {
        p: 4,
    },

    mechIcon: {
        width: 80,
        height: 80,
        objectFit: 'contain',
        mb: 3,
        transition: 'all 0.4s ease',
    },

    mechDescription: {
        color: 'text.secondary',
        lineHeight: 1.8,
    },
}

/** Returns dynamic sx for the mechanic card, driven by the mechanic's accent color. */
export const getMechCardSx = (color: string) => ({
    height: '100%',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        opacity: 0,
        transition: 'opacity 0.4s',
    },
    '&:hover::before': { opacity: 1 },
    '&:hover .mech-icon': {
        transform: 'scale(1.15) rotate(5deg)',
        filter: `drop-shadow(0 0 20px ${color}40)`,
    },
})

/** Returns dynamic sx for the mechanic title, driven by the mechanic's accent color. */
export const getMechTitleSx = (color: string) => ({
    fontFamily: '"Cinzel", serif',
    color,
    mb: 2,
})
