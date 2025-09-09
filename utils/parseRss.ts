import FeedParser from 'feedparser'
import { Readable } from 'stream'
import type { Post } from './types'

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
                const post: Post = {
                    guid: String(item.guid || item.link || item.title || Math.random()),
                    title: String(item.title || ''),
                    pubDate: item.pubDate ? new Date(item.pubDate).toISOString() : (item.date ? new Date(item.date).toISOString() : new Date().toISOString()),
                    description: String(item.description || item.summary || ''),
                    link: String(item.link || ''),
                    author: String(item.author || (item.meta && item.meta.author) || ''),
                    thumbnail: item.image?.url || (Array.isArray(item.enclosures) && item.enclosures[0]?.url) || undefined,
                    categories: Array.isArray(item.categories) ? item.categories.map((c: any) => String(c)) : undefined,
                    content: String(item.description || item.summary || ''),
                }
                items.push(post)
            }
        })
        feedparser.on('end', () => resolve(items))
        stream.pipe(feedparser)
    })
} 