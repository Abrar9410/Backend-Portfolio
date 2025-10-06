/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes"
import { UserServices } from "./user.service";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { JwtPayload } from "jsonwebtoken";



// const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
//     const payload = {
//         ...req.body,
//         picture: req.file?.path
//     };

//     const user = await UserServices.createUserService(payload);

//     sendResponse(res, {
//         success: true,
//         statusCode: httpStatus.CREATED,
//         message: "User Created Successfully!",
//         data: user
//     });
// });

const updateUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.id;
    const payload = {...req.body};
    if (req.file?.path) {
        payload.picture = req.file.path;
    };

    const updatedUser = await UserServices.updateUserService(userId, payload);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Your Info Updated Successfully!",
        data: updatedUser
    });
});

const getMe = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const decodedToken = req.user as JwtPayload;
    const result = await UserServices.getMeService(decodedToken.userId);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Your profile Retrieved Successfully!",
        data: result.data
    });
});


export const UserControllers = {
    // createUser,
    updateUser,
    getMe
};