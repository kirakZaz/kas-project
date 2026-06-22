import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded'
import { styles } from './Hero.styles'
import type { HeroProps } from './Hero.types'

const Hero = React.memo(function Hero({ onPlayClick }: HeroProps) {
    return (
        <Box sx={styles.wrapper}>
            <Box sx={styles.featherDecor}>
                <img src="/assets/ui/feather.png" alt="" style={{ width: 80, opacity: 0.15 }} />
            </Box>
            <Typography variant="h1" sx={styles.title}>
                KAS
            </Typography>
            <Typography variant="h3" sx={styles.subtitle}>
                A Gothic 3D Platformer
            </Typography>
            <Typography variant="body1" sx={styles.description}>
                Guide Kas through a dark gothic world filled with deadly traps,
                ancient turrets, and mysterious architecture. Glide through the air
                with feathered wings and fight to survive.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SportsEsportsRoundedIcon />}
                onClick={onPlayClick}
                sx={styles.cta}
            >
                Play Now
            </Button>
        </Box>
    )
})

export default Hero
