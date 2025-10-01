import { Types } from "mongoose";


export interface IBlog {
    _id?: Types.ObjectId;
    title: string;
    thumbnail: string;
    content: string;
    tags: string[];
    views?: number;
    createdAt?: Date
    updatedAt?: Date
}