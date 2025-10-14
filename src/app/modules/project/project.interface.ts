import { Types } from "mongoose";



export interface IProject {
    _id?: Types.ObjectId;
    title: string;
    thumbnail: string;
    overview: string;
    startDate: string;
    endDate?: string;
    detailsJSON: Record<string, unknown>;
    detailsHTML: string;
    technologies: string[];
    featured: boolean;
    github_repo: string;
    live_link: string;
};