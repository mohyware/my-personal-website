import Link from "next/link"
import Image from "next/image"
import { Project } from "../utils/types"
import { fetchAllProjects } from "../utils/getProjectsData"
import { experience1Link } from "../utils/constructUrls"

export default async function Home() {
    const projects = await fetchAllProjects();
    return (
        <div>
            {/* About Section */}
            <div className="mb-20">
                <p className="text-left text-[1rem]">
                    Hello! I&apos;m Mohy Elden Ibrahim, a Computer Science student.<br /> I&apos;m passionate about building stuff and contributing to open source.</p>
                {/* <p className="text-left font-mono text-[1rem]" >I'm interested in Web Development, with a focus on the back end. I'm currently open to new opportunities in the software industry. </p> */}
            </div>

            {/* Experience Section */}
            <div className="mb-20">
                <h2 className="text-lg font-bold mb-4">Experience</h2>
                <div className="space-y-6">
                    <div className="flex items-start gap-3">
                        <span className="mt-1 w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 block"></span>
                        <Link href={experience1Link} target="_blank" className="hover:text-gray-400">
                            <span className="font-semibold">Software Engineer</span> <span className="text-xs border border-gray-400 rounded px-2 py-0.5 ml-1 align-middle">PRESENT</span>
                            <div className="text-xs text-textLight dark:text-darkText mt-1">Google Summer of Code 2025 @ Open Astronomy</div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Projects Section */}
            <div className="mb-10">
                <h2 className="text-lg font-bold mb-4">Projects</h2>
                <div className="grid grid-cols-1 gap-8">
                    {projects.map((project: Project) => (
                        <div className="flex flex-col md:flex-row gap-6 p-6 rounded-lg bordered hover:shadow-md hover:shadow-gray-300 dark:hover:shadow-gray-800 transition-shadow"
                            key={project.name}
                        >
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-3">
                                    <h3 className="text-xl font-bold">{project.name}</h3>
                                </div>
                                {project.slug && <p className="font-semibold mb-2">{project.slug}</p>}
                                <p className="text-sm text-textLight dark:text-darkText mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.tags.map((tag: string) => (
                                        <span key={tag} className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded">{tag}</span>
                                    ))}
                                </div>
                                <div className="flex gap-3 text-sm">
                                    {project.live && <a href={project.live} target="_blank"
                                        className="flex items-center gap-2 bg-blue-100 hover:bg-blue-300 px-3 py-1 rounded-full text-gray-800"
                                    >Live Demo</a>}
                                    <a href={project.github} target="_blank"
                                        className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-full text-gray-800">
                                        GitHub
                                        {project.stars ? <div className="flex items-center gap-1">
                                            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                            <span>{project.stars}</span>
                                        </div> : null}
                                    </a>
                                </div>
                            </div>
                            {project.image && <div className="w-full md:w-64 h-40 rounded-lg flex items-center justify-center relative">
                                <div className="text-center">
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>}
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
} 