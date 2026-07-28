import React from 'react'
import { Box, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { NAV_ITEMS } from '../../../content/nav'
import { ROUTES } from '../../../content/routes'
import { SUBJECT } from '../../../content/subject'
import { styles } from './SiteFooter.styles'

const SiteFooter = React.memo(function SiteFooter() {
    return (
        <Box component="footer" sx={styles.footer}>
            <Box sx={styles.inner}>
                <Box>
                    <Typography sx={styles.brand}>KAS</Typography>
                    <Typography sx={styles.subject}>
                        {SUBJECT.code} · {SUBJECT.title} — {SUBJECT.university}, {SUBJECT.term}
                    </Typography>
                    <Typography sx={styles.copyright}>Created for academic purposes.</Typography>
                </Box>
                <Box sx={styles.nav}>
                    {NAV_ITEMS.map((item) => (
                        <Box
                            key={item.to}
                            component={NavLink}
                            to={item.to}
                            end={item.to === ROUTES.home}
                            data-cursor="pointer"
                            sx={styles.link}
                        >
                            {item.label}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
})

export default SiteFooter
