export function stripHtml(html: string): string {
    if (!html) return ''
    const text = html.replace(/<[^>]*>/g, ' ')
    return text.replace(/\s+/g, ' ').trim()
} 