export const styles = {
    dialog: {
        '& .MuiDialog-paper': {
            height: '85vh'
        }
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 3,
        py: 1.5,
        borderBottom: '1px solid rgba(196, 162, 101, 0.15)'
    },
    title: {
        color: 'primary.main'
    },
    closeButton: {
        color: 'text.secondary'
    },
    content: {
        p: 0,
        display: 'flex',
        flex: 1
    },
    placeholder: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#0d0d14'
    },
    placeholderTitle: {
        color: 'text.secondary',
        mb: 1
    },
    placeholderText: {
        color: 'text.secondary',
        opacity: 0.6,
        textAlign: 'center',
        maxWidth: 400
    }
}
