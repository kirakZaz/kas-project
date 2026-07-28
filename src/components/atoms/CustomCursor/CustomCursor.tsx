import React from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Golden palette matching the gothic theme
const GOLD = '#C9A84C'
const GOLD_GLOW = 'rgba(201, 168, 76, 0.45)'
const GOLD_HOVER = '#FFD700'
const GOLD_HOVER_GLOW = 'rgba(255, 215, 0, 0.4)'

// Sizes
const RING_SIZE_DEFAULT = 12
const RING_SIZE_HOVER = 20
const DOT_SIZE = 4

// Spring config: the ring lags behind, the dot snaps immediately
const SPRING_CONFIG = { stiffness: 160, damping: 22, mass: 0.6 }

const CustomCursor = React.memo(function CustomCursor() {
    const [isVisible, setIsVisible] = React.useState(false)
    const [isHovering, setIsHovering] = React.useState(false)

    // Raw mouse position — used by the precise dot directly via motion values
    const rawX = useMotionValue(-100)
    const rawY = useMotionValue(-100)

    // Springy position — used by the lagging ring
    const springX = useSpring(rawX, SPRING_CONFIG)
    const springY = useSpring(rawY, SPRING_CONFIG)

    React.useEffect(() => {
        // --- Mouse move ---
        const onMouseMove = (e: MouseEvent) => {
            rawX.set(e.clientX)
            rawY.set(e.clientY)
        }

        // --- Window enter / leave ---
        const onMouseEnter = () => setIsVisible(true)
        const onMouseLeave = () => setIsVisible(false)

        // --- Hover detection on interactive elements ---
        const isInteractive = (el: Element): boolean => {
            const tag = el.tagName
            if (tag === 'A' || tag === 'BUTTON') return true
            if ((el as HTMLElement).dataset.cursor === 'pointer') return true
            return false
        }

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as Element
            // Walk up from the target to catch children of interactive elements
            let node: Element | null = target
            while (node) {
                if (isInteractive(node)) {
                    setIsHovering(true)
                    return
                }
                node = node.parentElement
            }
        }

        const onMouseOut = (e: MouseEvent) => {
            const related = e.relatedTarget as Element | null
            if (!related) {
                setIsHovering(false)
                return
            }
            // Only clear hover if we're not moving into another interactive element
            let node: Element | null = related
            while (node) {
                if (isInteractive(node)) return
                node = node.parentElement
            }
            setIsHovering(false)
        }

        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mouseenter', onMouseEnter)
        document.addEventListener('mouseleave', onMouseLeave)
        document.addEventListener('mouseover', onMouseOver)
        document.addEventListener('mouseout', onMouseOut)

        return () => {
            document.removeEventListener('mousemove', onMouseMove)
            document.removeEventListener('mouseenter', onMouseEnter)
            document.removeEventListener('mouseleave', onMouseLeave)
            document.removeEventListener('mouseover', onMouseOver)
            document.removeEventListener('mouseout', onMouseOut)
        }
    }, [rawX, rawY])

    // Derived style values
    const ringSize = isHovering ? RING_SIZE_HOVER : RING_SIZE_DEFAULT
    const ringColor = isHovering ? GOLD_HOVER : GOLD
    const ringGlow = isHovering ? GOLD_HOVER_GLOW : GOLD_GLOW
    const ringOpacity = isVisible ? 1 : 0

    // Shared base style for both cursor elements
    const baseStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 99999,
        borderRadius: '50%',
    }

    return (
        <>
            {/* Outer ring — follows with spring delay */}
            <motion.div
                style={{
                    ...baseStyle,
                    width: ringSize,
                    height: ringSize,
                    // Offset so the ring is centered on the cursor point
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                    border: `1.5px solid ${ringColor}`,
                    boxShadow: `0 0 8px 2px ${ringGlow}, 0 0 18px 4px ${ringGlow}`,
                    opacity: ringOpacity,
                    backgroundColor: 'transparent',
                }}
                animate={{
                    width: ringSize,
                    height: ringSize,
                    borderColor: ringColor,
                    boxShadow: `0 0 8px 2px ${ringGlow}, 0 0 18px 4px ${ringGlow}`,
                    opacity: ringOpacity,
                }}
                transition={{ duration: 0.18 }}
            />

            {/* Inner dot — snaps precisely to the cursor */}
            <motion.div
                style={{
                    ...baseStyle,
                    width: DOT_SIZE,
                    height: DOT_SIZE,
                    x: rawX,
                    y: rawY,
                    translateX: '-50%',
                    translateY: '-50%',
                    backgroundColor: ringColor,
                    boxShadow: `0 0 4px 1px ${ringGlow}`,
                    opacity: ringOpacity,
                }}
                animate={{
                    backgroundColor: ringColor,
                    opacity: ringOpacity,
                }}
                transition={{ duration: 0.18 }}
            />
        </>
    )
})

export default CustomCursor
