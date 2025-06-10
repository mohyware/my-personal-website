export interface Project {
    name: string;
    slug?: string;
    description: string;
    tags: string[];
    stars: number;
    github: string;
    image?: string;
    live?: string;
}

export interface Post {
    guid: string;
    title: string;
    pubDate: string;
    description: string;
    link: string;
    author: string;
    thumbnail?: string;
    categories?: string[];
}

export interface GitHubRepo {
    name: string;
    description: string;
    stargazers_count: number;
    html_url: string;
    topics: string[];
    homepage: string;
}