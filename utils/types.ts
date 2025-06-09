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