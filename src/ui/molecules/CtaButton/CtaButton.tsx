import React from 'react'
import { Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import GitHubIcon from '@mui/icons-material/GitHub'
import { useGame } from '../../../context/GameContext'
import type { CtaButtonProps } from './CtaButton.types'
import { styles } from './CtaButton.styles'

const CtaButton = React.memo(function CtaButton({ action, variant = 'contained' }: CtaButtonProps) {
    const { open } = useGame()

    const startIcon =
        action.icon === 'play' ? <SportsEsportsRoundedIcon /> :
        action.icon === 'github' ? <GitHubIcon /> :
        action.icon === 'arrow' ? <ArrowForwardRoundedIcon /> :
        undefined

    const shared = {
        variant,
        color: 'primary' as const,
        startIcon,
        'data-cursor': 'pointer',
        sx: styles.button,
    }

    if (action.kind === 'game') {
        return <Button {...shared} onClick={open}>{action.label}</Button>
    }

    if (action.kind === 'external') {
        return (
            <Button {...shared} href={action.to ?? '#'} target="_blank" rel="noopener noreferrer">
                {action.label}
            </Button>
        )
    }

    return (
        <Button {...shared} component={RouterLink} to={action.to ?? '/'}>
            {action.label}
        </Button>
    )
})

export default CtaButton
