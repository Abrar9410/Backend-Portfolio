import { Types } from "mongoose";


export interface IBlog {
    _id?: Types.ObjectId;
    title: string;
    thumbnail: string;
    overview: string;
    contentJSON: Record<string, unknown>;
    contentHTML: string;
    tags: string[];
    views?: number;
    createdAt?: Date
    updatedAt?: Date
};