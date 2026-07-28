import React from 'react'
import { Box } from '@mui/material'
import SiteHeader from '../../organisms/SiteHeader/SiteHeader'
import SiteFooter from '../../organisms/SiteFooter/SiteFooter'
import type { PageLayoutProps } from './PageLayout.types'
import { styles } from './PageLayout.styles'

// Shared page shell: fixed header, page content, footer. Global overlays
// (particles, cursor, game dialog) live above this in AppRouter.
const PageLayout = React.memo(function PageLayout({ children }: PageLayoutProps) {
    return (
        <Box sx={styles.root}>
            <SiteHeader />
            <Box component="main" sx={styles.main}>
                {children}
            </Box>
            <SiteFooter />
        </Box>
    )
})

export default PageLayout
