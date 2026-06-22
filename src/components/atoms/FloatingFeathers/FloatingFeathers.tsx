import React from 'react'
import { Box } from '@mui/material'
import { styles, featherKeyframes } from './FloatingFeathers.styles'

const FEATHERS = [
    { top: '5%', left: '8%', size: 50, delay: 0, duration: 18, rotate: 15 },
    { top: '15%', left: '95%', size: 35, delay: 3, duration: 22, rotate: -25 },
    { top: '28%', left: '3%', size: 40, delay: 7, duration: 20, rotate: 30 },
    { top: '42%', left: '90%', size: 55, delay: 2, duration: 25, rotate: -15 },
    { top: '55%', left: '6%', size: 30, delay: 10, duration: 19, rotate: 45 },
    { top: '65%', left: '97%', size: 45, delay: 5, duration: 23, rotate: -35 },
    { top: '78%', left: '10%', size: 38, delay: 8, duration: 21, rotate: 20 },
    { top: '88%', left: '93%', size: 42, delay: 1, duration: 17, rotate: -40 },
    { top: '35%', left: '92%', size: 32, delay: 12, duration: 24, rotate: 10 },
    { top: '50%', left: '2%', size: 48, delay: 6, duration: 20, rotate: -20 },
    { top: '72%', left: '88%', size: 36, delay: 9, duration: 22, rotate: 35 },
    { top: '10%', left: '85%', size: 28, delay: 4, duration: 26, rotate: -10 }
]

const FloatingFeathers = React.memo(function FloatingFeathers() {
    return (
        <Box sx={styles.container}>
            <style>{featherKeyframes}</style>
            {FEATHERS.map((f, i) => (
                <img
                    key={i}
                    src="/assets/ui/feather.png"
                    alt=""
                    style={{
                        position: 'absolute',
                        top: f.top,
                        left: f.left,
                        width: f.size,
                        opacity: 0.08,
                        filter: 'blur(0.5px)',
                        animation: `floatFeather ${f.duration}s ${f.delay}s linear infinite`,
                        transform: `rotate(${f.rotate}deg)`,
                        pointerEvents: 'none'
                    }}
                />
            ))}
        </Box>
    )
})

export default FloatingFeathers
