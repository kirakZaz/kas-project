import React from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ImageViewerProvider } from './context/ImageViewerContext'
import { GameProvider } from './context/GameContext'
import ParticleField from './components/atoms/ParticleField/ParticleField'
import FloatingFeathers from './components/atoms/FloatingFeathers/FloatingFeathers'
import CursorLayer from './ui/system/CursorLayer'
import ScrollToTop from './ui/system/ScrollToTop'
import { ROUTES } from './content/routes'
import HomePage from './pages/HomePage'
import Assessment1Page from './pages/Assessment1Page'
import Assessment2Page from './pages/Assessment2Page'
import Assessment3Page from './pages/Assessment3Page'

// Router shell + global overlays. HashRouter keeps deep links working on GitHub
// Pages without extra server config.
const AppRouter = React.memo(function AppRouter() {
    return (
        <ImageViewerProvider>
            <GameProvider>
                <HashRouter>
                    <ScrollToTop />
                    <ParticleField />
                    <FloatingFeathers />
                    <CursorLayer />
                    <Routes>
                        <Route path={ROUTES.home} element={<HomePage />} />
                        <Route path={ROUTES.assessment1} element={<Assessment1Page />} />
                        <Route path={ROUTES.assessment2} element={<Assessment2Page />} />
                        <Route path={ROUTES.assessment3} element={<Assessment3Page />} />
                        <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
                    </Routes>
                </HashRouter>
            </GameProvider>
        </ImageViewerProvider>
    )
})

export default AppRouter
