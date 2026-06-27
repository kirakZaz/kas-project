import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { motion, useScroll, useTransform } from 'framer-motion'
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded'
import MusicToggle from '../../atoms/MusicToggle/MusicToggle'
import type { HeaderProps } from './Header.types'
import { styles } from './Header.styles'

const MotionAppBar = motion.create(AppBar)

const NAV_ITEMS = [
    { label: 'About', id: 'about' },
    { label: 'Timeline', id: 'timeline' },
    { label: 'Design', id: 'concept' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Team', id: 'team' },
]

const Header = React.memo(function Header({ onPlayClick }: HeaderProps) {
    const { scrollY } = useScroll()
    const bgOpacity = useTransform(scrollY, [0, 200], [0, 0.95])
    const borderOpacity = useTransform(scrollY, [0, 200], [0, 0.15])

    const handleNavClick = React.useCallback((id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, [])

    return (
        <MotionAppBar
            position="fixed"
            elevation={0}
            sx={styles.appBar}
            style={{
                backgroundColor: useTransform(bgOpacity, v => `rgba(6,6,12,${v})`) as unknown as string,
                borderBottom: useTransform(borderOpacity, v => `1px solid rgba(196,164,74,${v})`) as unknown as string,
            }}
        >
            <Toolbar sx={styles.toolbar}>
                <Typography
                    data-cursor="pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    sx={styles.logo}
                >
                    KAS
                </Typography>

                <Box sx={styles.navBox}>
                    {NAV_ITEMS.map((item) => (
                        <Button
                            key={item.id}
                            size="small"
                            data-cursor="pointer"
                            onClick={() => handleNavClick(item.id)}
                            sx={styles.navButton}
                        >
                            {item.label}
                        </Button>
                    ))}
                </Box>

                <Box sx={styles.actionsBox}>
                    <MusicToggle />
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        startIcon={<SportsEsportsRoundedIcon />}
                        onClick={onPlayClick}
                        data-cursor="pointer"
                        sx={styles.playButton}
                    >
                        Play
                    </Button>
                </Box>
            </Toolbar>
        </MotionAppBar>
    )
})

export default Header
