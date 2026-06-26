import React from 'react'
import { Dialog, DialogContent, Box, IconButton, Typography, Button } from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded'
import GitHubIcon from '@mui/icons-material/GitHub'
import type { GameDialogProps } from './GameDialog.types'

const GITHUB_REPO = 'https://github.com/kirakZaz/kas-project'
const GITHUB_COMMITS = 'https://github.com/kirakZaz/kas-project/commits/main'

const VerifyModal = React.memo(function VerifyModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            sx={{
                zIndex: 1400,
                '& .MuiDialog-paper': {
                    bgcolor: '#0a0a12',
                    border: '1px solid rgba(196,164,74,0.25)',
                    borderRadius: 2,
                },
            }}
        >
            <Box sx={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                px: 3, py: 1.5, borderBottom: '1px solid rgba(196,164,74,0.15)',
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <VerifiedRoundedIcon sx={{ color: '#4caf50', fontSize: 20 }} />
                    <Typography sx={{ fontFamily: '"Cinzel", serif', color: '#c4a44a', fontWeight: 700, fontSize: '1rem' }}>
                        Build Verification
                    </Typography>
                </Box>
                <IconButton onClick={onClose} sx={{ color: '#8a8580' }}>
                    <CloseRoundedIcon fontSize="small" />
                </IconButton>
            </Box>

            <Box sx={{ p: 3 }}>
                <Typography variant="body2" sx={{ color: '#8a8580', mb: 2, lineHeight: 1.8 }}>
                    This WebGL build was committed to the repository before the assessment due date.
                    You can verify the exact commit timestamp on GitHub.
                </Typography>

                {/* Commit screenshot placeholder */}
                <Box sx={{
                    width: '100%',
                    aspectRatio: '16/9',
                    bgcolor: 'rgba(0,0,0,0.4)',
                    border: '1px solid rgba(196,164,74,0.15)',
                    borderRadius: 1,
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                }}>
                    {/* Replace src with actual screenshot when ready */}
                    <Box
                        component="img"
                        src="/assets/verify/commit-screenshot.png"
                        alt="Git commit screenshot"
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                        }}
                        onError={(e) => {
                            const el = e.currentTarget as HTMLImageElement
                            el.style.display = 'none'
                            el.parentElement!.innerHTML = '<span style="color: rgba(196,164,74,0.4); font-size: 0.85rem;">Commit screenshot will be added here</span>'
                        }}
                    />
                </Box>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Button
                        variant="outlined"
                        startIcon={<GitHubIcon />}
                        href={GITHUB_COMMITS}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="pointer"
                        sx={{
                            color: '#c4a44a',
                            borderColor: 'rgba(196,164,74,0.3)',
                            fontSize: '0.75rem',
                            textTransform: 'none',
                            '&:hover': { borderColor: '#c4a44a', bgcolor: 'rgba(196,164,74,0.08)' },
                        }}
                    >
                        View Commit History
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<GitHubIcon />}
                        href={GITHUB_REPO}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="pointer"
                        sx={{
                            color: '#8a8580',
                            borderColor: 'rgba(138,133,128,0.3)',
                            fontSize: '0.75rem',
                            textTransform: 'none',
                            '&:hover': { borderColor: '#8a8580', bgcolor: 'rgba(138,133,128,0.08)' },
                        }}
                    >
                        View Repository
                    </Button>
                </Box>
            </Box>
        </Dialog>
    )
})

const GameDialog = React.memo(function GameDialog({ isOpen, onClose }: GameDialogProps) {
    const [verifyOpen, setVerifyOpen] = React.useState(false)

    return (
        <>
            <Dialog
                open={isOpen}
                onClose={onClose}
                fullWidth
                maxWidth="lg"
                sx={{
                    '& .MuiDialog-paper': {
                        height: '85vh',
                        bgcolor: '#06060c',
                        border: '1px solid rgba(196,164,74,0.2)',
                    },
                }}
            >
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    px: 3, py: 1.5,
                    borderBottom: '1px solid rgba(196,164,74,0.15)',
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography sx={{
                            fontFamily: '"Cinzel", serif',
                            color: '#c4a44a',
                            fontWeight: 900,
                            fontSize: '1.3rem',
                            letterSpacing: '0.1em',
                            textShadow: '0 0 12px rgba(196,164,74,0.3)',
                        }}>
                            KAS
                        </Typography>
                        <Button
                            size="small"
                            startIcon={<VerifiedRoundedIcon sx={{ fontSize: 16 }} />}
                            onClick={() => setVerifyOpen(true)}
                            data-cursor="pointer"
                            sx={{
                                color: '#4caf50',
                                fontSize: '0.65rem',
                                textTransform: 'none',
                                letterSpacing: '0.05em',
                                border: '1px solid rgba(76,175,80,0.2)',
                                borderRadius: 1,
                                px: 1.5, py: 0.3,
                                '&:hover': { bgcolor: 'rgba(76,175,80,0.08)', borderColor: 'rgba(76,175,80,0.4)' },
                            }}
                        >
                            Verify Build
                        </Button>
                    </Box>
                    <IconButton onClick={onClose} data-cursor="pointer" sx={{ color: '#8a8580' }}>
                        <CloseRoundedIcon />
                    </IconButton>
                </Box>
                <DialogContent sx={{ p: 0, display: 'flex', flex: 1 }}>
                    <Box sx={{
                        flex: 1, display: 'flex', flexDirection: 'column',
                        alignItems: 'center', justifyContent: 'center',
                        bgcolor: '#0d0d14',
                    }}>
                        <Typography variant="h3" sx={{ color: '#8a8580', mb: 1, fontFamily: '"Cinzel", serif' }}>
                            WebGL Build
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#4a4540', textAlign: 'center', maxWidth: 400 }}>
                            Place your Unity WebGL build in public/game/ to play in browser.
                        </Typography>
                    </Box>
                </DialogContent>
            </Dialog>

            <VerifyModal open={verifyOpen} onClose={() => setVerifyOpen(false)} />
        </>
    )
})

export default GameDialog
