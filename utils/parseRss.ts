import FeedParser from 'feedparser'
import { Readable } from 'stream'
import type { Post } from './types'

function extractFirstImageSrc(html: string | undefined): string | undefined {
    if (!html) return undefined
    const match = html.match(/<img[^>]+src=["']([^"']+)["']/i)
    return match ? match[1] : undefined
}

export async function parseRss(feedUrl: string, revalidate?: number): Promise<Post[]> {
    const response = await fetch(feedUrl, revalidate ? { next: { revalidate } } : undefined as any)
    if (!response.ok || !response.body) return []

    const stream = Readable.fromWeb(response.body as any)
    const feedparser = new FeedParser()

    const items: Post[] = []

    return await new Promise<Post[]>((resolve, reject) => {
        stream.on('error', reject)
        feedparser.on('error', reject)
        feedparser.on('readable', function (this: FeedParser) {
            let item: any
            while ((item = this.read())) {
                const descriptionHtml = String(item.description || item.summary || '')
                const thumbnailFromContent = extractFirstImageSrc(descriptionHtml)
                const post: Post = {
                    guid: String(item.guid || item.link || item.title || Math.random()),
                    title: String(item.title || ''),
                    pubDate: item.pubDate ? new Date(item.pubDate).toISOString() : (item.date ? new Date(item.date).toISOString() : new Date().toISOString()),
                    description: descriptionHtml,
                    link: String(item.link || ''),
                    author: String(item.author || (item.meta && item.meta.author) || ''),
                    thumbnail: item.image?.url || (Array.isArray(item.enclosures) && item.enclosures[0]?.url) || thumbnailFromContent || undefined,
                    categories: Array.isArray(item.categories) ? item.categories.map((c: any) => String(c)) : undefined,
                    content: descriptionHtml,
                }
                items.push(post)
            }
        })
        feedparser.on('end', () => resolve(items))
        stream.pipe(feedparser)
    })
} 