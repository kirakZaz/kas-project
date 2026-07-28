import type { BriefMeta } from '../types/content.types'

// Turns a brief's metadata into the compact chip labels shown in headers.
export function briefChips(meta: BriefMeta): string[] {
    return [
        meta.title,
        meta.format,
        `Weight ${meta.weight}`,
        meta.due ? `Due ${meta.due}` : '',
        meta.marks ?? '',
    ].filter(Boolean)
}
