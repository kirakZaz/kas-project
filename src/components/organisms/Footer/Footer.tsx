import React from 'react'
import { Box, Typography } from '@mui/material'
import { styles } from './Footer.styles'

const Footer = React.memo(function Footer() {
    return (
        <Box sx={styles.footer}>
            <Typography variant="body2" sx={styles.text}>
                KAS — RGP204 Rapid Game Prototype — Torrens University 2026
            </Typography>
            <Typography variant="body2" sx={styles.subtext}>
                Team KAS: Kira Zakirov, Sarah Assiri, Alexander Ramic
            </Typography>
        </Box>
    )
})

export default Footer
