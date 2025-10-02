import { deleteImageFromCLoudinary } from "../../config/cloudinary.config";
import AppError from "../../errorHelpers/AppError";
import { QueryBuilder } from "../../utils/QueryBuilder";
import { projectSearchableFields } from "./project.constant";
import { IProject } from "./project.interface";
import { Projects } from "./project.model";



const addProject = async (payload: Partial<IProject>) => {
    const newProject = await Projects.create(payload);

    return newProject;
};

const getProjects = async (query: Record<string, string>) => {
    const queryBuilder = new QueryBuilder(Projects.find(), query);
    const projectsData = queryBuilder
        .filter()
        .search(projectSearchableFields)
        .sort()
        .fields()
        .paginate();

    const [data, meta] = await Promise.all([
        projectsData.build(),
        queryBuilder.getMeta()
    ]);

    return {
        data,
        meta
    };
};

const getSingleProject = async (projectId: string) => {
    const project = await Projects.findById(projectId);

    if (!project) {
        throw new AppError(404, "Project Not Found!");
    };

    return project;
};

const updateProject = async (projectId: string, payload: Partial<IProject>) => {
    const project = await Projects.findById(projectId);

    if (!project) {
        throw new AppError(404, "Project Not Found!");
    };

    const updatedProject = await Projects.findByIdAndUpdate(projectId, payload, { new: true, runValidators: true });

    if (payload.thumbnail && project.thumbnail) {
        await deleteImageFromCLoudinary(project.thumbnail);
    };

    return updatedProject;
};

const deleteProject = async (projectId: string) => {
    const project = await Projects.findById(projectId);

    if (!project) {
        throw new AppError(404, "Project Does Not Exist!");
    };

    const result = await Projects.findByIdAndDelete(projectId);

    if (project.thumbnail) {
        await deleteImageFromCLoudinary(project.thumbnail);
    };

    return result;
};


export const ProjectServices = {
    addProject,
    getProjects,
    getSingleProject,
    updateProject,
    deleteProject
};