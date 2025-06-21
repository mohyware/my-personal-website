import { Metadata } from 'next'
import Link from 'next/link'
import { Post } from '../../utils/types'
import { rssLink } from '../../utils/constructUrls'

export const runtime = 'edge';

export const revalidate = 60;

async function getMediumPosts(): Promise<Post[]> {
    const response = await fetch(rssLink)
    const data = await response.json()
    return data.items || []
}

export const metadata: Metadata = {
    title: 'Blog - Mohy',
    description: 'My thoughts and writings on software development and technology',
}

export default async function Blog() {
    const posts = await getMediumPosts()

    return (
        <div className="max-w-4xl mx-auto py-8">
            <div className="space-y-8">
                {posts.map((post: Post) => (
                    <article key={post.guid} className="pb-8">
                        <h2 className="text-2xl font-semibold mb-2">
                            <Link href={`/blog/${post.guid.split('/').pop()}`} className="hover:text-gray-400">
                                {post.title}
                            </Link>
                        </h2>
                        <div className="mb-4">
                            {new Date(post.pubDate).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </div>
                        <div className="line-clamp-3 text-textLight dark:text-darkText mb-4" dangerouslySetInnerHTML={{ __html: post.description }} />
                    </article>
                ))}
            </div>
        </div>
    )
} 