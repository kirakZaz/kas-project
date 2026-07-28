import React from 'react'
import GameDialog from '../components/organisms/GameDialog/GameDialog'
import type { GameContextValue } from './GameContext.types'

// Makes the KAS WebGL build launchable from anywhere (header Play button, any CTA)
// without prop-drilling. The open/close handlers read state, so they live here
// inside the provider; consumers just call `useGame().open()`.
const GameContext = React.createContext<GameContextValue>({
    isOpen: false,
    open: () => {},
    close: () => {},
})

export function useGame() {
    return React.useContext(GameContext)
}

export function GameProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = React.useState(false)

    const open = React.useCallback(() => setIsOpen(true), [])
    const close = React.useCallback(() => setIsOpen(false), [])

    return (
        <GameContext.Provider value={{ isOpen, open, close }}>
            {children}
            <GameDialog isOpen={isOpen} onClose={close} />
        </GameContext.Provider>
    )
}
