/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { ProjectServices } from "./project.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from 'http-status-codes';



const addProject = catchAsync( async (req: Request, res: Response, next: NextFunction) => {
    const payload = {
        ...req.body,
        thumbnail: req.file?.path
    };

    const newProject = await ProjectServices.addProject(payload);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Project Added Successfully!",
        data: newProject
    });
});

const getAllProjects = catchAsync( async (req: Request, res: Response, next: NextFunction) => {
    const query = req.query;

    const result = await ProjectServices.getAllProjects(query as Record<string, string>);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Projects Retrieved Successfully!",
        data: result.data,
        meta: result.meta
    });
});

const getSingleProject = catchAsync( async (req: Request, res: Response, next: NextFunction) => {
    const projectId = req.params.projectId;

    const result = await ProjectServices.getSingleProject(projectId);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Project Retrieved Successfully!",
        data: result
    });
});

const updateProject = catchAsync( async (req: Request, res: Response, next: NextFunction) => {
    const projectId = req.params.projectId;
    const payload = {...req.body};
    if (req.file?.path) {
        payload.thumbnail = req.file.path;
    };

    const result = await ProjectServices.updateProject(projectId, payload);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Project Updated Successfully!",
        data: result
    });
});

const deleteProject = catchAsync( async (req: Request, res: Response, next: NextFunction) => {
    const projectId = req.params.projectId;

    await ProjectServices.deleteProject(projectId);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Project deleted Successfully!",
        data: null
    });
});



export const ProjectControllers = {
    addProject,
    getAllProjects,
    getSingleProject,
    updateProject,
    deleteProject
};