import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { motion, useScroll, useTransform } from 'framer-motion'
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded'
import MusicToggle from '../../atoms/MusicToggle/MusicToggle'
import type { HeaderProps } from './Header.types'

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
            sx={{
                background: 'transparent',
                zIndex: 1100,
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    backdropFilter: 'blur(12px)',
                    pointerEvents: 'none',
                },
            }}
            style={{
                backgroundColor: useTransform(bgOpacity, v => `rgba(6,6,12,${v})`) as unknown as string,
                borderBottom: useTransform(borderOpacity, v => `1px solid rgba(196,164,74,${v})`) as unknown as string,
            }}
        >
            <Toolbar sx={{
                maxWidth: 1400, mx: 'auto', width: '100%',
                justifyContent: 'space-between', py: 0.5,
                position: 'relative', zIndex: 1,
            }}>
                <Typography
                    data-cursor="pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    sx={{
                        fontFamily: '"Cinzel", serif',
                        fontWeight: 900,
                        fontSize: '1.3rem',
                        color: '#c4a44a',
                        letterSpacing: '0.15em',
                        textShadow: '0 0 20px rgba(196,164,74,0.3)',
                        cursor: 'none',
                    }}
                >
                    KAS
                </Typography>

                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
                    {NAV_ITEMS.map((item) => (
                        <Button
                            key={item.id}
                            size="small"
                            data-cursor="pointer"
                            onClick={() => handleNavClick(item.id)}
                            sx={{
                                color: '#8a8580',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                px: 2,
                                position: 'relative',
                                transition: 'color 0.3s',
                                '&:hover': { color: '#c4a44a', background: 'transparent' },
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: 4, left: '50%',
                                    width: 0, height: 1,
                                    background: '#c4a44a',
                                    transition: 'all 0.3s',
                                    transform: 'translateX(-50%)',
                                },
                                '&:hover::after': { width: '60%' },
                            }}
                        >
                            {item.label}
                        </Button>
                    ))}
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <MusicToggle />
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        startIcon={<SportsEsportsRoundedIcon />}
                        onClick={onPlayClick}
                        data-cursor="pointer"
                        sx={{
                            fontSize: '0.7rem',
                            px: 2.5, py: 0.8,
                            display: { xs: 'none', sm: 'flex' },
                        }}
                    >
                        Play
                    </Button>
                </Box>
            </Toolbar>
        </MotionAppBar>
    )
})

export default Header
