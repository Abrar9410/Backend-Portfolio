/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { BlogServices } from "./blog.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { IBlog } from "./blog.interface";



const createBlog = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const payload = {
        ...req.body,
        thumbnail: req.file?.path
    };

    const result = await BlogServices.createBlog(payload);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Blog Created Successfully!",
        data: result
    });
});

const getBlogs = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await BlogServices.getBlogs(req.query as Record<string, string>);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Blogs Retrieved Successfully!",
        data: result.data,
        meta: result.meta
    });
});

const getSingleBlog = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await BlogServices.getSingleBlog(req.params.blogId as string);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Blog Retrieved Successfully!",
        data: result
    });
});

const updateBlog = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const payload = {...req.body};
    if (req.file?.path) {
        payload.thumbnail = req.file.path;
    };

    const result = await BlogServices.updateBlog(req.params.blogId as string, payload);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Blog Updated Successfully!",
        data: result
    });
});

const deleteBlog = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    await BlogServices.deleteBlog(req.params.blogId as string);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Blog Deleted Successfully!",
        data: null
    });
});


export const BlogControllers = {
    createBlog,
    getBlogs,
    getSingleBlog,
    updateBlog,
    deleteBlog
};