import React from 'react'
import { AppBar, Toolbar, Button, Box, IconButton, Menu, MenuItem } from '@mui/material'
import { Link as RouterLink, NavLink } from 'react-router-dom'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded'
import MusicToggle from '../../../components/atoms/MusicToggle/MusicToggle'
import { NAV_ITEMS } from '../../../content/nav'
import { ROUTES } from '../../../content/routes'
import { useGame } from '../../../context/GameContext'
import { styles } from './SiteHeader.styles'

// Global page navigation. Router NavLinks (auto `active` class), plus the Play
// button (opens the KAS build from anywhere) and the music toggle.
const SiteHeader = React.memo(function SiteHeader() {
    const { open } = useGame()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

    const openMenu = React.useCallback((e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget), [])
    const closeMenu = React.useCallback(() => setAnchorEl(null), [])

    return (
        <AppBar position="fixed" elevation={0} sx={styles.appBar}>
            <Toolbar sx={styles.toolbar}>
                <Box component={RouterLink} to={ROUTES.home} data-cursor="pointer" sx={styles.logo}>
                    KAS
                </Box>

                <Box sx={styles.navBox}>
                    {NAV_ITEMS.map((item) => (
                        <Button
                            key={item.to}
                            component={NavLink}
                            to={item.to}
                            end={item.to === ROUTES.home}
                            size="small"
                            disableRipple
                            data-cursor="pointer"
                            sx={styles.navLink}
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
                        onClick={open}
                        data-cursor="pointer"
                        sx={styles.playButton}
                    >
                        Play
                    </Button>
                    <IconButton onClick={openMenu} data-cursor="pointer" sx={styles.menuButton}>
                        <MenuRoundedIcon />
                    </IconButton>
                </Box>

                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={closeMenu}
                    slotProps={{ paper: { sx: styles.menuPaper } }}
                >
                    {NAV_ITEMS.map((item) => (
                        <MenuItem
                            key={item.to}
                            component={NavLink}
                            to={item.to}
                            end={item.to === ROUTES.home}
                            onClick={closeMenu}
                            sx={styles.menuItem}
                        >
                            {item.label}
                        </MenuItem>
                    ))}
                    <MenuItem onClick={() => { closeMenu(); open() }} sx={styles.menuItem}>
                        Play KAS
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
})

export default SiteHeader
