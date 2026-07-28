export const styles = {
    plaque: {
        maxWidth: 900,
        mx: 'auto',
        p: { xs: 2.5, md: 3.5 },
        borderRadius: '8px',
        border: '1px solid rgba(196,164,74,0.18)',
        bgcolor: 'rgba(14,14,24,0.55)',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
    } satisfies any,

    code: {
        fontFamily: "'Raleway', sans-serif",
        fontSize: '0.72rem',
        fontWeight: 700,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: '#8a8580',
    } satisfies any,

    title: {
        fontFamily: "'Cinzel', serif",
        fontSize: { xs: '1.5rem', md: '1.9rem' },
        fontWeight: 700,
        color: '#c4a44a',
        letterSpacing: '0.03em',
        lineHeight: 1.2,
    } satisfies any,

    accordion: {
        bgcolor: 'transparent',
        boxShadow: 'none',
        border: '1px solid rgba(196,164,74,0.12)',
        borderRadius: '6px !important',
        '&::before': { display: 'none' },
    } satisfies any,

    summary: {
        fontFamily: "'Raleway', sans-serif",
        fontSize: '0.8rem',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: '#d4b87a',
        '& .MuiAccordionSummary-expandIconWrapper': { color: '#c4a44a' },
    } satisfies any,

    detailsGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2.5,
    } satisfies any,

    groupLabel: {
        fontFamily: "'Raleway', sans-serif",
        fontSize: '0.72rem',
        fontWeight: 700,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: '#c4a44a',
        mb: 1,
    } satisfies any,

    list: {
        m: 0,
        pl: 2.4,
        display: 'flex',
        flexDirection: 'column',
        gap: 0.7,
    } satisfies any,

    listItem: {
        fontFamily: "'Raleway', sans-serif",
        fontSize: '0.88rem',
        lineHeight: 1.6,
        color: '#c9c4be',
    } satisfies any,

    note: {
        fontFamily: "'Raleway', sans-serif",
        fontSize: '0.85rem',
        lineHeight: 1.65,
        color: '#8a8580',
        fontStyle: 'italic',
    } satisfies any,
}
