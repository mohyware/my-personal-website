import { Metadata } from 'next'
import Link from 'next/link'
import { Post } from '../../utils/types'
import { rssLink } from '../../utils/constructUrls'
import { parseRss } from '../../utils/parseRss'

export const revalidate = 60;
export const runtime = 'nodejs'

export const metadata: Metadata = {
    title: 'Blog - Mohy',
    description: 'My thoughts and writings on software development and technology',
}

export default async function Blog() {
    const posts = await parseRss(rssLink, revalidate);

    const groups: { [tag: string]: Post[] } = {};
    posts.forEach(post => {
        let tag = post.categories?.[0] || 'Other';

        // Custom
        if (post.categories?.[0] === "openastronomy" || post.categories?.[1] === "openastronomy" || post.categories?.[2] === "openastronomy") {
            tag = "GSoC Blogs";
        }

        if (post.categories?.[0] === "google-summer-of-code" || post.categories?.[1] === "google-summer-of-code" || post.categories?.[2] === "google-summer-of-code" ||
            post.categories?.[0] === "side-project" || post.categories?.[1] === "side-project" || post.categories?.[2] === "side-project"
        ) {
            tag = "Writing";
        }

        if (!groups[tag]) groups[tag] = [];
        groups[tag].push(post);
    });

    return (
        <div className="max-w-4xl mx-auto py-8">
            {Object.entries(groups).map(([tag, posts]) => (
                <div key={tag} className="mb-12">
                    <h2 className="text-3xl font-bold mb-4 font-mono">{tag}</h2>
                    <ul className="space-y-3">
                        {posts.map(post => (
                            <li key={post.guid} className="items-baseline">
                                <span className="mr-2 text-lg">•</span>
                                <Link
                                    href={`/blog/${post.guid.split('/').pop()}`}
                                    className="hover:text-gray-400 font-mono hyphens-auto break-words"
                                >
                                    {post.title}
                                </Link>
                                <span className="ml-2 text-sm text-gray-400 whitespace-nowrap">
                                    {new Date(post.pubDate).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}