import React from 'react'
import { useLocation } from 'react-router-dom'

// Resets scroll position to the top whenever the route changes.
const ScrollToTop = React.memo(function ScrollToTop() {
    const { pathname } = useLocation()
    React.useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' })
    }, [pathname])
    return null
})

export default ScrollToTop
