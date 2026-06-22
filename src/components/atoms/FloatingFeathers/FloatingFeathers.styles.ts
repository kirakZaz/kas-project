export const featherKeyframes = `
@keyframes floatFeather {
    0% {
        transform: translateY(0) rotate(var(--rot, 0deg));
        opacity: 0;
    }
    10% {
        opacity: 0.08;
    }
    50% {
        transform: translateY(30px) translateX(15px) rotate(calc(var(--rot, 0deg) + 10deg));
        opacity: 0.12;
    }
    90% {
        opacity: 0.06;
    }
    100% {
        transform: translateY(-20px) translateX(-10px) rotate(calc(var(--rot, 0deg) - 5deg));
        opacity: 0;
    }
}
`

export const styles = {
    container: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
    },
    feather: {
        position: 'absolute',
        opacity: 0.08,
        filter: 'blur(0.5px)',
        animation: 'floatFeather linear infinite',
        pointerEvents: 'none'
    }
}
