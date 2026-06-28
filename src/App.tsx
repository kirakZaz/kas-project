import React from 'react'
import { Box, GlobalStyles } from '@mui/material'
import Header from './components/organisms/Header/Header'
import Hero from './components/organisms/Hero/Hero'
import Overview from './components/organisms/Overview/Overview'
import Concept from './components/organisms/Concept/Concept'
import Process from './components/organisms/Process/Process'
import Gallery from './components/organisms/Gallery/Gallery'
import Team from './components/organisms/Team/Team'
import Footer from './components/organisms/Footer/Footer'
import GameDialog from './components/organisms/GameDialog/GameDialog'
import ParticleField from './components/atoms/ParticleField/ParticleField'
import CustomCursor from './components/atoms/CustomCursor/CustomCursor'
import { ImageViewerProvider } from './context/ImageViewerContext'

const App = React.memo(function App() {
    const [isGameOpen, setIsGameOpen] = React.useState(false)

    const handleOpenGame = React.useCallback(() => {
        setIsGameOpen(true)
    }, [])

    const handleCloseGame = React.useCallback(() => {
        setIsGameOpen(false)
    }, [])

    return (
        <ImageViewerProvider>
            <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative', cursor: isGameOpen ? 'auto' : 'none' }}>
                <GlobalStyles styles={{
                    '*, *::before, *::after': {
                        cursor: isGameOpen ? 'auto !important' : 'none !important'
                    }
                }} />
                {!isGameOpen && <CustomCursor />}
                <ParticleField />
                <Header onPlayClick={handleOpenGame} />
                <Hero onPlayClick={handleOpenGame} />
                <Overview />
                <Process />
                <Concept />
                <Gallery />
                <Team />
                <Footer />
                <GameDialog isOpen={isGameOpen} onClose={handleCloseGame} />
            </Box>
        </ImageViewerProvider>
    )
})

export default App
