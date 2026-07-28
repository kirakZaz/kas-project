export const styles = {
    grid: (cols: number) => ({
        display: 'grid',
        gap: { xs: 2, md: 2.5 },
        gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: `repeat(${cols}, 1fr)`,
        },
    }),

    item: {
        height: '100%',
    } satisfies any,
}
