import Link from "next/link"
import Image from "next/image"
import { Project } from "../utils/types"
import { fetchAllProjects } from "../utils/getProjectsData"
import { experience1Link } from "../utils/constructUrls"

export const revalidate = 60;

export default async function Home() {
    const projects = await fetchAllProjects();
    return (
        <div>
            {/* About Section */}
            <div className="mb-20">
                <p className="text-left text-[1rem]" >
                    Hello! I&apos;m Mohy Elden Ibrahim, a software engineer interested in all kinds of software, especially web development. I also love building open-source projects and contributing to others.</p>
                {/* <p className="text-left font-mono text-[1rem]" >I'm interested in Web Development, with a focus on the back end. I'm currently open to new opportunities in the software industry. </p> */}
            </div>

            {/* Experience Section */}
            <div className="mb-20">
                <h2 className="text-lg font-bold mb-4">Experience</h2>
                <div className="space-y-6">
                    <div className="flex items-start gap-3">
                        <span className="mt-1 w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 block"></span>
                        <Link href={experience1Link} target="_blank" className="hover:text-gray-400">
                            <span className="font-semibold">Software Engineer</span> <span className="text-xs border-gray-400 rounded px-2 py-0.5 ml-1 align-middle">May 2025 – Sep 2025</span>
                            <div className="text-xs text-textLight dark:text-darkText mt-1">Google Summer of Code 2025 @ Open Astronomy</div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Projects Section */}
            <div className="mb-10">
                <h2 className="text-lg font-bold mb-4">Projects</h2>
                <div className="space-y-8">
                    {projects.map((project: Project) => (
                        <div key={project.name} className="flex items-start gap-3">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 block flex-shrink-0"></span>
                            <div className="flex-1">
                                <div className="mb-1">
                                    <a href={project.github} target="_blank" className="font-semibold hover:text-gray-400">
                                        {project.name}
                                    </a>
                                    <span className="text-gray-400 mx-2">–</span>
                                    <span className="text-sm text-textLight dark:text-darkText">
                                        {project.description}
                                    </span>
                                </div>
                                <div className="flex gap-3 text-sm ">
                                    {project.live && (
                                        <a href={project.live} target="_blank" className="text-blue-400 hover:text-blue-300 underline">
                                            Demo
                                        </a>
                                    )}
                                    <a className="text-gray-400 hover:text-gray-300" href={project.github} target="_blank">
                                        <span className="underline">
                                            GitHub
                                        </span>
                                        {project.stars > 0 && (
                                            <span className="ml-1">
                                                ({project.stars}
                                                <svg className="ml-1 w-4 h-4 fill-current inline" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>)
                                            </span>
                                        )}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
} 
