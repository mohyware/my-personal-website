import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local';
import './globals.css'
import Image from 'next/image'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ThemeSwitcher from './components/ThemeSwitcher'
import { ThemeProvider } from './components/ThemeProvider'
import { Github, Linkedin, Twitter, Mail, Download } from "lucide-react"
import { githubLink, linkedinLink, xLink, resumeLink, resumeDownloadLink, profilePictureLink, emailLink } from '../utils/constructUrls'

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
            <body className={`${departureMono.className} min-h-screen flex flex-col`}>
                <ThemeProvider attribute="class" defaultTheme="system">
                    <div className="flex flex-col min-h-screen">
                        <main className="flex-1">
                            <div className="flex items-center justify-center">
                                <div className="w-full max-w-3xl rounded-2xl p-8 md:p-12">
                                    {/* Profile Section */}
                                    <div className="flex flex-col">
                                        <div className="flex justify-between items-start">
                                            <div className="flex flex-col items-center text-center mb-10">
                                                <Image
                                                    src={profilePictureLink}
                                                    alt="Profile picture"
                                                    width={80}
                                                    height={80}
                                                    className="rounded-full mb-4 object-cover"
                                                />
                                                <h1 className="text-2xl font-bold font-mono ">Mohy Elden</h1>
                                                <p className="text-textLight dark:text-darkText mb-2">Software Engineer</p>
                                                <div className="flex gap-4 mb-2">
                                                    <a href={xLink} target="_blank" className='hover:text-gray-400' aria-label="X"><Twitter /></a>
                                                    <a href={githubLink} target="_blank" className='hover:text-gray-400' aria-label="GitHub"><Github /></a>
                                                    <a href={linkedinLink} target="_blank" className='hover:text-gray-400' aria-label="LinkedIn"><Linkedin /></a>
                                                    <a href={emailLink} aria-label="Email" target="_blank" className='hover:text-gray-400' ><Mail /></a>
                                                </div>
                                                <div className="flex gap-2 items-center ">
                                                    <a href={resumeLink} target="_blank"
                                                        className="flex items-center gap-2 bg-gray-100 hover:bg-gray-300 px-3 py-1 mt-2 rounded-full text-gray-800">
                                                        My Resume
                                                    </a>
                                                    <a
                                                        href={resumeDownloadLink}
                                                        download
                                                        rel="noopener noreferrer">
                                                        <Download className='hover:text-gray-400 mt-1' />
                                                    </a>
                                                </div>
                                            </div>
                                            <ThemeSwitcher />
                                        </div>
                                    </div>
                                    <Nav />
                                    {children}
                                </div>
                            </div>
                        </main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
} 