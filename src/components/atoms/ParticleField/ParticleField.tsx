import React, { useMemo } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

interface Particle {
    id: number
    type: 'feather' | 'dot'
    size: number
    left: number   // vw percent
    top: number    // vh percent
    duration: number  // seconds
    delay: number     // seconds
    opacity: number
    swayAmount: number  // px
    rotate: number      // initial rotation for feathers (deg)
    dotColor: string    // only used for dot type
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function rand(min: number, max: number): number {
    return Math.random() * (max - min) + min
}

function randInt(min: number, max: number): number {
    return Math.floor(rand(min, max + 1))
}

const DOT_COLORS = [
    'rgba(196, 164, 74, 1)',   // gold
    'rgba(0, 229, 255, 1)',    // cyan
    'rgba(232, 228, 223, 1)',  // off-white
]

// ─── Keyframes string ────────────────────────────────────────────────────────

const KEYFRAMES = `
@keyframes particleDrift {
    0% {
        transform: translateY(0vh) translateX(0px) rotate(var(--p-rot, 0deg));
        opacity: 0;
    }
    8% {
        opacity: var(--p-opacity, 0.07);
    }
    30% {
        transform: translateY(-28vh) translateX(var(--p-sway, 20px)) rotate(calc(var(--p-rot, 0deg) + 8deg));
        opacity: var(--p-opacity, 0.07);
    }
    60% {
        transform: translateY(-56vh) translateX(calc(var(--p-sway, 20px) * -0.6)) rotate(calc(var(--p-rot, 0deg) - 4deg));
        opacity: var(--p-opacity, 0.07);
    }
    90% {
        opacity: calc(var(--p-opacity, 0.07) * 0.4);
    }
    100% {
        transform: translateY(-100vh) translateX(0px) rotate(calc(var(--p-rot, 0deg) + 5deg));
        opacity: 0;
    }
}

@keyframes dotPulse {
    0%, 100% { box-shadow: 0 0 4px 1px var(--dot-color, rgba(196,164,74,0.6)); }
    50%       { box-shadow: 0 0 10px 3px var(--dot-color, rgba(196,164,74,0.6)); }
}
`

// ─── Component ───────────────────────────────────────────────────────────────

const ParticleField = React.memo(function ParticleField() {
    const particles = useMemo<Particle[]>(() => {
        const count = randInt(15, 20)
        return Array.from({ length: count }, (_, i) => {
            const type: 'feather' | 'dot' = i < Math.ceil(count * 0.6) ? 'feather' : 'dot'
            return {
                id: i,
                type,
                size: type === 'feather' ? rand(10, 40) : rand(3, 8),
                left: rand(2, 97),
                // start from varying vertical positions so they're spread on load
                top: rand(30, 110),
                duration: rand(15, 40),
                delay: rand(0, 20),
                opacity: rand(0.03, 0.12),
                swayAmount: rand(15, 45) * (Math.random() < 0.5 ? 1 : -1),
                rotate: rand(-45, 45),
                dotColor: DOT_COLORS[randInt(0, DOT_COLORS.length - 1)],
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) // generate once, never regenerate

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1,
                overflow: 'hidden',
            }}
            aria-hidden="true"
        >
            <style>{KEYFRAMES}</style>

            {particles.map((p) => {
                const sharedStyle: React.CSSProperties = {
                    position: 'absolute',
                    left: `${p.left}vw`,
                    top: `${p.top}vh`,
                    // CSS custom properties for keyframe interpolation
                    ['--p-rot' as string]: `${p.rotate}deg`,
                    ['--p-sway' as string]: `${p.swayAmount}px`,
                    ['--p-opacity' as string]: p.opacity,
                    animation: `particleDrift ${p.duration}s ${p.delay}s linear infinite`,
                    pointerEvents: 'none',
                    willChange: 'transform, opacity',
                }

                if (p.type === 'feather') {
                    return (
                        <img
                            key={p.id}
                            src="/assets/ui/feather.png"
                            alt=""
                            draggable={false}
                            style={{
                                ...sharedStyle,
                                width: p.size,
                                height: 'auto',
                                opacity: p.opacity,
                                filter: 'blur(0.4px)',
                                userSelect: 'none',
                            }}
                        />
                    )
                }

                // Glowing dot
                return (
                    <span
                        key={p.id}
                        style={{
                            ...sharedStyle,
                            display: 'block',
                            width: p.size,
                            height: p.size,
                            borderRadius: '50%',
                            opacity: p.opacity,
                            backgroundColor: p.dotColor,
                            ['--dot-color' as string]: p.dotColor.replace(', 1)', ', 0.6)'),
                            animation: `particleDrift ${p.duration}s ${p.delay}s linear infinite,
                                        dotPulse ${(p.duration * 0.4).toFixed(1)}s ${p.delay}s ease-in-out infinite`,
                            filter: `blur(${p.size > 5 ? 0.5 : 0.2}px)`,
                        }}
                    />
                )
            })}
        </div>
    )
})

export default ParticleField
