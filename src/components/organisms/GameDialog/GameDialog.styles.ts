
export const styles = {
    // VerifyModal
    verifyDialog: {
        zIndex: 1400,
        '& .MuiDialog-paper': {
            bgcolor: '#0a0a12',
            border: '1px solid rgba(196,164,74,0.25)',
            borderRadius: 2,
        },
    } satisfies any,

    verifyHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 3,
        py: 1.5,
        borderBottom: '1px solid rgba(196,164,74,0.15)',
    } satisfies any,

    verifyHeaderLeft: {
        display: 'flex',
        alignItems: 'center',
        gap: 1,
    } satisfies any,

    verifyIcon: {
        color: '#4caf50',
        fontSize: 20,
    } satisfies any,

    verifyTitle: {
        fontFamily: '"Cinzel", serif',
        color: '#c4a44a',
        fontWeight: 700,
        fontSize: '1rem',
    } satisfies any,

    verifyCloseButton: {
        color: '#8a8580',
    } satisfies any,

    verifyBody: {
        p: 3,
    } satisfies any,

    verifyBodyText: {
        color: '#8a8580',
        mb: 2,
        lineHeight: 1.8,
    } satisfies any,

    verifyScreenshotBox: {
        width: '100%',
        aspectRatio: '16/9',
        bgcolor: 'rgba(0,0,0,0.4)',
        border: '1px solid rgba(196,164,74,0.15)',
        borderRadius: 1,
        mb: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    } satisfies any,

    verifyScreenshotImg: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    } satisfies any,

    verifyButtonRow: {
        display: 'flex',
        gap: 2,
        flexWrap: 'wrap',
    } satisfies any,

    verifyCommitsButton: {
        color: '#c4a44a',
        borderColor: 'rgba(196,164,74,0.3)',
        fontSize: '0.75rem',
        textTransform: 'none',
        '&:hover': { borderColor: '#c4a44a', bgcolor: 'rgba(196,164,74,0.08)' },
    } satisfies any,

    verifyRepoButton: {
        color: '#8a8580',
        borderColor: 'rgba(138,133,128,0.3)',
        fontSize: '0.75rem',
        textTransform: 'none',
        '&:hover': { borderColor: '#8a8580', bgcolor: 'rgba(138,133,128,0.08)' },
    } satisfies any,

    // GameDialog
    gameDialog: {
        '& .MuiDialog-paper': {
            bgcolor: '#000',
            border: 'none',
        },
    } satisfies any,

    gameHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 3,
        py: 1.5,
        borderBottom: '1px solid rgba(196,164,74,0.15)',
    } satisfies any,

    gameHeaderLeft: {
        display: 'flex',
        alignItems: 'center',
        gap: 2,
    } satisfies any,

    gameTitle: {
        fontFamily: '"Cinzel", serif',
        color: '#c4a44a',
        fontWeight: 900,
        fontSize: '1.3rem',
        letterSpacing: '0.1em',
        textShadow: '0 0 12px rgba(196,164,74,0.3)',
    } satisfies any,

    verifyBuildButton: {
        color: '#4caf50',
        fontSize: '0.65rem',
        textTransform: 'none',
        letterSpacing: '0.05em',
        border: '1px solid rgba(76,175,80,0.2)',
        borderRadius: 1,
        px: 1.5,
        py: 0.3,
        '&:hover': { bgcolor: 'rgba(76,175,80,0.08)', borderColor: 'rgba(76,175,80,0.4)' },
    } satisfies any,

    gameCloseButton: {
        color: '#8a8580',
    } satisfies any,

    gameContent: {
        p: 0,
        display: 'flex',
        flex: 1,
        overflow: 'hidden',
    } satisfies any,

    gameIframe: {
        width: '100%',
        height: '100%',
        border: 'none',
        flex: 1,
    } satisfies any,
}
