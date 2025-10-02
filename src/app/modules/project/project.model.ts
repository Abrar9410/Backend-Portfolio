import { model, Schema } from "mongoose";
import { IProject } from "./project.interface";




const projectSchema = new Schema<IProject>({
    title: { type: String, required: true, unique: true },
    thumbnail: { type: String, required: true, unique: true },
    overview: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: [String], required: true },
    challenges: { type: String },
    future_plans: { type: String },
    github_repo: { type: String, required: true },
    live_link: { type: String, required: true }
}, {
    timestamps: true,
    versionKey: false
});


export const Projects = model<IProject>("Projects", projectSchema);