import React from 'react'
import { Box } from '@mui/material'
import Header from './components/organisms/Header/Header'
import Hero from './components/organisms/Hero/Hero'
import Overview from './components/organisms/Overview/Overview'
import Concept from './components/organisms/Concept/Concept'
import Process from './components/organisms/Process/Process'
import Gallery from './components/organisms/Gallery/Gallery'
import Team from './components/organisms/Team/Team'
import Footer from './components/organisms/Footer/Footer'
import GameDialog from './components/organisms/GameDialog/GameDialog'

const App = React.memo(function App() {
    const [isGameOpen, setIsGameOpen] = React.useState(false)

    const handleOpenGame = React.useCallback(() => {
        setIsGameOpen(true)
    }, [])

    const handleCloseGame = React.useCallback(() => {
        setIsGameOpen(false)
    }, [])

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
            <Header onPlayClick={handleOpenGame} />
            <Hero onPlayClick={handleOpenGame} />
            <Overview />
            <Concept />
            <Process />
            <Gallery />
            <Team />
            <Footer />
            <GameDialog isOpen={isGameOpen} onClose={handleCloseGame} />
        </Box>
    )
})

export default App
