import React from 'react'
import { GlobalStyles } from '@mui/material'
import CustomCursor from '../../components/atoms/CustomCursor/CustomCursor'
import { useGame } from '../../context/GameContext'
import { cursorGlobal } from './CursorLayer.styles'

// Reads game state to toggle the custom cursor globally.
const CursorLayer = React.memo(function CursorLayer() {
    const { isOpen } = useGame()
    return (
        <>
            <GlobalStyles styles={cursorGlobal(isOpen)} />
            {!isOpen && <CustomCursor />}
        </>
    )
})

export default CursorLayer
