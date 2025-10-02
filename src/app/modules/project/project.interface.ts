import { Types } from "mongoose";



export interface IProject {
    _id?: Types.ObjectId;
    title: string;
    thumbnail: string;
    overview: string;
    description: string;
    technologies: string[];
    challenges?: string;
    future_plans?: string;
    github_repo: string;
    live_link: string;
};