
export const styles = {
    backdropSx: {
        backgroundColor: 'rgba(0,0,0,0.9)',
        backdropFilter: 'blur(8px)',
    } satisfies any,

    dialog: {
        '& .MuiDialog-paper': {
            background: 'transparent',
            boxShadow: 'none',
            maxWidth: '90vw',
            maxHeight: '90vh',
            overflow: 'visible',
            border: 'none',
        },
    } satisfies any,

    closeButton: {
        position: 'absolute',
        top: -40,
        right: -10,
        color: '#c4a44a',
        zIndex: 10,
        '&:hover': { color: '#fff' },
    } satisfies any,

    image: {
        maxWidth: '85vw',
        maxHeight: '85vh',
        objectFit: 'contain',
        borderRadius: 1,
        boxShadow: '0 0 60px rgba(0,0,0,0.5), 0 0 30px rgba(196,164,74,0.1)',
    } satisfies any,
}
