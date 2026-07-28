export const styles = {
    row: (align: string) => ({
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1,
        justifyContent: align,
    }),

    chip: {
        fontFamily: "'Raleway', sans-serif",
        fontSize: '0.72rem',
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: '#d4b87a',
        bgcolor: 'rgba(196,164,74,0.08)',
        border: '1px solid rgba(196,164,74,0.25)',
        borderRadius: '2px',
        height: 26,
    } satisfies any,
}
