import { Project } from "./types";

interface GitHubRepo {
    name: string;
    description: string;
    stargazers_count: number;
    html_url: string;
    topics: string[];
    homepage: string;
}

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