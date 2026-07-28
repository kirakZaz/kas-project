// Global cursor styling. The custom cursor is hidden while the game dialog is
// open (so players use a normal pointer over the WebGL build).
export function cursorGlobal(isGameOpen: boolean) {
    return {
        '*, *::before, *::after': {
            cursor: isGameOpen ? 'auto !important' : 'none !important',
        },
    }
}
