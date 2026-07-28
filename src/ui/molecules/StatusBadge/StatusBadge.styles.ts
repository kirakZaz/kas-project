export const styles = {
    badge: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1,
        px: 1.25,
        py: 0.5,
        borderRadius: '2px',
        border: '1px solid rgba(196,164,74,0.2)',
        bgcolor: 'rgba(6,6,12,0.4)',
    } satisfies any,

    dot: (color: string) => ({
        width: 8,
        height: 8,
        borderRadius: '50%',
        bgcolor: color,
        boxShadow: `0 0 8px ${color}`,
        flexShrink: 0,
    }),

    label: (color: string) => ({
        fontFamily: "'Raleway', sans-serif",
        fontSize: '0.7rem',
        fontWeight: 700,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color,
        lineHeight: 1,
    }),
}
