'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
    const pathname = usePathname()

    const linkClass = (path: string) =>
        pathname === path
            ? 'border-b-4 border-textLight dark:border-textDark pb-1'
            : ''

    return (
        <nav className="flex justify-center gap-6 mb-8 text-sm">
            <Link href="/" className={linkClass('/')}>About</Link>
            <Link href="/blogs" className={linkClass('/blogs')}>Blogs</Link>
            <Link href="/contact" className={linkClass('/contact')}>Contact</Link>
            <Link href="/more" className={linkClass('/more')}>More</Link>
        </nav>
    )
}
