import React from 'react'
import { IconButton, Tooltip } from '@mui/material'
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded'
import MusicOffRoundedIcon from '@mui/icons-material/MusicOffRounded'
import { styles } from './MusicToggle.styles'

const MusicToggle = React.memo(function MusicToggle() {
    const [isPlaying, setIsPlaying] = React.useState(false)
    const audioRef = React.useRef<HTMLAudioElement | null>(null)

    React.useEffect(() => {
        const audio = new Audio('/assets/audio/bg_sound.wav')
        audio.loop = true
        audio.volume = 0.3
        audioRef.current = audio

        return () => {
            audio.pause()
            audio.src = ''
        }
    }, [])

    const handleToggle = React.useCallback(() => {
        const audio = audioRef.current
        if (!audio) return

        if (isPlaying) {
            audio.pause()
        } else {
            audio.play()
        }
        setIsPlaying((prev) => !prev)
    }, [isPlaying])

    return (
        <Tooltip title={isPlaying ? 'Mute music' : 'Play music'}>
            <IconButton onClick={handleToggle} sx={styles.button}>
                {isPlaying
                    ? <MusicNoteRoundedIcon />
                    : <MusicOffRoundedIcon />
                }
            </IconButton>
        </Tooltip>
    )
})

export default MusicToggle
