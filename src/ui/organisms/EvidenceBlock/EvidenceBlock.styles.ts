export const styles = {
    description: {
        fontFamily: "'Raleway', sans-serif",
        fontSize: { xs: '0.92rem', md: '1rem' },
        lineHeight: 1.75,
        color: '#a8a29b',
        maxWidth: 760,
        mx: 'auto',
        textAlign: 'center',
        textWrap: 'balance',
        mb: { xs: 3, md: 4 },
    } satisfies any,

    grid: (cols: number) => ({
        display: 'grid',
        gap: { xs: 1.5, md: 2.25 },
        gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: `repeat(${cols}, 1fr)`,
        },
    }),

    item: {
        height: '100%',
    } satisfies any,

    accordion: {
        bgcolor: 'rgba(14,14,24,0.45)',
        boxShadow: 'none',
        border: '1px solid rgba(196,164,74,0.14)',
        borderRadius: '8px !important',
        '&::before': { display: 'none' },
        maxWidth: 1100,
        mx: 'auto',
    } satisfies any,

    summary: {
        px: { xs: 2, md: 3 },
        py: 1,
        '& .MuiAccordionSummary-content': {
            flexDirection: 'column',
            gap: 0.25,
        },
        '& .MuiAccordionSummary-expandIconWrapper': { color: '#c4a44a' },
    } satisfies any,

    accTitle: {
        fontFamily: "'Cinzel', serif",
        fontSize: '1.05rem',
        fontWeight: 700,
        color: '#c4a44a',
        letterSpacing: '0.03em',
    } satisfies any,

    accSubtitle: {
        fontFamily: "'Raleway', sans-serif",
        fontSize: '0.8rem',
        color: '#8a8580',
    } satisfies any,

    details: {
        px: { xs: 1.5, md: 3 },
        pb: { xs: 2, md: 3 },
    } satisfies any,
}
