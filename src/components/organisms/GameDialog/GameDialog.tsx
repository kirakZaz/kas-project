import React from 'react'
import { Dialog, DialogContent, Box, IconButton, Typography } from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { styles } from './GameDialog.styles'
import type { GameDialogProps } from './GameDialog.types'

const GameDialog = React.memo(function GameDialog({ isOpen, onClose }: GameDialogProps) {
    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            fullWidth
            maxWidth="lg"
            sx={styles.dialog}
        >
            <Box sx={styles.header}>
                <Typography variant="h3" sx={styles.title}>
                    KAS
                </Typography>
                <IconButton onClick={onClose} sx={styles.closeButton}>
                    <CloseRoundedIcon />
                </IconButton>
            </Box>
            <DialogContent sx={styles.content}>
                <Box sx={styles.placeholder}>
                    <Typography variant="h3" sx={styles.placeholderTitle}>
                        WebGL Build Coming Soon
                    </Typography>
                    <Typography variant="body2" sx={styles.placeholderText}>
                        Place your Unity WebGL build in public/game/ to play in browser.
                        The iframe will load automatically.
                    </Typography>
                </Box>
            </DialogContent>
        </Dialog>
    )
})

export default GameDialog
