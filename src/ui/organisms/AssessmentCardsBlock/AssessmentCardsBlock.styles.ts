export const styles = {
    grid: {
        display: 'grid',
        gap: { xs: 2, md: 2.5 },
        gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
        },
    } satisfies any,

    item: {
        height: '100%',
    } satisfies any,
}
