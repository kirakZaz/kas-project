import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded'
import MusicToggle from '../../atoms/MusicToggle/MusicToggle'
import { styles } from './Header.styles'
import type { HeaderProps } from './Header.types'

const NAV_ITEMS = ['Overview', 'Concept', 'Process', 'Gallery', 'Team']

const Header = React.memo(function Header({ onPlayClick }: HeaderProps) {
    const handleNavClick = React.useCallback((section: string) => {
        document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    }, [])

    return (
        <AppBar position="sticky" sx={styles.appBar}>
            <Toolbar sx={styles.toolbar}>
                <Typography variant="h6" sx={styles.logo}>
                    KAS
                </Typography>
                <Box sx={styles.nav}>
                    {NAV_ITEMS.map((item) => (
                        <Button
                            key={item}
                            size="small"
                            onClick={() => handleNavClick(item)}
                            sx={styles.navButton}
                        >
                            {item}
                        </Button>
                    ))}
                </Box>
                <MusicToggle />
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SportsEsportsRoundedIcon />}
                    onClick={onPlayClick}
                    sx={styles.playButton}
                >
                    Play Game
                </Button>
            </Toolbar>
        </AppBar>
    )
})

export default Header
