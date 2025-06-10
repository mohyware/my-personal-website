import { Project } from "./types";
import { projectData } from "./projectsData";
import { GitHubRepo } from "./types";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function fetchGitHubRepo(repoUrl: string): Promise<Partial<Project>> {
    const match = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (!match) {
        throw new Error('Invalid GitHub repository URL');
    }

    const [, owner, repo] = match;

    const headers: HeadersInit = {
        'Accept': 'application/vnd.github.v3+json',
    };

    if (GITHUB_TOKEN) {
        headers['Authorization'] = `token ${GITHUB_TOKEN}`;
    }

    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers });

    if (!response.ok) {
        throw new Error(`Failed to fetch repository data: ${response.statusText}`);
    }

    const data: GitHubRepo = await response.json();

    return {
        name: data.name,
        description: data.description || '',
        tags: data.topics || [],
        stars: data.stargazers_count,
        github: data.html_url,
        live: data.homepage || undefined
    };
}


export async function fetchAllProjects(): Promise<Project[]> {
    const githubRepos = Object.keys(projectData);

    const githubProjects = await Promise.all(
        githubRepos.map(async (repoUrl) => {
            try {
                const repoData = await fetchGitHubRepo(repoUrl);
                const overrides = projectData[repoUrl] || {};
                return { ...repoData, ...overrides } as Project;
            } catch (error) {
                console.error(`Failed to fetch ${repoUrl}:`, error);
                return null;
            }
        })
    );

    return [...githubProjects.filter((p): p is Project => p !== null)];
}