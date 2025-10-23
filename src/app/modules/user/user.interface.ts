import { Types } from "mongoose";


interface ISkills {
    languages: string[];
    frontend: string[];
    backend: string[];
    databases: string[];
    authentication: string[];
    odm_orm: string[];
    cloud_devOps: string[];
    payments: string[];
    devTools: string[];
    concepts: string[];
};

interface IAbout {
    storyHTML: string;
    skills: ISkills;
    languages: string[];
    certifications: string[];
};

export interface IUser {
    _id?: Types.ObjectId;
    name: string;
    email: string;
    password?: string;
    picture?: string;
    about?: IAbout;
};