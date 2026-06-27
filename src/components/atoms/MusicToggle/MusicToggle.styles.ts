
export const getButtonSx = (isPlaying: boolean) => ({
    color: isPlaying ? '#c4a44a' : '#4a4540',
    transition: 'all 0.3s',
    position: 'relative',
    '&:hover': { color: '#c4a44a' },
    ...(isPlaying && {
        animation: 'musicPulse 1.5s ease-in-out infinite',
        '@keyframes musicPulse': {
            '0%, 100%': { filter: 'drop-shadow(0 0 4px rgba(196,164,74,0.3))' },
            '50%': { filter: 'drop-shadow(0 0 12px rgba(196,164,74,0.6))' },
        },
    }),
})
