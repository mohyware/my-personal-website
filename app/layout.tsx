import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local';
import './globals.css'
import Image from 'next/image'
import Nav from './components/Nav'
import ThemeSwitcher from './components/ThemeSwitcher'
import { ThemeProvider } from './components/ThemeProvider'
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const departureMono = localFont({
    src: [
        {
            path: '../public/fonts/DepartureMono/DepartureMono-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-departureMono',
    display: 'swap',
});

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Mohyware',
    description: 'Personal portfolio showcasing my work and experience',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${departureMono.className} min-h-screen`}>
                <ThemeProvider attribute="class" defaultTheme="system">
                    <main>
                        <div className="flex items-center justify-center">
                            <div className="w-full max-w-3xl rounded-2xl shadow-xl p-8 md:p-12">
                                {/* Profile Section */}
                                <div className="flex flex-col">
                                    <div className="flex justify-between items-start">
                                        <div className="flex flex-col items-center text-center mb-10">
                                            <Image
                                                src="https://pbs.twimg.com/profile_images/1920358717276520448/Lo1UCmry_400x400.jpg"
                                                alt="Profile picture"
                                                width={80}
                                                height={80}
                                                className="rounded-full mb-4 object-cover"
                                            />
                                            <h1 className="text-2xl font-bold font-mono ">Mohy Elden</h1>
                                            <p className="text-secondary mb-2">Software Engineer</p>
                                            <div className="flex gap-4 mb-2">
                                                <a href="https://x.com/mohyware" target="_blank" aria-label="X"><Twitter /></a>
                                                <a href="https://github.com/mohyware" target="_blank" aria-label="GitHub"><Github /></a>
                                                <a href="https://www.linkedin.com/in/mohyware" target="_blank" aria-label="LinkedIn"><Linkedin /></a>
                                                <a href="mailto:mohieelden50@gmail.com" aria-label="Email" target="_blank" ><Mail /></a>
                                            </div>
                                            <a href="https://drive.google.com/file/d/1p-y6slBxUvMZ21R7IFVVVXLqsDr45zoB/view" target="_blank"
                                                className="flex items-center gap-2 bg-gray-100 hover:bg-gray-300 px-3 py-1 mt-2 rounded-full text-gray-800">
                                                My Resume
                                            </a>
                                        </div>
                                        <ThemeSwitcher />
                                    </div>
                                </div>
                                <Nav />
                                {children}
                            </div>
                        </div>
                    </main>
                </ThemeProvider>
            </body>
        </html >
    )
} 