'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Nav() {
    const pathname = usePathname()
    const [currentPath, setCurrentPath] = useState<string | null>(null)

    useEffect(() => {
        setCurrentPath(pathname)
    }, [pathname])

    const linkClass = (path: string) =>
        currentPath === path
            ? 'border-b-4 border-[#5C5C5C] dark:border-[#FFFFFF] pb-1'
            : 'hover:text-gray-400'

    return (
        <nav className="flex justify-center gap-6 mb-8 text-sm">
            <Link href="/" className={linkClass('/')}>About</Link>
            <Link href="/blog" className={linkClass('/blog')}>Blog</Link>
            <Link href="/other" className={linkClass('/other')}>Other</Link>
        </nav>
    )
}
