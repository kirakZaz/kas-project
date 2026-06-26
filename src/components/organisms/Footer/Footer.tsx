import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = React.memo(function Footer() {
    return (
        <Box sx={{
            py: 6, px: 3,
            textAlign: 'center',
            borderTop: '1px solid rgba(196,164,74,0.08)',
            position: 'relative',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: -1, left: '50%',
                transform: 'translateX(-50%)',
                width: 60, height: 1,
                background: 'linear-gradient(90deg, transparent, #c4a44a, transparent)',
            },
        }}>
            <Typography
                sx={{
                    fontFamily: '"Cinzel", serif',
                    color: '#c4a44a',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    mb: 1,
                }}
            >
                KAS
            </Typography>
            <Typography variant="body2" sx={{ color: '#4a4540', mb: 0.5, letterSpacing: '0.05em' }}>
                RGP204 Rapid Game Prototype — Torrens University 2026
            </Typography>
            <Typography variant="body2" sx={{ color: '#3a3530', fontSize: '0.75rem', letterSpacing: '0.08em' }}>
                Kira Zakirov &middot; Sarah Assiri &middot; Alexander Ramic
            </Typography>
        </Box>
    )
})

export default Footer
