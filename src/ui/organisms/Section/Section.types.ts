import type { ReactNode } from 'react'

export interface SectionProps {
    id?: string
    title?: string
    subtitle?: string
    tone?: 'default' | 'alt'
    children: ReactNode
}
