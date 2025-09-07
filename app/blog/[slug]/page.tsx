import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Post } from '../../../utils/types'
import { rssLink } from '../../../utils/constructUrls'
import { timeAgo } from "../../../utils/timeAgo";

export const revalidate = 60;

async function getPost(slug: string) {
    const response = await fetch(rssLink)
    const data = await response.json()
    const post = data.items.find((item: Post) => item.guid.split('/').pop() === slug)
    return post
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const post = await getPost(slug)

    if (!post) {
        return {
            title: 'Post Not Found',
        }
    }

    return {
        title: `${post?.title} - Mohy's Blog`,
        description: post.description,
    }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = await getPost(slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="max-w-4xl mx-auto py-8">
            <article className="prose dark:prose-invert max-w-none">

                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                <div className="mb-8 space-x-3">
                    <span>
                        {new Date(post.pubDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </span>
                    <span>({timeAgo(post.pubDate)})</span>
                </div>
                <div
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
                <div className="mt-8">
                    <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                        Read original post on Medium →
                    </a>
                </div>
            </article>
        </div>
    )
} 