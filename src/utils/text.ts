// Small global text helpers.

// Initials from a name, e.g. "Kira Zakirov" -> "KZ".
export function initials(name: string): string {
    return name
        .split(/\s+/)
        .slice(0, 2)
        .map((word) => word[0]?.toUpperCase() ?? '')
        .join('')
}

// Splits a comma-separated string into trimmed items (for contribution chips).
export function splitList(value?: string): string[] {
    if (!value) return []
    return value.split(',').map((item) => item.trim()).filter(Boolean)
}
