export const styles = {
    dialog: {
        '& .MuiDialog-paper': {
            bgcolor: 'rgba(10, 10, 15, 0.95)',
            maxWidth: '95vw',
            maxHeight: '95vh',
            width: 'auto',
            m: 1,
            overflow: 'hidden'
        }
    },
    closeButton: {
        position: 'absolute',
        top: 8,
        right: 8,
        color: 'text.secondary',
        bgcolor: 'rgba(0,0,0,0.5)',
        zIndex: 1,
        '&:hover': {
            bgcolor: 'rgba(0,0,0,0.8)'
        }
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 1
    },
    image: {
        maxWidth: '93vw',
        maxHeight: '90vh',
        objectFit: 'contain'
    }
}
