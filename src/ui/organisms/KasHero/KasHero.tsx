import React from 'react'
import Hero from '../../../components/organisms/Hero/Hero'
import { useGame } from '../../../context/GameContext'

// Reuses the animated KAS hero from Assessment 1 (floating character, glowing
// title, feathers) as a shared building block. The Play button opens the game.
const KasHero = React.memo(function KasHero() {
    const { open } = useGame()
    return <Hero onPlayClick={open} />
})

export default KasHero
