import React from 'react'
import { Dialog, DialogContent, Box, IconButton, Typography, Button } from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded'
import GitHubIcon from '@mui/icons-material/GitHub'
import type { GameDialogProps } from './GameDialog.types'
import { styles } from './GameDialog.styles'

const GITHUB_REPO = 'https://github.com/kirakZaz/kas-project'
const GITHUB_COMMITS = 'https://github.com/kirakZaz/kas-project/commits/main'

const VerifyModal = React.memo(function VerifyModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            sx={styles.verifyDialog}
        >
            <Box sx={styles.verifyHeader}>
                <Box sx={styles.verifyHeaderLeft}>
                    <VerifiedRoundedIcon sx={styles.verifyIcon} />
                    <Typography sx={styles.verifyTitle}>
                        Build Verification
                    </Typography>
                </Box>
                <IconButton onClick={onClose} sx={styles.verifyCloseButton}>
                    <CloseRoundedIcon fontSize="small" />
                </IconButton>
            </Box>

            <Box sx={styles.verifyBody}>
                <Typography variant="body2" sx={styles.verifyBodyText}>
                    This WebGL build was committed to the repository before the assessment due date.
                    You can verify the exact commit timestamp on GitHub.
                </Typography>

                {/* Commit screenshot placeholder */}
                <Box sx={styles.verifyScreenshotBox}>
                    {/* Replace src with actual screenshot when ready */}
                    <Box
                        component="img"
                        src="/assets/verify/commit-screenshot.png"
                        alt="Git commit screenshot"
                        sx={styles.verifyScreenshotImg}
                        onError={(e) => {
                            const el = e.currentTarget as HTMLImageElement
                            el.style.display = 'none'
                            el.parentElement!.innerHTML = '<span style="color: rgba(196,164,74,0.4); font-size: 0.85rem;">Commit screenshot will be added here</span>'
                        }}
                    />
                </Box>

                <Box sx={styles.verifyButtonRow}>
                    <Button
                        variant="outlined"
                        startIcon={<GitHubIcon />}
                        href={GITHUB_COMMITS}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="pointer"
                        sx={styles.verifyCommitsButton}
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
                        sx={styles.verifyRepoButton}
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
                fullScreen
                sx={styles.gameDialog}
            >
                <Box sx={styles.gameHeader}>
                    <Box sx={styles.gameHeaderLeft}>
                        <Typography sx={styles.gameTitle}>
                            KAS
                        </Typography>
                        <Button
                            size="small"
                            startIcon={<VerifiedRoundedIcon sx={{ fontSize: 16 }} />}
                            onClick={() => setVerifyOpen(true)}
                            data-cursor="pointer"
                            sx={styles.verifyBuildButton}
                        >
                            Verify Build
                        </Button>
                    </Box>
                    <IconButton onClick={onClose} data-cursor="pointer" sx={styles.gameCloseButton}>
                        <CloseRoundedIcon />
                    </IconButton>
                </Box>
                <DialogContent sx={styles.gameContent}>
                    <Box
                        component="iframe"
                        src="/game/build/index.html"
                        title="KAS Game"
                        sx={styles.gameIframe}
                        allow="autoplay; fullscreen"
                    />
                </DialogContent>
            </Dialog>

            <VerifyModal open={verifyOpen} onClose={() => setVerifyOpen(false)} />
        </>
    )
})

export default GameDialog
