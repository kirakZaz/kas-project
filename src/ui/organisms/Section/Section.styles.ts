export const styles = {
    section: (tone: 'default' | 'alt') => ({
        position: 'relative',
        py: { xs: 6, md: 10 },
        px: { xs: 2.5, md: 4 },
        bgcolor: tone === 'alt' ? 'rgba(14,14,24,0.45)' : 'transparent',
    }),

    inner: {
        maxWidth: 1200,
        mx: 'auto',
        width: '100%',
    } satisfies any,

    body: {
        mt: 0,
    } satisfies any,

    bodyWithTitle: {
        mt: { xs: 4, md: 5 },
    } satisfies any,
}
