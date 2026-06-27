import React from 'react'
import { Box, Typography } from '@mui/material'
import { styles } from './Footer.styles'

const Footer = React.memo(function Footer() {
    return (
        <Box sx={styles.root}>
            <Typography sx={styles.title}>
                KAS
            </Typography>
            <Typography variant="body2" sx={styles.subtitle}>
                RGP204 Rapid Game Prototype — Torrens University 2026
            </Typography>
            <Typography variant="body2" sx={styles.credits}>
                Kira Zakirov &middot; Sarah Assiri &middot; Alexander Ramic
            </Typography>
        </Box>
    )
})

export default Footer
