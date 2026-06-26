import React from 'react'

export function useTilt(maxTilt = 12) {
    const ref = React.useRef<HTMLDivElement>(null)

    const handleMouseMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        el.style.transform = `perspective(800px) rotateY(${x * maxTilt}deg) rotateX(${-y * maxTilt}deg) scale3d(1.03, 1.03, 1.03)`
    }, [maxTilt])

    const handleMouseLeave = React.useCallback(() => {
        const el = ref.current
        if (!el) return
        el.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)'
    }, [])

    return { ref, handleMouseMove, handleMouseLeave }
}
